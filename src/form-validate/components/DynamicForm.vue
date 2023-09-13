<script setup lang='ts'>
import { Form, Field, ErrorMessage } from 'vee-validate'

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
            v-for='{as, name, label, children, ...attrs } in schema.fields' :key="name">
            <label class="bg-primary rounded-top text-center" :for="name">{{ label }}</label>
            <Field 
                class="rounded-bottom mb-2 border-0 text-center" 
                :as="as" 
                :id="name" 
                :name="name"
                v-bind="attrs"
            >
                <template v-if="children && children.length">
                    <component v-for="({ tag, text, ...childAttrs }, idx) in children"
                        :key="idx"
                        :is="tag"
                    v-bind="childAttrs"
                    >
                        {{ text }}
                    </component>
                </template>
            </Field>
            
            <ErrorMessage :name="name" :class="'text-danger'"/>
        </div>

        <button>Enviar</button>
    </Form>
</template>
