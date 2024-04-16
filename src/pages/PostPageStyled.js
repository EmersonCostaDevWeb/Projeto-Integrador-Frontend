import styled from "styled-components"

export const PostsPageContainer = styled.main`
height:100%;
padding: 24px;
display: flex;
flex-direction: column;
align-items: center;
overflow-x: hidden;
overflow-y: scroll;
`

export const FormSection = styled.section`
width: 100%;
display: flex;
flex-direction: column;
margin-top:2rem;
 form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100%;

    textarea{
        background-color:#EDEDED;
        color:#323941;
        width:100%;
        
    }
 }

`

export const PostSection = styled.section`
 display:flex;
 flex-direction:column;
 width:100%;
`