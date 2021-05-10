import * as Yup from 'yup'

export default Yup.object().shape({
    nome: Yup
        .string()
        .min(3, 'Nome deve conter pelo menos 3 letras')
        .required('Este campo é obrigatório!'),
    email: Yup
        .string()
        .email('Email invalido!')
        .required('Este campo é obrigatório!'),
    cpf_cnpj: Yup
        .string()
        .required('Este campo é obrigatório!'),
    tel: Yup
        .string()
        .matches(
            // /^(\(\d{2}\)\s)(\d{4,5}-\d{4})$/,
            /(\d{2})?\s*\d{4,5}-?\d{4}$/g, 
            'Telefone invalido'
        )
    .required('Este campo é obrigatório!'),
    cep: Yup
        .string()
        .matches(
            /^\d{5}-\d{3}$/,
            'CEP invalido'
        )
        .required('Este campo é obrigatório!'),
    logradouro: Yup
        .string()
        .required('Este campo é obrigatório!'),
    numero: Yup
        .number()
        .required('Este campo é obrigatório!'),
    bairro: Yup
        .string()
        .required('Este campo é obrigatório!'),
    cidade: Yup
        .string()
        .required('Este campo é obrigatório!'),
    estado: Yup
        .string()
        .required('Este campo é obrigatório!')
})