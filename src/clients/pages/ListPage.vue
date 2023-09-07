<script setup lang="ts">
import ClientList from '@/clients/components/ClientList.vue';
import PaginationNumbers from '@/clients/components/PaginationNumbers.vue'
import useClients from '../composables/useClients';
import LoadingModal from '@/shared/components/LoadingModal.vue'

const { isLoading, clients, getPage, currentPage, totalPageNumbers, totalPages } = useClients();

</script>

<template>
    <div>
        <h1>Listado de clientes</h1>

        <!-- Clients list  -->
        <ClientList :clients="clients"/>

        <!-- Pagination numbers -->
        <PaginationNumbers 
            @value-page="getPage" 
            :current-page="currentPage" 
            :total-page-numbers="totalPageNumbers" 
            :total-pages="totalPages"    
        />
        <!-- Loading Modal -->

        <LoadingModal v-if="isLoading"/>

    </div>
</template>