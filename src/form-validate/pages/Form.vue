<script setup lang='ts'>
import * as Yup from 'yup';
import { useForm } from 'vee-validate';

import DynamicForm from '@/form-validate/components/DynamicForm.vue'

const schema = Yup.object({
    email: Yup.string().required().email(),
})

const { defineInputBinds, values, errors } = useForm({
    validationSchema: Yup.object({
        email: Yup.string().email().required()
    })
});
const email = defineInputBinds('email', {
    validateOnInput: true
});


const formSchema = {
    fields: [
        {
            label: 'Your Name',
            name: 'name',
            as: 'input',
            rules: Yup.string().required(),
        },
        {
            label: 'Your Email',
            name: 'email',
            as: 'input',
            type: 'text',
            rules: Yup.string().required()
        },
        {
            label: 'Your Password',
            name: 'password',
            as: 'input',
            type: 'password',
            rules: Yup.string().min(6).required()
        },
    ],
}
</script>

<template>
    <input v-bind="email" />

    <pre> values : {{ values }}</pre>
    <pre> Errores : {{ errors }}</pre>

    <div >
        <DynamicForm :schema="formSchema"/>
    </div>

</template>
