import { useState } from 'react'
import { Formik, Form as FormikForm, ErrorMessage, Field } from 'formik'
import styled from 'styled-components'
import * as yup from 'yup'
import Message from '../components/Message'
import SendButton from '../components/SendButton'

function NameForm({ nextStep }){

    const[isSubmited, setIsSubmited] = useState(false)

    const validation = yup.object().shape({
        userName: yup.string().required('Informe o seu nome')
    })


    return(
        <div>
            <Message isMine = { false }>
            
                Ola, eu sou o Chatnilson, tudo bem?
                Para começarmos, preciso saber seu nome.
            
            </Message>
            <Message isMine = { true }>
                <Formik
                    initialValues = {{
                        userName: ""
                    }}
                    validationSchema = {
                        validation
                    }
                    onSubmit = {
                        isSubmited ? "" : (values)=> {
                            nextStep('userName', values.userName)
                            setIsSubmited(true)
                        }
                    }
                >
                    {({ touched, errors }) => 
                        <FormikForm>
                            <FormGroup>
                                <Field
                                    style = { touched.userName && errors.userName && {borderColor: 'var(--color-alert)'} }
                                    type = "text"
                                    name = "userName"
                                    placeholder = "Insira aqui o seu nome e sobrenome."
                                    autoComplete = "off"
                                />
                                <ErrorMessage name = "userName" component = "p"/>
                            
                            </FormGroup>                        
                            <SendButton error = {touched.userName && errors.userName && true}/>
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

export default NameForm