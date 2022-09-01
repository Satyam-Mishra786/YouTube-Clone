import React from 'react'
import styled from 'styled-components'
import ChannelLogo from '../img/Avatar.jpg'
import { LogoContainer, Logo } from './Video'

const Container = styled.div`
    display: flex;
    gap: 5px;
`
const User = styled.div`
    display: flex;
    flex-direction: column;
`
const UserInfo = styled.div`
    display: flex;
    align-items: center;
    
`
const UserName = styled.h2`
    font-size: 12px;
    margin:5px 5px 0 0;
    font-weight: 400;
    color: ${props => props.theme.text}
    

`
const UserCommentInfo = styled.h4`
    font-size: 10px;
    margin:5px 5px 0 0;
    color: ${props => props.theme.textSoft};
    font-weight: 300;
`

const UserComment = styled.p`
font-size: 11px;
    
`

const Hr = styled.hr`
    border: 0.5px solid ${props => props.theme.bgLighter};
    margin: 8px 0px;
`

function Comment() {
    return (
        <>
            <Container>
                <LogoContainer>
                    <Logo src={ChannelLogo} />
                </LogoContainer>
                <User>
                    <UserInfo>
                        <UserName>
                            Sam Alam &#8226;
                        </UserName>
                        <UserCommentInfo>
                            3 days ago
                        </UserCommentInfo>
                    </UserInfo>
                    <UserComment>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea corporis nihil reiciendis odit, iusto ipsam, quod minus provident nisi dolorem cum accusamus corrupti. Provident in velit, corporis consequatur aliquid earum!</UserComment>
                </User>
            </Container>
            <Hr />
        </>
    )
}

export default Comment