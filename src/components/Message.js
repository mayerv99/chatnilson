import styled from 'styled-components'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'


function Message({ isMine, children }){
    
    return(
        <Main isMine = { isMine }>
            {
                isMine ? 
                <>
                    <Body isMine = { isMine }>
                        { children }
                    </Body>
                    <AccountCircleIcon fontSize = "large" style = {{color: 'var(--color-primary)'}}/>
                </>
                :
                <>
                    <AccountCircleIcon fontSize = "large"/>
                    <Body isMine = { isMine }>
                        { children }
                    </Body>
                </>
            }
        </Main>       
    )
}

const Main = styled.div`
    width: 50%;
    margin: ${ props => props.isMine ? "0 0 0 auto" : "0 auto 0 0" };
    display: flex;
    letter-spacing: .7px;
`
const Body = styled.div`
    border: ${ props => props.isMine ? "1px solid var(--color-primary)" : ""};
    width: 95%;
    padding: 10px 15px;
    border-radius: ${ props => props.isMine ? "10px 0 10px 10px" : "0px 10px 10px" };
    background-color: ${ props => props.isMine ? "white" : "var(--color-secondary)" };
    color: ${ props => props.isMine ? "black" : "white" };
    display: flex;
    flex-direction: column;
    
    p{
        font-size: 12px;
        margin: 4px 0 0 7px;
        color: var(--color-alert);
        width: 100%;
    }

    form{
        display: flex;
    }
`

export default Message