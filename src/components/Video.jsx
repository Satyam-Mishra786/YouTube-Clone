import React from 'react'
import styled from 'styled-components'
import ChannelLogo from '../img/clonetube.png'
import CommentSection from './CommentSection'
import Cards from './Cards'

// Icons 
import LikeIcon from '@mui/icons-material/ThumbUpOffAlt';
import DislikeIcon from '@mui/icons-material/ThumbDownOffAlt';
import ShareIcon from '@mui/icons-material/Reply';
import SaveIcon from '@mui/icons-material/LibraryAdd';

// Styled Components
const Container = styled.div`
    display: flex;
    padding: 8px 5px 8px 20px;
    background-color: ${props => props.theme.bg};
    color: ${props => props.theme.text};

    @media (max-width: 425px) {
    flex-direction: column;
    padding: 8px;
  }
`
const VideoSection = styled.div`
    flex:5;
    display: flex;
    flex-direction: column;

    @media (max-width: 425px) {
  }
`

const VideoWrapper = styled.div`
    height: 450px;
    @media (max-width: 425px) {
        width: 100%;
        margin:0 auto;
        height: 200px;
    }
`

const VideoTitle = styled.h1`
    font-size: 18px;
    font-weight: 400;

    @media (max-width: 425px) {
        font-size: 14px;
    }

`
const VideoDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 425px) {
       flex-direction: column;
       align-items: flex-start;
       gap: 8px;
    }
`
const ViewsDetails = styled.div`
    font-size: 12px;
    color: ${props => props.theme.textSoft};

    @media (max-width: 425px) {
        font-size: 10px;
    }
    
`
const Buttons = styled.div`
    display: flex;
    gap: 10px;
    @media (max-width: 425px) {
        gap: 3px;
        font-size: 10px;
    }
`

const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 5px;
    border: none;
    background:transparent;
    cursor: pointer;
    color: ${props => props.theme.text};
    @media (max-width: 425px) {
        gap: 3px;
        font-size: 10px;
    }
`

const Channel = styled.div`
    display: flex;
    align-items: center;
    gap:4px;
`

const AboutChannel = styled.div`
    display: flex;
    width: 100%;
`

export const LogoContainer = styled.div`
    display: flex;
    justify-content: start;

`

export const Logo = styled.img`
    width: 45px;
    height: 45px;
    margin-top: 3px;
    border-radius: 50%;
    @media (max-width: 425px) {
        width: 30px;
    height: 30px;
    }

`
const ChannelDetails = styled.div`
    display: flex;
    flex-direction: column;
   
`
const ChannelName = styled.h2`
    margin:10px 0 3px 0;
    font-size: 14px;
    font-weight: 500;

`

const Subscribers = styled.span`
    font-size: 12px;
    color:${props => props.theme.textSoft}
`

const VideoDescription = styled.p`
font-size: 14px;


`
const Subscribe = styled.div`
   
`

const SubscribeButton = styled.button`
    color: white;
    background: #ff0033;
    border:none;
    padding: 5px;
    width: max-content;
    cursor: pointer;
    border-radius: 1px;
    font-weight: 400;
`

const Recommendations = styled.div`
    flex: 2;
    padding: 0px 0px 0px 8px;
`
const RecommendationHead = styled.h1`
    font-size: 15px;
`


const Hr = styled.hr`
    border: 0.5px solid ${props => props.theme.bgLighter};
    margin: 8px 0px;
`

function Video() {
    return (
        <Container>
            <VideoSection>

                <VideoWrapper>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/xylh_sJAYdc"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </VideoWrapper>

                <VideoTitle>
                    One Piece | The Greatest Story Ever Told [ASMV]
                </VideoTitle>

                <VideoDetails>
                    <ViewsDetails>
                        890,234 views &#8226; 2 days ago
                    </ViewsDetails>
                    <Buttons>
                        <Button>
                            <LikeIcon />
                            Like
                        </Button>
                        <Button>
                            <DislikeIcon />
                            Dislike
                        </Button>
                        <Button>
                            <ShareIcon />
                            Share
                        </Button>
                        <Button>
                            <SaveIcon />
                            Save
                        </Button>
                    </Buttons>
                </VideoDetails>

                <Hr />

                <Channel>
                    <AboutChannel>
                        <LogoContainer>
                            <Logo src={ChannelLogo} />
                        </LogoContainer>
                        <ChannelDetails>
                            <ChannelName>Sattu786</ChannelName>
                            <Subscribers>10 Million Subscriber</Subscribers>
                        </ChannelDetails>
                    </AboutChannel>
                    <Subscribe>
                        <SubscribeButton>
                            Subscribe
                        </SubscribeButton>
                    </Subscribe>
                </Channel>
                <Hr />
                <VideoDescription>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, consectetur ipsa? Tempora sapiente adipisci ipsam officia. Praesentium at reprehenderit fuga officiis, expedita amet. Molestias impedit eius aliquam odit m
                </VideoDescription>
                <Hr />
                <CommentSection />
            </VideoSection>


            <Recommendations>
                <RecommendationHead>Recommendations</RecommendationHead>
                <Cards type='sm' />
                <Cards type='sm' />
                <Cards type='sm' />
                <Cards type='sm' />
                <Cards type='sm' />
                <Cards type='sm' />
            </Recommendations>
        </Container>
    )
}

export default Video