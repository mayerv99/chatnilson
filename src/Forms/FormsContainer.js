import { useState } from 'react'
import styled from 'styled-components'
import NameForm from './NameForm'
import CityForm from './CityForm'
import BirthForm from './BirthForm'
import EmailForm from './EmailForm'
import RatingForm from './RatingForm'
import Button from '../components/Button'
import axios from 'axios'

function FormsContainer(){
    
    const initialState = {
        step: 1,
        userName: '.',
        city: '',
        birth: '',
        email: '',
        rating: 0
    }

    const[user, setUser] = useState(initialState)
    
    let { userName, city, birth, email , rating, step } = user
    
    // Proximo passo do formulario
    const nextStep = (field, value) => {
        if(step === 6) return;
        setUser({...user, [field]: value, step: step + 1})
    }

    // Converte os dados adicionados em um JSON para post na api, por ser apenas um aplicativo para teste o console.log esta sendo executado assim como a url da api esta sendo exibida.
    const Submit = () => {
        const userData = { userName, city, birth, email, rating }
        axios.post('https://60c9809c772a7600172039e2.mockapi.io/user', JSON.stringify(userData))
        console.log(userData)
        window.alert('Dados enviados!')
    }

    // Conforme avancamos o passo no formulario, as proximas perguntas vao sendo exibidas
    return(
        <Main>
            <NameForm nextStep = { nextStep }/>
            { step >= 2 && <CityForm user = { user } nextStep = { nextStep }/> }
            { step >= 3 && <BirthForm nextStep = { nextStep }/> }
            { step >= 4 && <EmailForm nextStep = { nextStep }/>}
            { step >= 5 && <RatingForm nextStep = { nextStep }/>}
            <div style = {{textAlign: 'center'}}>
                { step === 6 && <Button user = { user } submit = { Submit} /> }
            </div>  
        </Main>
    )
}

const Main = styled.div`
    width: 98%;
    margin: auto;
`

export default FormsContainer