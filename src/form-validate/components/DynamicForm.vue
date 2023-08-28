<script setup lang='ts'>
import { Field, Form } from 'vee-validate'

interface field{
    label:  string;
    name:   string;
    as:     string;
}

interface Props {
    schema: {
        fields: field[];
    }
}

const props = defineProps<Props>();

</script>

<template>
    <Form>
        <div class="d-flex flex-column"
            v-for='field in schema.fields' :key="field.name">
            <label :for="field.name">{{ field.name }}</label>
            <Field :as="field.as" :id="field.name" :name="field.name"/>
        </div>

        <button>Enviar</button>
    </Form>
</template>
