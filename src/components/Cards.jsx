import React from 'react'
import styled from 'styled-components'
import VideoImage from '../img/bg2.jpg'
import ChannelLogo from '../img/clonetube.png'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: ${props => props.type === 'sm' ? "100%" : '260px'};
    display: ${props => props.type === 'sm' && "flex"};
    margin-bottom: 20px;
    margin-right: ${props => props.type !== 'sm' && '10px'};
    background-color: ${props => props.theme.bg};
    gap: 10px;

    @media (max-width: 425px) {
        width: 300px;
    }
`

const ImageContainer = styled.div`
    width: ${props => props.type === 'sm' ? '62%' : '100%'};
    height: 173px;
    height:  ${props => props.type === 'sm' ? '120px' : '173px'};
`

const Image = styled.img`
    width: 100%;
    height: 100%;
`

const DetailsContainer = styled.div`
    display: flex;
    margin-top:  ${props => props.type === 'sm' ? '0px' : '5px'};
    width: ${props => props.type === 'sm' ? '38%' : '100%'};
`

const LogoContainer = styled.div`
    margin-right: 5px;
`

const Logo = styled.img`
    width: 45px;
    height: 45px;
    margin-top: 10px;
`
const Details = styled.div`
    font-weight: 300;
`
const Title = styled.h1`
    font-size: 12px;
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.text};
    margin: ${props => props.type === 'sm' && '0px'}
`

const ChannelName = styled.h2`
    font-size: 10px;
    color: ${props => props.theme.textSoft};
    
`

const MoreDetails = styled.h2`
    font-size: 10px;
    color: ${props => props.theme.textSoft};
`

function Cards({ type }) {
    return (
        <Link to='/video/test' style={{ textDecoration: 'none' }}>
            <Container type={type} >
                <ImageContainer type={type}>
                    <Image src={VideoImage} />
                </ImageContainer>
                <DetailsContainer type={type}>
                    {type !== 'sm' &&
                        <LogoContainer>
                            <Logo src={ChannelLogo} />
                        </LogoContainer>
                    }
                    <Details>
                        <Title>
                            One Piece | The Greatest Story Ever Told [ASMV]
                        </Title>

                        <ChannelName>
                            Sattu786
                        </ChannelName>

                        <MoreDetails>
                            890,234 views &#8226; 2 days ago
                        </MoreDetails>
                    </Details>
                </DetailsContainer>
            </Container>
        </Link>
    )
}

export default Cards