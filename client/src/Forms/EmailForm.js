import { Formik, Form as FormikForm, ErrorMessage, Field } from 'formik'
import { useState } from 'react'
import styled from 'styled-components'
import * as yup from 'yup'
import Message from '../components/Message'
import SendButton from '../components/SendButton'

//O mesmo comentado aqui vale para os demais formularios
function EmailForm({ nextStep }){

    // Para saber se essa pergunta e seus dados ja foram enviados
    const[isSubmited, setIsSubmited] = useState(false)

    const validation = yup.object().shape({
        email: yup.string().email('Informe um email válido').required('Informe o seu email')
    })

    return(
        <div>
            {/* Mensagem do Chatnilson */}
            <Message isMine = { false }>
                Agora me fala teu e-mail, por gentileza.         
            </Message>
            {/* Minha mensagem */}
            <Message isMine = { true }>
                <Formik
                    initialValues = {{
                        email: ""
                    }}
                    validationSchema = {
                        validation
                    }
                    onSubmit = {
                        // Validacao necessaria para nao ser efetuado dois submits da mesma pergunta e consequentemente nao passar para o proximo passo
                        isSubmited ? "" : (values)=> {
                            nextStep('email', values.email)
                            setIsSubmited(true)
                        }
                    }
                >
                    {/* Exibicao de erros */}
                    {({ touched, errors }) => 
                        <FormikForm>
                            <FormGroup>
                                <Field
                                    style = { touched.email && errors.email && {borderColor: 'var(--color-alert)'} }
                                    placeholder = "Insira aqui o seu email"
                                    type = "text"
                                    name = "email"
                                />
                                <ErrorMessage name = "email" component = "p"/>
                            </FormGroup>                      
                        <SendButton error = { touched.email && errors.email && true }/>
                    </FormikForm>
                    }
                    
            
                </Formik>
            </Message>
        </div>
    )
}

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 58px;
`

export default EmailForm