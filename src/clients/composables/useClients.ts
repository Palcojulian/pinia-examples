import clientsApi from "@/api/clients-api"
import type { Client } from "@/clients/interfaces/client";
import { useClientsStore } from "@/store/clients";
import { useQuery } from '@tanstack/vue-query'
import { computed, watch } from "vue";
import { storeToRefs } from "pinia";


const getClients = async( page: number):Promise<Client[]> => {

    await new Promise(resolve => {
        setTimeout(() => resolve(true), 2000);
    })

    const { data } = await clientsApi.get<Client[]>(`/clients?_page=${page}`);
    return data;
}


const useClients = () => {

    const store = useClientsStore();
    const { clients, currentPage, totalPages } = storeToRefs(store);

    const { isLoading, data } = useQuery(
        ['clients?page=', currentPage],
        () => getClients(currentPage.value),
    );
    
    watch(data, clients => {
        if (clients) {
            store.setClients(clients);
        }    
    })

    return {
        //properties
        clients,
        currentPage,
        isLoading,
        totalPages,

        //actions
        getPage(page: number) {
            store.setPage(page);
        },
       
        //getters
        totalPageNumbers: computed(
            () => [...new Array(totalPages.value)].map((v, i) => i + 1)
        )
    }
}

export default useClients;