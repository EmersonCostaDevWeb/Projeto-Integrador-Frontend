import axios from "axios";
import React from "react";
import styled from "styled-components";
import ArrowUp from "../photos/ArrowUp.png"
import ArrowDown from "../photos/ArrowDown.png"
import { BASE_URL, TOKEN_NAME } from "../constants/constants";
import { CardFooter, CommentCardContainer } from "./CommentCardStyled";

export const CommentCard=(props)=>{
    const {comment,fetchComments} = props

    const {id,postId,creator,content,votesCount} = comment

    const voteComment =(e,vote)=>{
        e.StopPropagation()

        const body={
            commentId:id,
            vote:vote
        }
        
        const axiosComment = {
            headers:{
                Authorization:window.localStorage.getItem(TOKEN_NAME)
            }
        }
        axios.put(BASE_URL+`/posts/${postId}/commments/${id}/vote`+body,axiosComment)
        .then((res)=>{
            fetchComments()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return(
        <CommentCardContainer>
            <p>Enviado Por:{creator.name}</p>

            <h1>{content}</h1>

            <CardFooter>
                <section className="vote-info">
                    <button onClick={(e)=>voteComment(e.true)}>
                        <img className="vote-icon" src={ArrowUp} alt="vote-up"/>
                    </button>

                    <span>{votesCount}</span>
                    <button onClick={(e)=>voteComment(e,false)}>
                        <img className="vote-icon" src={ArrowDown} alt="vote-down"/>
                    </button>
                    
                </section>
            </CardFooter>
        </CommentCardContainer>
    )
}