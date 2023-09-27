import { computed, ref, watch } from 'vue';
import type { Client } from '@/clients/interfaces/client'
import { useQuery, useMutation } from '@tanstack/vue-query';
import clientsApi from '@/api/clients-api';

const getClient = async (id: number):Promise<Client> => {
    const { data } = await clientsApi.get<Client>(`/clients/${id}`);
    return data;
}

const updateCliente = async (client: Client): Promise<Client> => {
    await new Promise(resolve => {
        setTimeout(()=> resolve(true), 2000)  
    })
    const { data } = await clientsApi.patch<Client>(`/clients/${client.id}`, client);
    return data;
}



const useClient = (id: number) => {
    const client = ref<Client>();

    const { isLoading, data, isError} = useQuery(
        ['client', id],
        () => getClient(id),
        {retry: false}
    )
    
    watch(data, (newVal) => {
        if (newVal)
            client.value = { ...newVal };

    }, { immediate: true })

    const clientMutation = useMutation(updateCliente);


    watch(clientMutation.isSuccess, () => {
        setTimeout(() => {
            clientMutation.reset();
        }, 3000)
    })

    return {
        client,
        isError,
        isLoading,
        clientMutation,

        //Metodos
        updateClient: computed(() => clientMutation.mutate),
        isUpdating  : computed(() => clientMutation.isLoading.value),
        isUpdatinfSuccess : computed(()=> clientMutation.isSuccess.value)
    }
}

export default useClient;