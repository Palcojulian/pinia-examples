<script setup lang='ts'>
import { Field, Form } from 'vee-validate'

interface field{
    label:  string;
    name:   string;
    as:     string;
    type?:  string;
}

interface Props {
    schema: {
        fields: any[];
    }
}

const props = defineProps<Props>();

</script>

<template>
    <Form>
        <div class="d-flex flex-column"
            v-for='{as, name, label, ...attrs } in schema.fields' :key="name">
            <label class="bg-primary rounded-top text-center" :for="name">{{ label }}</label>
            <Field 
                class="rounded-bottom mb-2 border-0 text-center" 
                :as="as" 
                :id="name" 
                :name="name"
                v-binds="attrs"
            />
        </div>

        <button>Enviar</button>
    </Form>
</template>
