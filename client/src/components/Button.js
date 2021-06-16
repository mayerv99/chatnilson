import styled from 'styled-components'

// Botao de submit final
function Button({ user, submit }){
    return(
        <Main onClick = {()=> submit()}>Finalizar</Main>
    )
}

const Main = styled.button`
    font-size: 20px;
    letter-spacing: 1.5px;
    border: none;
    background: var(--color-primary);
    color: white;
    transition: 0.3s linear;
    cursor: pointer;
    width: 50%;
    height: 50px;
    margin: 20px auto;
    border-radius: 10px;

    :hover{
        border: 1px solid var(--color-primary);
        color: var(--color-primary);
        background: none;
    }

`

export default Button