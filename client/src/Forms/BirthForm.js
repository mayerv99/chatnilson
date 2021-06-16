import { useState } from 'react' 
import { Formik, Form as FormikForm, ErrorMessage, Field } from 'formik'
import styled from 'styled-components'
import * as yup from 'yup'
import Message from '../components/Message'
import SendButton from '../components/SendButton'

function BirthForm({ nextStep }){

    const[isSubmited, setIsSubmited] = useState(false)

    const max = '2020-06-15'

    const validation = yup.object().shape({
        birth: yup.date().max(new Date(max), 'A sua data de nascimento não pode ser maior que 15/06/2020').required('Informe a sua data de nascimento')
    })

    return(
        <div>
            <Message isMine = { false }>
                Legal, agora que sabemos sua cidade e estado, quando foi que você nasceu?           
            </Message>
            <Message isMine = { true }>
                <Formik
                    initialValues = {{
                        birth: ""
                    }}
                    validationSchema = {
                        validation
                    }
                    onSubmit = {
                        isSubmited ? "" : (values)=> {
                            nextStep('birth', values.birth)
                            setIsSubmited(true)
                        }
                    }
                >
                    {({ touched, errors }) => 
                        <FormikForm>
                            <FormGroup>
                                <Field
                                    style = { touched.birth && errors.birth && {borderColor: 'var(--color-alert)'} }
                                    max = "2020-06-14"
                                    type = "date"
                                    name = "birth"
                                />
                                <ErrorMessage name = "birth" component = "p"/>
                            </FormGroup>                      
                        <SendButton error = { touched.birth && errors.birth && true }/>
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

export default BirthForm