import { useState } from 'react'
import { Formik, Form as FormikForm, ErrorMessage, Field } from 'formik'
import styled from 'styled-components'
import * as yup from 'yup'
import Message from '../components/Message'
import SendButton from '../components/SendButton'

function CityForm({ user, nextStep }){

    const[isSubmited, setIsSubmited] = useState(false)

    const { userName } = user

    const validation = yup.object().shape({
        city: yup.string().required('Informe a sua cidade')
    })

    return(
        <div>
            <Message isMine = { false }>
            
            Que satisfação, {userName}. Agora que sei o seu nome, qual a cidade e estado que voce mora?
            
            </Message>
            <Message isMine = { true }>
                <Formik
                    initialValues = {{
                        city: ""
                    }}
                    validationSchema = {
                        validation
                    }
                    onSubmit = {
                        isSubmited ? "" : (values)=> {
                            nextStep('city', values.city)
                            setIsSubmited(true)
                        }
                    }
                >
                    {({ touched, errors }) => 
                        <FormikForm>
                        <FormGroup>
                            <Field
                                style = { touched.city && errors.city && {borderColor: 'var(--color-alert)'} }
                                type = "text"
                                name = "city"
                                placeholder = "Insira aqui a sua cidade."
                                autoComplete = "off"
                            />
                            <ErrorMessage name = "city" component = "p"/>
                        </FormGroup>                        
                        <SendButton error = {touched.city && errors.city && true}/>
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

export default CityForm