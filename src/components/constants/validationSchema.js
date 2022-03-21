import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'nom trop court!')
      .max(50, 'nom trop long!')
      .required('votre nom est obligatoire!'),
    email: Yup.string()
      .email('Entrer une adresse mail valide!')
      .required("Votre Email est obligatoire!"),
    message: Yup.string()
      .required('Votre message est obligatoire!'),
  })
  
  export default validationSchema