<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counter-options';


const counterStore = useCounterOptionsStore();


</script>

<template>
    <h3>Pinia Options</h3>
    <h4>Counter: {{ counterStore.count }}</h4>
    <h4>CounterSquared: {{ counterStore.squareCount }} </h4>

    <br>
    <button @click="counterStore.increment()">+1</button>
    <button @click="counterStore.incrementBy(2)">+2</button>
    <button @click="counterStore.incrementBy(5)">+5</button>
    <button @click="counterStore.$reset()">reset</button>



</template>


<style scoped>
    button {
        margin-left: 5px;
    }
</style>