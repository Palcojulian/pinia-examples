<script setup lang="ts">
import { ref } from 'vue';
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import LoadingModal from '@/shared/components/LoadingModal.vue';
import useClient from '@/clients/composables/useClient'; 
import { useRoute } from 'vue-router';

const route = useRoute();

const {client, isLoading } = useClient(+route.params.id);

const formSchema = ref({
    fields: [
        {
            label: 'Tu nombre',
            name: 'nombre',
            as: 'input',
            rules: yup.string().required(),
        },
        {
            label: 'Tu dirección',
            name: 'direccion',
            as: 'input',
            rules: yup.string().required(),
        },
    ]
});


</script>

<template>
    <h3>Guardando...</h3>
    <h3>¡Guardado!</h3>
    <LoadingModal v-if="isLoading"/>
    <div>
        <h1>JULIAN LIBARDO PALCO</h1>
        <Form>
            <div class="d-flex flex-column">
                <template v-for="{as, name, label, ...attrs} in formSchema.fields" :key="index">
                    <Field :as="as" :id="name" :name="name"  v-bind="attrs" :placeholder="label" class="text-center"/>
                    <ErrorMessage :name="name" class="text-danger"/>
                </template>
                <button type="submit" class="btn btn-secondary py-1">Guardar</button>
            </div>
        </Form>
    </div>
    <code>
        {{ client }}
    </code>
</template>