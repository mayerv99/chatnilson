import { useState } from 'react'
import { Formik, Form as FormikForm, ErrorMessage, Field } from 'formik'
import styled from 'styled-components'
import * as yup from 'yup'
import Message from '../components/Message'
import SendButton from '../components/SendButton'
import StarIcon from '@material-ui/icons/Star';

function RatingForm({ nextStep }){

    const validation = yup.object().shape({
        rating: yup.number().required('Informe a sua avalição')
    })
    const[isSubmited, setIsSubmited] = useState(false)
    const[rating, setRating] = useState(null)
    const[hover, setHover] = useState(null)

    return(
        <div>
            <Message isMine = { false }>
                Você finalizou o teste. Faça uma avaliação sobre o processo que realizou até chegar aqui. Nós agradecemos.
            </Message>
            <Message isMine = { true }>
                <Formik
                    initialValues = {{
                        rating: ""
                    }}
                    validationSchema = {
                        validation
                    }
                    onSubmit = {
                        isSubmited ? "" : (values)=> {
                            nextStep('rating', values.rating)
                            setIsSubmited(true)
                        }
                    }
                >
                    {({ touched, errors }) => 
                        <FormikForm>
                            <FormGroup>

                                {
                                    [...Array(5)].map((star, index) => {
                                        const rating = index + 1

                                        return(
                                            <label key = {index} style = {rating <= (hover || rating) ? {color: 'var(--color-primary)'} : {color: 'var(--color-secondary)'}}>
                                            <Field
                                                style = { touched.rating && errors.rating && {borderColor: 'var(--color-alert)'} }
                                                type = "radio"
                                                name = "rating"
                                                value = {rating}
                                                onClick = { ()=> setRating(rating) }
                                            />
                                            <StarIcon
                                                fontSize = "large"
                                                onMouseEnter = { ()=> setHover(rating) }
                                            />
                                            </label>
                                        )
                                    })
                                }
                                
                                
                                <ErrorMessage name = "rating" component = "p"/>
                            
                            </FormGroup>                        
                            <SendButton error = {touched.rating && errors.rating && true}/>
                        </FormikForm>
                    }
                    
            
                </Formik>
            </Message>
        </div>
    )
}

const FormGroup = styled.div`
    display: flex;
    width: 90%;
    height: 58px;
    gap: 5%;

    input[type = "radio"] {
        display: none;
    }
    label{
        width: 10%;
        padding: 10px;
        cursor: pointer;
    }
`

export default RatingForm