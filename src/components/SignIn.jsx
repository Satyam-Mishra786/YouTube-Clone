import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    background-color: ${props => props.theme.bg};
    width: 100%;
    height: calc(100vh - 60px );
    position: relative;
`

const Wrapper = styled.div`
    height:85%;
    width: 35%;
    background-color: ${props => props.theme.bgLighter};
   color: ${props => props.theme.text};
    position:absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin:auto;
    padding: 10px 30px;
    text-align: center;

    @media (max-width: 768px) {
    width: 95%;
  }
    
`

const BigHead = styled.h1`
    font-size: 25px;
`

const SmallHead = styled.h2`
    font-size: 18px;
    color: ${props => props.theme.textSoft};
`

const InputField = styled.input`
    background: transparent;
    width: 90%;
    padding:  7px;
    border-radius: 3px;
    font-size: 16px;
    outline:none;
    border: 1px solid ${props => props.theme.soft};
    margin-bottom: 15px;
    color:${props => props.theme.text}
`

const Button = styled.button`
    background:  ${props => props.theme.soft};
    width: 30%;
    padding: 10px 13px;
    font-size: 15px;
    border:none;
    color: ${props => props.theme.text};
    margin-bottom: 15px;

`

const ExtraFeatures = styled.div`
    position:relative;
    bottom:-30px;
    display: flex;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
    color:${props => props.theme.textSoft};
    font-size: 14px;
`

const Extras = styled.span`
    cursor: pointer;
`
function SignIn() {
    return (
        <Container>
            <Wrapper>
                <BigHead>
                    Sign In
                </BigHead>
                <SmallHead>
                    to Continue to CloneTube
                </SmallHead>
                <InputField placeholder='Username' />
                <InputField placeholder='Password' />
                <Button>
                    Sign In
                </Button>
                <SmallHead>
                    Or
                </SmallHead>
                <InputField placeholder='Username' />
                <InputField placeholder='Email' />
                <InputField placeholder='Password' />
                <Button>
                    Sign Up
                </Button>
                <ExtraFeatures>
                    <Extras>English(USA)</Extras>
                    <Extras>Terms</Extras>
                    <Extras>Feature</Extras>
                    <Extras>Help</Extras>
                </ExtraFeatures>
            </Wrapper>

        </Container>
    )
}

export default SignIn