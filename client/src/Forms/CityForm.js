import { useState, useEffect } from 'react'
import { Formik, Form as FormikForm, ErrorMessage, Field, useFormik } from 'formik'
import styled from 'styled-components'
import * as yup from 'yup'
import Message from '../components/Message'
import SendButton from '../components/SendButton'
import { cidades } from '../utils/Cidades.json'
import { ufList } from '../utils/ufList.json'

function CityForm({ user, nextStep }){

    const[isSubmited, setIsSubmited] = useState(false)
    const[cities, setCities] = useState([])
    const[ufs, setUfs] = useState([])
    const[visibility, setVisibility] = useState(true)
    // Magica para o valor do input ser alterado para o selecionado
    const[selected, setSelected] = useState(true)

    const { userName } = user

    const validation = yup.object().shape({
        city: yup.string().required('Informe a sua cidade')
    })

    const formik = useFormik({
        initialValues: {
            city: ''
        }
    })

    let matches = cities.filter((city, field) => {
        const regex = new RegExp(`^${formik.values.city}`, 'gi')
        return city.nome.match(regex)
    })

    if (formik.values.city.length === 0) {
        matches = []
    }

    const getUfs = () => {
        let ufArray = []
        ufList.map(uf => {
            ufArray.push(uf)
        })
        setUfs(ufArray)
    }

    const getCities = () => {
        let citiesArray = []
        cidades.map(cidade => {
            const data = { nome: cidade.nome, uf: cidade.uf }
            citiesArray.push(data)                
        })
            
        
        setCities(citiesArray)
    }

    const hideOptions = () => {
        setVisibility(false)
    }

    const handleSelect = (value, setFieldValue) => {
        setFieldValue('city', value)
        setSelected(false)
    }


    useEffect(()=> {
        getCities()
        getUfs()
    }, [])

    return(
        <div>
            <Message isMine = { false }>
            
            Que satisfação, {userName}. Agora que sei o seu nome, qual a cidade e estado que voce mora?
            
            </Message>
            <Message isMine = { true }>
                <Formik
                    initialValues = {{
                        city: "",
                        uf: ""
                    }}
                    validationSchema = {
                        validation
                    }
                    onSubmit = {
                        isSubmited ? "" : (values)=> {
                            nextStep('city', values.city)
                            setIsSubmited(true)          
                            hideOptions()           
                        }
                    }
                >
                    {({ touched, errors, setFieldValue, values }) => 
                        <FormikForm>
                        <FormGroup>
                                
                                    <CityInput
                                        style = { touched.city && errors.city && {borderColor: 'var(--color-alert)'} }
                                        type = "text"
                                        name = "city"
                                        placeholder = "Insira aqui a sua cidade."
                                        onChange = {formik.handleChange}
                                        value = {selected ? formik.values.city : values.city}
                                        autoComplete = "off"
                                        
                                        
                                    />
                                <SugestionsGroup visibility = { visibility }>
                                    {
                                        matches.map((city, index) => 
                                        <Sugestions
                                            key = {index}
                                            value = {city.nome}
                                            onClick = { ()=> handleSelect(`${city.nome}-${city.uf}`, setFieldValue)}   
                                        >
                                            {city.nome} - {city.uf}
                                        </Sugestions>
                                        )
                                        
                                    }
                                </SugestionsGroup>
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
const SugestionsGroup = styled.div`
    ${props => props.visibility ? "" : "display: none"};
    width: 99%;
    border-radius: 0 0 10px 10px;
    background-color: white;
    border: 1px solid var(--color-primary);
    border-top: none;
`
const Sugestions = styled.div`
    font-size: 14px;
    padding: 5px;
    cursor: pointer;
`

const CityInput = styled(Field)`

`

export default CityForm