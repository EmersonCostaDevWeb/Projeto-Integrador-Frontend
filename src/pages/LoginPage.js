import styled from "styled-components"
import React, { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import loginLogoIcon from "../photos/login-logo.png"
import footerBarIcon from "../photos/footer-bar.png"
import { goToPostPage, goToSignupPage } from "../routes/coordinator";
import { LoginContainer, HeaderSection, FormSection } from "./LoginStyled";
import { BASE_URL, TOKEN_NAME } from "../constants/constants";

export const LoginContainer = styled.main`
height: 100%;
padding:24px;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-between;
#logo{
    width:152px;
}
h1{
    font-size: 16px;
}
`

export const HeaderSection = styled.section`
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
margin-top: 8vh;
#logo{
    width:152px;
}
h1{
    font-size: 16px;
    font-weight: 600;
    margin:0.5rem 0;

}
`

export const FormSection = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100%;
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
       
       input{
        color:#323941;
        width:100%;
        max-width: 365px;
        height: 60px;
        margin:0.5rem 0;
        padding:10px;
        border:1px solid lightgray;
       }
    }
    button{
        width:100%;
        max-width: 365px;
        height: 51px;
        border-radius: 25px;
        font-size:18px;
        font-weight: bold;
        cursor:pointer;
        border:none;
    }
    button.primary{
        background-color:#FC8B6B;
        color:white;
        margin-top:3rem;
    }
    button.secondary{
        border:1px solid #ef7e02;
        color:#ef7e02
    }
`

export const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    useEffect(() => {
        const token = window.localStorage.getItem(TOKEN_NAME)
        if (token) {
            goToPostPage(navigate)
        }
    }, [])
    const login = (e) => {
        e.preventDefault()

        const body = {
            email: email,
            password: password
        }

        axios.post(BASE_URL, +"/users/login", body)
            .then(res => {
                window.localStorage.getItem(TOKEN_NAME, res.data.token)
                goToPostPage(navigate)
            }).catch(err => console.log(err))
    }
    return (
        <LoginContainer>
            <HeaderSection>
                <img id="logo" src={loginLogoIcon} alt="Logo da Labenu" />
                <h1>O projeto de rede social da Labenu</h1>
            </HeaderSection>
            <FormSection>
                <form onSubmit={login}>
                    <input placeholder="Email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <input placeholder="Senha"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <button className="primary" type="submit">
                        Continuar
                    </button>
                </form>
                {/* <Horizonte /> */}
                <button className="primary" onClick={() => goToSignupPage(navigate)}>
                    Criar uma conta!
                </button>
            </FormSection>
            <img id="footer-bar" src={footerBarIcon} alt="Barra horizontal de rodapé" />
        </LoginContainer>
    )
}