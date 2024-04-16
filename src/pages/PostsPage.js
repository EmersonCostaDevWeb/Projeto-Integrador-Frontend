import React, { useEffect, useState } from "react"
import { BASE_URL, TOKEN_NAME } from "../constants/constants"
import { goToLoginPage } from "../routes/coordinator"
import axios from "axios"
import { FormSection, PostSection, PostsPageContainer } from "./PostPageStyled"
import { HeaderBar } from "../components/HeaderBar"
import { PostCard } from "../components/PostCard"
import { useNavigate } from "react-router-dom"

export const PostsPage = () => {
    const [posts, setPosts] = useState([])
    const [content, setContent] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const token = window.localStorage.getItem(TOKEN_NAME)
        if (!token) {
            goToLoginPage(navigate)
        } else {
            fetchPosts()
        }
    }, [])

    const fetchPosts = () => {
        const axios = {
            headers: {
                Authorization: window.localStorage.getItem(TOKEN_NAME)
            }
        }
        axios.get(BASE_URL + "/posts", axios)
            .then((res) => {
                setPosts(res.data)
                setContent("")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const createPost = (e) => {
        e.preventDefault()
        const body = {
            content: content
        }
        const axiosPost = {
            headers: {
                Authorization: window.localStorage.getItem(TOKEN_NAME)
            }

        }
        axios.post(BASE_URL + "/posts", body, axiosPost)
            .then((res) => {
                fetchPosts()
            })
            .catch((err) => {
                console.log(err)
            })
    }



    return (
        <PostsPageContainer>
            <HeaderBar />
            <FormSection>
                <form onSubmit={createPost}>
                    <textarea placeholder="Escreva seu post aqui"
                        value={content}
                        onChange={(e) => setContent(e.target.value)} required />
                </form>

                <button className="primary"
                    type="submit"> Postar</button>
            </FormSection>
            <PostSection>
                {posts.map(post => (
                    <PostCard 
                    key={post.id}
                    post={post}
                    fetchUpdate={fetchPosts}
                    />
                ))}
            </PostSection>
        </PostsPageContainer>
    )
}