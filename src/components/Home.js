import React, { Component } from 'react'
import styled from 'styled-components'
import shoppingImage from '../images/shopping.svg'
import {FaCartArrowDown} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const HeroSection = styled.section`
    width: 100%;
    background-color: #DA0037;
    height: 100vh;
`
const Container = styled.div`
    width: 1250px;
    height: 100%;
    margin: auto;
    padding: 0 3rem;
    display: flex;
    padding-top: 8rem;
    justify-content: space-between;
`
const LeftCaption = styled.div`
    
    margin-top: 6rem;
    a {
         text-decoration: none;
     }
`
const Header = styled.h1`
    font-size: 3rem;
    color: #171717 ;
`
const Caption = styled.p`
    margin-top: 1rem;
    font-size: 1rem;
    color: #EDEDED;
`
const Image = styled.img`
    width: 500px;
`
const Button = styled.button`
    color: #171717;
    background-color: #F9F9F9;
    padding: .4rem 1.1rem;
    border-radius: 50px;
    margin-top: 2rem;
    border: 0;
    font-size: 1rem;
    text-align: center;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    cursor: pointer;
     .cart {
         font-size: 1.7rem;
         margin-left: .5rem;
         color: #DA0037;
     }

`

class Home extends Component {

    render() {
        return (
            <HeroSection>
                <Container>
                    <LeftCaption>
                        <Header>Shoppable</Header>
                        <Caption>
                            The no. 1 online store in the internet
                            community.
                        </Caption>
                        <Link to="/store">
                            <Button>
                                    <span>Explore Store</span>
                                    <FaCartArrowDown className='cart'/>
                            </Button>
                        </Link>
                    </LeftCaption>
                    <div>
                        <Image src={shoppingImage} />
                    </div>
                </Container>
            </HeroSection>
        )
    }
}

export default Home
