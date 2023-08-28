<script setup lang='ts'>
import { useForm } from 'vee-validate';
import DynamicForm from '@/form-validate/components/DynamicForm.vue'


const { values, defineInputBinds } = useForm();
const email = defineInputBinds('email');

const formSchema = {
    fields: [
        {
            label: 'Your Name',
            name: 'name',
            as: 'input',
        },
        {
            label: 'Your Email',
            name: 'email',
            as: 'input',
        },
        {
            label: 'Your Password',
            name: 'password',
            as: 'input',
        },
    ],
}


</script>

<template>
    <input v-bind="email" type="text" />

    <pre> values : {{ values }}</pre>

    <div >
        <DynamicForm :schema="formSchema"/>
    </div>

</template>
