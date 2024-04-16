import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL, TOKEN_NAME } from "../constants/constants";
import { GotoLoginPage } from "../routes/coordinator";
import axios from "axios";
import { HeaderBar } from "../components/HeaderBar";
import { CommentsPageContainer, CommentsSection,PostSection,FormSection } from "./CommentsPageStyled";
import { CommentCard } from "../components/CommentCard";
import { PostCard } from "../components/PostCard";
import styled from "styled-components"
import Horizontalline from "../components/HorizontalLine";


const CommentsPageContainer = styled.main`
    height:100%;
    padding:24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    overflow-y: scroll;

`
const PostSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const FormSection = styled.section`
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
const CommentsSection = styled.section`
    display:flex;
    flex-direction: column;
    width:100%;
    
`

export const CommentsPage = () => {
    const navigate = useNavigate()
    const params = useParams()

    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])
    const [content, setContent] = useState("")

    useEffect(() => {
        const token = window.localStorage.getItem(TOKEN_NAME)
        if (!token) {

            GotoLoginPage(navigate)
        } else {
            fetchPost()
            fetchComments()

        }
    }, [])

    const fetchPost = () => {
        const axiosPost = {
            headers: {
                Authorization: window.localStorage.getItem(TOKEN_NAME)
            }
        }
        axios.get(BASE_URL + `/posts/${params.id}`, axiosPost)
            .then((res) => {
                setPost(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const fetchComments = (e) => {
        e.preventDefault()
        const axiosFetch = {
            headers: {
                Authorization: window.localStorage.getItem(TOKEN_NAME)
            }
        }
        axios.get(BASE_URL, +`/posts/${params.id}/comments`, axiosFetch)
            .then((res) => {
                setComments(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const createComment = (e) => {
        e.preventDefault()
        const body = {
            content: content
        }
        const axiosComment = {
            headers: {
                Authorization: window.localStorage.getItem(TOKEN_NAME)
            }
        }
        axios.post(BASE_URL + `/posts/${params.id}/comments`, body, axiosComment)
            .then((res) => {
                fetchPost()
                fetchComments()
                setComments("")
            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (
        <CommentsPageContainer>
            <HeaderBar/>
            <PostSection>
                {post && <PostCard post={post} FetchUpdate={fetchPost} />}
            </PostSection>

            <FormSection>
                <form onSubmit={createComment}>
                    <textarea placeholder="Adicionar Comentário"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required />
                    <button className="primary" type="submit">
                        Comentar
                    </button>
                </form>
            </FormSection>
            <Horizontalline/>

            <CommentsSection>
                {comments.map(comment=>(
                    <CommentCard 
                    comment={comment}
                    fetchComments={fetchComments}
                    key={comment.id}
                    />
                ))}
            </CommentsSection>
        </CommentsPageContainer>
    )
}