import styled from "styled-components"

function Header({ children, title }){

    return(
        <Main>
            <div>
                { children }
                { title }
            </div>
        </Main>
    )
}

const Main = styled.header`
  width: 100%;
  text-align: center;
  height: 65px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  letter-spacing: 1.5px;
  padding: 5px;
  margin-bottom: 30px;

  div{
    margin: auto;
    width: 20%;
    display: flex;
    flex-direction: column;
    font-size: 18px;
  }
  .icon{
    margin: 0 auto 5px;
  }

`
export default Header