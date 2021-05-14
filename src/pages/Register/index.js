import React from 'react';
import './styles.css';
import * as Masks from '../../components/Mask';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import schema from '../../schema/schema';
import viaCep from '../../services/viacep';
import Button from '../../components/Button';
import api from '../../services/api';

export default function Register({history}) {

  const values = {
    nome: '',
    email: '',
    cpf_cnpj: '', 
    tel: '',
    cep: '',
    bairro: '',
    logradouro: '',
    numero: '',
    cidade: '',
    estado: ''
  }

  const onSubmit = async values =>{
    const dados = {
      "nome": values.nome,
      "email": values.email,
      "cpf_cnpj": values.cpf_cnpj.replace(/\D/g, ''), 
      "tel": values.tel.replace(/\D/g, ''),
      "cep": values.cep.replace(/\D/g, ''),
      "bairro": values.bairro,
      "logradouro": values.logradouro,
      "numero": values.numero,
      "cidade": values.cidade,
      "estado": values.estado
    }

    await api.post('/cliente', dados)
      .then(function() {
        history.push('/home')
      })
      .catch( function (error) {
        console.log(error);
      })
  }
  
  return (

    <div className="Container">

      <h1>Cadastro</h1>
      
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={values}
      >
        {formik => {

          return(

            <Form>

              <div className='formControl'>                   
                <Field 
                  className='input'
                  name="nome" 
                  type="text" 
                  placeholder="Nome"
                />
                <ErrorMessage component='div' className='erro' name="nome" />
              </div>

              <div className='formControl'>                          
                <Field
                  className='input'
                  placeholder='Email'
                  name="email" 
                  type="email" 
                />
                <ErrorMessage component='div' className='erro' name="email" />
              </div>
              
              <div className="formgroup">
                <div className="formItem">                    
                  <Field 
                    className='input'
                    placeholder='CPF/CNPJ'
                    name="cpf_cnpj" 
                    type="text"
                    onChange={(ev) => Masks.maskCpfCnpj(ev, formik)}
                    maxLength={18}
                  />
                  <ErrorMessage component='div' className='erro' name="cpf_cnpj" />
                </div>
                
                <div className="formItem">                 
                  <Field 
                    className='input'
                    placeholder='Telefone'
                    name="tel"
                    type="text"
                    onChange={(ev) => Masks.maskTel(ev, formik)}
                    maxLength={15}   
                  />
                  <ErrorMessage component='div' className='erro' name="tel" />
                </div>
              </div>

              <div className='formgroup'>
                <div id="cep">                
                  <Field 
                    className='input'
                    placeholder='CEP'
                    name="cep"
                    type="text"
                    onChange={(ev) => Masks.maskCep(ev, formik)}
                    onBlur={(ev) => viaCep(ev, formik)}
                    maxLength={9}
                  />
                  <ErrorMessage component='div' className='erro' name="cep" />    
                </div>

                <div id='logradouro'>
                  <Field
                    className='input'
                    placeholder='logradouro' 
                    name="logradouro" 
                    type="text"
                  />
                  <ErrorMessage component='div' className='erro' name="logradouro" />
                </div>

                <div id='num'>
                  <Field 
                    className='input'
                    placeholder='Nº'
                    name="numero" 
                    type="number" 
                  />
                </div>
              </div>

              <div className='formgroup'>
                <div id='bairro'>                  
                  <Field 
                    className='input'
                    placeholder='Bairro'
                    name="bairro" 
                    type="text"   
                  />
                  <ErrorMessage component='div' className='erro' name="bairro" />
                </div>

                <div id='cidade'> 
                  <Field 
                    className='input'
                    placeholder='Cidade'
                    name="cidade" 
                    type="text" 
                  />
                  <ErrorMessage component='div' className='erro' name="cidade" />
                </div>

                <div id='estado'>
                  <Field 
                    className='input'
                    placeholder='Estado'
                    name="estado" 
                    type="text" 
                  />
                  <ErrorMessage component='div' className='erro' name="estado" />
                </div>
              </div>

              <Button type="submit" disabled={!formik.dirty || !formik.isValid}>Cadastrar</Button>

            </Form>
          )
        }}

      </Formik>
      
    </div>
  );
}