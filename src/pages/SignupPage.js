import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import footerBar from "../photos/footer-bar.png"
import { BASE_URL, TOKEN_NAME } from "../constants/constants";
import { goToPostPage } from "../routes/coordinator";
import { FormSection, HeaderSection, SignupContainer, TermsBox } from "./SignupStyled";
import { HeaderBar } from "../components/HeaderBar";


export const SignupPage = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        const token = window.localStorage.getItem(TOKEN_NAME)
        if (token)
            goToPostPage(navigate)
    })
    const signup = (e) => {
        e.preventDefault()
        const body = {
            name: name,
            email: email,
            password: password
        }
        axios.post(BASE_URL + "/users/signup", body)
            .then((res) => {
                window.localStorage.setItem(TOKEN_NAME, res.data.token)
            })
            .catch((err) => console.log(err))
    }

    return (
        <SignupContainer>
            <HeaderBar />
            
            <HeaderSection>
                <h1>Olá boas vindas ao LabEddit</h1>
            </HeaderSection>
            <FormSection>
                <form onSubmit={signup}>
                    <input placeholder="Nome de usuario"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} required
                    />
                    <input placeholder="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} required />
                    <input placeholder="senha"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} required />
                </form>
                <TermsBox>
                    <h2>Ao continuar,você concorda com o nosso
                        <span> contrado de usuário</span> e nossas
                        <span>Política de privacidade</span>
                    </h2>
                    <section>
                        <input className="checkbox"
                            type="checkbox"
                            name="TermsAndConditions" checked={checked}
                            onChange={(e) => setChecked(e.target.checked)}
                            required
                        />
                        <label htmlFor="TermsAndConditions">
                            <h4>Eu concordo com os termos de usuário</h4>
                        </label>
                    </section>
                </TermsBox>
                <button className="primary" type="submit">
                    Cadastrar
                </button>
            </FormSection>
            <img id="footbar" src={footerBar} alt="Barra do rodapé" />
        </SignupContainer>
    )
}