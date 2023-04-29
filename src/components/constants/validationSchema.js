import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'nom trop court!')
    .max(50, 'nom trop long!')
    .matches(/^[\p{L}\s]{2,}$/u, "Le nom n'est pas au bon format")
    .required('votre nom est obligatoire!'),
  email: Yup.string()
    .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "veuillez entrez un email valide")
    .required("Votre Email est obligatoire!"),
  subject: Yup.string()
    .min(2, 'nom trop court!')
    .max(50, 'nom trop long!')
    .matches(/^[\p{L}\s]{2,}$/u, "Le sujet n'est pas au bon format"),
  message: Yup.string()
    .required('Votre message est obligatoire!'),
})

export default validationSchema