import React from "react"
import styled from "styled-components"
import { useLocation, useNavigate } from "react-router-dom"
import HeaderLogo from "../photos/HeaderLogo.png"
import closeIcon from "../photos/closeIcon.png"
import { TOKEN_NAME } from "../constants/constants"
import { GotoLoginPage, GotoPostPage } from "../routes/coordinator"
import { HeaderBarContainer } from "./HeaderBarStyled"

const HeaderBarContainer = styled.header`
    width:100%;
    height:50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    #header-bar-logo{
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
    }
    .close-icon{
        width: 25px;
        color: #A3A3A3;

    }

    button{
        color: #4088cb;
        font-size: 18px;
        font-weight: 500;
        outline:none;
        border:none;
        &:last-child{
            margin-left:auto;

        }
        &:hover{
            cursor: pointer;
        }

    }

`

export const HeaderBar = () => {
    const location = useLocation()
    const navigate = useNavigate()


    const deslogar = () => {
        window.localStorage.removeItem(TOKEN_NAME)
        GotoLoginPage(navigate)
    }
    const renderCorrectButtons = () => {
        switch (location.pathname) {
            case "/signup":
                return <button onClick={() => GotoLoginPage(navigate)}>Entrat</button>
            case "/":
                return <button onClick={deslogar}>Deslogar</button>
            default:
                return(
                    <>
                    <button onClick={()=>GotoPostPage(navigate)}>
                        <img className="close-icon"  src={closeIcon} alt="retornar ao posts"/>
                    </button>

                    <button className="logout-btn" onClick={deslogar}>Deslogar</button>
                    </>
                )
        }
    }

    return (
        <HeaderBarContainer>
             <img id="header-bar-logo" src={HeaderLogo} alt="Laddedit-logo"/>
             {renderCorrectButtons()}
        </HeaderBarContainer>
    )
}