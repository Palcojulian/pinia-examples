<script setup  lang='ts'>
interface TableProps {
    background: string;
}

interface Contenido {
    text: string;
    width: string;
}

interface Data {
    data: Contenido[];
}

const props = defineProps<{ table: TableProps, header: Contenido[], body?: any[] }>()

</script>

<template>
    <div>
        <div :class="`d-flex align-items-center bg-${table.background} text-white`">
            <template v-for="(item, index) in header" :key="index">
                <div :class="`w-${item.width} text-break mx-2 py-1 text-center `">
                    {{ item.text }}
                </div>
            </template>
        </div>

        <template v-for="data in body">
            <div class="d-flex align-items-center text-white">
                <template v-for="(item, index) in data">
                    <div :class="`w-${item.width} text-break mx-2 py-1 text-center `">
                        {{ item.text }}
                        <slot :name="`roter_${index}`"></slot>
                    </div>
                </template>
            </div>
        </template>
    </div>
</template>