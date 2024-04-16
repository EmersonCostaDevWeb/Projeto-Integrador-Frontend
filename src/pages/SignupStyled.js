import styled from "styled-components";

export const SignupContainer = styled.main`
    height:100% ;
    padding:25px;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    #logo{
        width:155px;
    }
    h1{
        font-size:15px
    }
`
export const HeaderSection = styled.section`
display:flex;
flex-direction: column;
align-items: center;
#logo{
    width:155px;
}
h1{
    font-size: 15px;
    margin: 0.5rem 0;
}
`
export const FormSection = styled.section`
display:flex;
flex-direction: column;
width:100%;
form{ 
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100%;
}
    input{
        color:#323941;
        width:100%;
        max-width: 365px;
        height: 60px;
        margin:0.5rem 0;
        padding:10px;
        border:1px solid lightgray;
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

export const TermsBox = styled.div`

display:flex;
flex-direction: column;
margin-top:3rem;
section{
    display: flex;
    align-items:center;
    justify-content: center;
    .checkbox{
        width:18px;
    }
    label{
        margin-left:0.5rem;
    }

}
h2,label{
    font-size:15px;
    font-weight: 400;

}
span{
    color: #4088cb;
}

`