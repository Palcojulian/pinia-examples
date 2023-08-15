<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counter-options';


const counterOptions = useCounterOptionsStore();


</script>

<template>

    <h4>Counter: {{ counterOptions.count }}</h4>
    <h4>CounterSquared: {{ counterOptions.squareCount }} </h4>
</template>


<style scoped>

</style>