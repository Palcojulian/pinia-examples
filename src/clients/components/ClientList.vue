<script setup lang="ts">
import useClients from '@/clients/composables/useClients';

useClients();

</script>

<template>
    <ul>
        <li>
            <RouterLink :to="{
                name: 'client-id',
                params: {id: 1}
            }">
                ClientName
            </RouterLink>
        </li>
    </ul>
</template>

<style scoped>

</style>