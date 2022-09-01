import React from 'react'

import clonetube from '../img/clonetube.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// Icons From Material UI
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionIcon from '@mui/icons-material/Subscriptions';
import LibraryIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';
import MusicIcon from '@mui/icons-material/MusicNote';
import SportsIcon from '@mui/icons-material/Sports';
import GamingIcon from '@mui/icons-material/SportsEsports';
import MoviesIcon from '@mui/icons-material/MovieCreation';
import NewsIcon from '@mui/icons-material/Feed';
import LiveIcon from '@mui/icons-material/LiveTv';
import SettingIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import HelpIcon from '@mui/icons-material/Help';
import ModeCommentSharpIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Container = styled.div`
    flex: 1;
    height: 100vh;
    background-color: ${props => props.theme.bgLighter};
    color: ${props => props.theme.text};
    font-size: 14px;
    padding: 10px 15px;
    font-weight: 300;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2;

    @media (max-width: 425px) {
        padding: 6px;
        position:absolute;
        transform :translateX(-150px);
        transform :${props => props.activeNav ? 'translateX(0px)' : 'translateX(-150px)'};
        transition: transform 1s ease;
        width: 150px;
        z-index: 2;
  }
`

const LogoContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    margin-bottom: 10px;
    font-weight: 500;
    color: inherit;
`

const Logo = styled.img`
    width: 25px;
    margin-right: 2px;
`
const Wrapper = styled.div`
    color : inherit;
`

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 7px 0;
    cursor: pointer;
    color:inherit;

    &:hover{
        background-color: ${props => props.theme.soft};
    }
`

const Hr = styled.hr`
    border: 0.5px solid ${props => props.theme.bgLighter};
    margin: 8px 0px;
`

const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 13px;
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
const Button = styled.button`
    background:transparent;
    width: 100px;
    height: 30px;
    padding: 5px 0px;
    color:${props => props.theme.text};
    border: 2px solid ${props => props.theme.text};
    opacity: ${props => !props.activeNav && '0'};
`
const Span = styled.span`
    margin : 6px 0px;
    color: ${props => props.theme.text};
`
function Menu({ darkMode, setDarkMode, activeNav, setActiveNav, mobile }) {

    const handleClick = () => {
        setActiveNav(!activeNav);
    }
    return (
        <Container activeNav={activeNav}>
            {mobile ?
                <Button activeNav={activeNav} onClick={handleClick}>Close Menu</Button> :

                <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <LogoContainer>
                        <Logo src={clonetube} />
                        CLONETUBE
                    </LogoContainer>
                </Link>
            }
            <Wrapper>
                <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <ItemContainer>
                        <HomeIcon />
                        Home
                    </ItemContainer>
                </Link>
                <ItemContainer>
                    <ExploreIcon />
                    Explore
                </ItemContainer>

                <ItemContainer>
                    <SubscriptionIcon />
                    Subscription
                </ItemContainer>

                <Hr />

                <ItemContainer>
                    <LibraryIcon />
                    Library
                </ItemContainer>

                <ItemContainer>
                    <HistoryIcon />
                    History
                </ItemContainer>

                <Hr />
                <Link to='signin' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <SignInContainer>
                        <SignInButton>
                            <AccountCircleIcon />
                            SIGN IN
                        </SignInButton>
                    </SignInContainer>
                </Link>
                <Hr />
                <Span>
                    BEST OF CLONETUBE
                </Span>

                <ItemContainer>
                    <MusicIcon />
                    Music
                </ItemContainer>

                <ItemContainer>
                    <SportsIcon />
                    Sports
                </ItemContainer>

                <ItemContainer>
                    <GamingIcon />
                    Gaming
                </ItemContainer>

                <ItemContainer>
                    <MoviesIcon />
                    Movies
                </ItemContainer>

                <ItemContainer>
                    <NewsIcon />
                    News
                </ItemContainer>

                <ItemContainer>
                    <LiveIcon />
                    Live
                </ItemContainer>

                <Hr />

                <ItemContainer>
                    <SettingIcon />
                    Setting
                </ItemContainer>

                <ItemContainer>
                    <ReportIcon />
                    Report
                </ItemContainer>

                <ItemContainer>
                    <HelpIcon />
                    Help
                </ItemContainer>

                <ItemContainer onClick={() => setDarkMode(!darkMode)}>
                    <ModeCommentSharpIcon />
                    {darkMode ? 'Light' : 'Dark'} Mode
                </ItemContainer>
            </Wrapper>
        </Container>
    )
}

export default Menu