import React from 'react'
import styled from 'styled-components'
import ChannelLogo from '../img/clonetube.png'
import Comment from './Comment'
import { LogoContainer, Logo } from './Video'
const Container = styled.div`

`
const Comments = styled.div`
    display: flex;
    gap: 5px;

`

const AddComment = styled.input`
    background: transparent;
    color: ${props => props.theme.text};
    border:none;
    border-bottom: 2px solid ${props => props.theme.bgLighter};
    width: 100%;

    &:focus{
        outline:none;
    }
`



function CommentSection() {
    return (
        <Container>
            <Comments>
                <LogoContainer>
                    <Logo src={ChannelLogo} />
                </LogoContainer>
                <AddComment placeholder='Add a comment...' />
            </Comments>

            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </Container>
    )
}

export default CommentSection