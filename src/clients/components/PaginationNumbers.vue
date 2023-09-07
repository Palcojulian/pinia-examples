<script setup lang="ts">
import { ref, watch, toRef } from 'vue';

interface Emits{
    (e: 'value-page', page: number):void //Como se tipa una funcion, en este caso un emit
}

const props = defineProps<{currentPage: number, totalPages: number}>()
const emits = defineEmits<Emits>();
const totalPageNumbers = ref<number[]>([]);
const totalPages = toRef(props, 'totalPages')

watch(totalPages, () => {
    totalPageNumbers.value = [...new Array(totalPages.value)].map((v, i) => i + 1)
}, { immediate: true }); //Haga los cambios apenas se monte el componente

</script>

<template>
    <div class="mt-2">
        <button 
            class="btn btn-outline-success me-1 py-1" 
            :disabled="currentPage ===1"
            @click="emits('value-page', currentPage - 1 )"
        > Anterior</button>
        
        <button 
            v-for="number in totalPageNumbers" :key="number"
            :class="number === currentPage ? 'btn btn-outline-success me-1 py-1 active': 'btn btn-outline-success me-1 py-1'"  
            @click="emits('value-page', number)"
        >{{ number }}</button>
        
        <button 
            class="btn btn-outline-success me-1 py-1" 
            :disabled="currentPage === totalPages"
            @click="emits('value-page', currentPage + 1)" 
        >Siguiente</button>
    </div>
</template>


<style scoped>
 
</style>