const viaCep = (ev, formik) =>{
    const {value} = ev.target
    
    const cep = value.replace(/[^0-9]/g, '')
  
    if(cep.length !== 8){
      return
    }else{
      fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data =>{
      formik.setFieldValue('bairro', data.bairro)
      formik.setFieldValue('logradouro', data.logradouro)
      formik.setFieldValue('cidade', data.localidade)
      formik.setFieldValue('estado', data.uf)
      })
    }
  }
  export default viaCep