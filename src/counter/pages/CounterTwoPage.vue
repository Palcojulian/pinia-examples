<script setup lang="ts">
import { useCounterSetupStore } from '@/store/counter-setup';
import CounterSetupValue from '../components/CounterSetupValue.vue';

// Sin desestructurar la informacion
const counterStore = useCounterSetupStore();
//Desestructurando la informacion
const { increment, incrementBy, $reset } = counterStore;

</script>

<template>
    <h3>Pinia Setup</h3>
    <h4>Counter: {{ counterStore.count }}</h4>
    <h4>CounterSquared: {{ counterStore.squareCount }} </h4>

    <br>
    <!-- Desestructurando la innfomacion -->
    <button @click="increment()">+1</button>
    <button @click="incrementBy(2)">+2</button>
    <button @click="incrementBy(5)">+5</button>
    <button @click="counterStore.reset()">reset</button>
    <br>
    <CounterSetupValue/>

    <br>
    <!-- Sin desestructurar la informacion
    <button @click="counterStore.increment()">+1</button>
    <button @click="counterStore.incrementBy(2)">+2</button>
    <button @click="counterStore.incrementBy(5)">+5</button>
    <button @click="counterStore.$reset()">reset</button> -->
</template>


<style scoped>
button {
    margin-left: 5px;
}
</style>