import React from 'react'
import styled from 'styled-components'
import Cards from './Cards'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 8px 20px;
    justify-content: space-around;
    background-color: ${props => props.theme.bg};
`

function Home() {
    return (
        <Container>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </Container>
    )
}

export default Home