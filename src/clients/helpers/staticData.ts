import * as yup from 'yup';

const formSchema = {
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
}

export {
    formSchema
}