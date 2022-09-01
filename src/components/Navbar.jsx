import React from 'react';
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'


const Container = styled.div`
    background-color: ${props => props.theme.bgLighter};
    color: ${props => props.theme.text};
    height: 60px;
    position: ${props => !props.mobile && 'sticky'};
    top: 0;
    padding: 0px 25px;

    @media (max-width: 425px) {
        padding: 0px 5px;
  }
    
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    justify-content: flex-end;
    height: 100%;

    @media (max-width: 425px) {
    justify-content: space-between;
  }
`

const SignInButton = styled.button`
    background:transparent;
    color: #00e1ff;
    width: 90px;
    height: 30px;
    padding: 5px 0px;
    border : 1px solid #04878b;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor:pointer;


`

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: 45%;
    height: 50%;
    color: black;
    background-color: white;
    border: 2px solid #202030;
    @media (max-width: 425px) {
        width: 30%;
  }
`

const Search = styled.input`
    height: 28px;
    font-size: 16px;
    width: 100%;
    height: 100%;
    padding: 2px 8px;  
    border: none;

    &:focus{
        outline:none;
    }
`

const styleSearchIcon = {
    backgroundColor: 'white',
    color: 'black',
    cursor: 'pointer',
    heigth: '100%'

}

const Button = styled.button`
    background:transparent;
    width: 100px;
    height: 30px;
    padding: 5px 0px;
    color:${props => props.theme.text};
    border: 2px solid ${props => props.theme.text};
    opacity: ${props => (props.activeNav && props.mobile) ? '0' : '1'};
    display:${props => !props.mobile && 'none'}
`

function Navbar({ darkMode, activeNav, setActiveNav, mobile }) {

    const handleClick = () => {
        setActiveNav(!activeNav);
    }
    return (
        <Container mobile={mobile}>
            <Wrapper>
                <Button mobile={mobile} activeNav={activeNav} onClick={handleClick}>Open Menu</Button>

                <SearchContainer>
                    <Search placeholder='Search...' />
                    <SearchIcon style={styleSearchIcon} />
                </SearchContainer>
                <Link to='signin' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <SignInButton>
                        <AccountCircleIcon />
                        SIGN IN
                    </SignInButton>
                </Link>
            </Wrapper>
        </Container >
    )
}

export default Navbar