const maskCpf = (ev, formik) => {

    const {value} = ev.target
  
    const cpfMask = value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
      
      
    return formik.setFieldValue('cpf', cpfMask) 
  }
  
  const maskTel = (ev, formik) => {
  
    const {value} = ev.target
  
    const telMask = value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/,"$1-$2")
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+?$/, '$1')
    
    return formik.setFieldValue('tel', telMask) 
  }
  
  const maskCep = (ev, formik) => {
  
    const {value} = ev.target
  
    const cepMask = value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')
      
    return formik.setFieldValue('cep', cepMask) 
  }
  
  export { maskTel, maskCep, maskCpf }