<script setup lang="ts">
import { ref, watch } from 'vue';
// import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import LoadingModal from '@/shared/components/LoadingModal.vue';
import useClient from '@/clients/composables/useClient';
import { useRoute, useRouter } from 'vue-router';

const route     = useRoute();
const router    = useRouter();
const {
    client,
    isLoading,
    isError,
    updateClient,
    isUpdatinfSuccess,
    isUpdating

} = useClient(+route.params.id);

watch(isError, () => {
    if (isError.value)
        router.replace('/clients');
})

</script>

<template>
    <LoadingModal v-if="isLoading" />
    <div v-if="client" class="d-flex flex-column gap-2">

        <div class="d-flex flex-column bg-white rounded px-4 py-3 ">
            <span class="fw-bold text-dark">Info del cliente</span>
            <span class="text-dark"><b>Nombre:</b> {{ client.name }}</span>
            <span class="text-dark"><b>Dirección:</b> {{ client.address }}</span>
        </div>

        <h3>Actulizar información del cliente</h3>

        <form class="d-flex flex-column " @submit.prevent="updateClient(client)">
            <input class="text-center py-1 my-1" v-model="client.name" required>
            <input class="text-center py-1 my-1" v-model="client.address" required>
            <button 
                class="btn btn-secondary" 
                type="submit"
                :disabled="isUpdating"
            >Actualizar</button>
        </form>

        <h4 v-if="isUpdating" class="alert alert-info py-1 text-center">Guardando...</h4>
        <h5 v-if="isUpdatinfSuccess" class="alert alert-success py-1 text-center">¡Guardado!</h5>
    </div>
    <code>
            {{ client }}
        </code>
</template>