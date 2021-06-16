import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';

function SendButton({ error }){

    return(
        <Main type = "submit" error = { error } >
            <SendIcon fontSize = "small"/>
        </Main>
    )
}

const Main = styled.button`
    width: 10%;
    cursor: pointer;
    background: none;
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
    border-radius: 0 5px 5px 0;
    padding: 10px;
    height: 41px;

    ${
        props => props.error ?
        `
        pointer-events: none;
        color: var(--color-alert);
        border: 1px solid var(--color-alert);
        ` : ""
    }
` 

export default SendButton