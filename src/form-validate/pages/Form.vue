<script setup lang='ts'>
import Tabla from '@/shared/Tabla.vue'
import { ref } from 'vue'

// import * as Yup from 'yup';
// import { useForm } from 'vee-validate';

// import DynamicForm from '@/form-validate/components/DynamicForm.vue'


// const schema = Yup.object({
//     email: Yup.string().required().email(),
// })

// const { defineInputBinds, values, errors } = useForm({
//     validationSchema: Yup.object({
//         email: Yup.string().email().required()
//     })
// });
// const email = defineInputBinds('email', {
//     validateOnInput: true
// });


// const formSchema = {
//     fields: [
//         {
//             label: 'Your Name',
//             name: 'name',
//             as: 'input',
//             rules: Yup.string().required(),
//         },
//         {
//             label: 'Your Email',
//             name: 'email',
//             as: 'input',
//             type: 'text',
//             rules: Yup.string().required()
//         },
//         {
//             label: 'Your Password',
//             name: 'password',
//             as: 'input',
//             type: 'password',
//             rules: Yup.string().min(6).required()
//         },
//     ],
// }

const values = ref([])
const options = [
    {
        value: 1,
        label: 'Option1',
    },
    {
        value: 2,
        label: 'Option2',
    },
    {
        value: 3,
        label: 'Option3',
    },
    {
        value: 4,
        label: 'Option4',
    },
    {
        value: 5,
        label: 'Option5',
    },
]


</script>

<template>
    <h1> {{ values }}</h1>
    <!-- <template v-for="(item, index) in 3" :key="index">
        <el-select v-model="values[index]" filterable placeholder="Select">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
    </template> -->
    <!-- <input v-bind="email" />

    <pre> values : {{ values }}</pre>
    <pre> Errores : {{ errors }}</pre>

    <div >
        <DynamicForm :schema="formSchema"/>
    </div> -->
</template>
