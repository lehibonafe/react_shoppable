import React, { Component } from 'react'
import styled from 'styled-components'
import { TiArrowSortedDown } from 'react-icons/ti'

const ProductSection = styled.section`
    width: 1250px;
    margin: 5rem auto 0 auto;
`
const ProductContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: auto 0 auto 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`
const ProductBox = styled.div`
    width: 250px;
    height: 300px;
    padding: 1rem;
    margin: 1rem ;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`
const ProductImage = styled.img`
    width: 50%;
    height: 120px;
    display: block;
    margin: auto;
`
const ProductTitle = styled.p`
    margin-top: 1rem;
    height: 5rem;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
`
const ProductPrice = styled.p`
    color: #DA0037;
    font-size: 2rem;
    text-align: right;
`
const SortButton = styled.button`
    width: 13rem;
    height: 2.2rem;
    border: 0;
    text-align: left;
    background-color: #F9F9F9;
    position: relative;
    float: right;
    margin-right: 6.5rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;


    span {
        padding-right: 1rem;
    }
    p  {
        padding-left: 1rem;
    }
    &:hover UL {
        display: block;
    }
`
const Li = styled.li`
    list-style-type: none;
    position: relative;
    display: inline-block;
    width: 100%;
`
const Button = styled.a`
    display: block;
    padding: 1rem 0;
    text-decoration: none;
    padding: 1rem 1.3rem 1rem 0;
    color: black;
    &:hover {
        text-decoration: underline;
    }
`
const UL = styled.ul`
    position: absolute;
    width: 13rem;
    display: none;
    background-color: #F9F9F9;
    text-align: right;
    top: 2rem;
`

class Store extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             product: [],
             sort: 'All'
        }

        //bind all methods
        this.jeweleryProduct = this.jeweleryProduct.bind(this)
        this.electronicsProduct = this.electronicsProduct.bind(this)
        this.mensProduct = this.mensProduct.bind(this)
        this.womensProduct = this.womensProduct.bind(this)
        this.allProducts = this.allProducts.bind(this)
    }
    

    componentDidMount(){
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(productList => {
                this.setState({ product: productList })
            })
            .catch(error => console.log(error))
            
    }

    allProducts = (e) => {
        e.preventDefault()
        fetch('https://fakestoreapi.com/products/')
            .then(response =>response.json())
            .then(products => {
                this.setState({ 
                    product: products,
                    category: 'All'
                 })
            })
    }

    jeweleryProduct = (e) => {
        e.preventDefault()
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(response =>response.json())
            .then(productSorted => {
                this.setState({ 
                    product: productSorted,
                    category: 'Jewelery'
                 })
            })
    }

    electronicsProduct = (e) => {
        e.preventDefault()
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(response =>response.json())
            .then(productSorted => {
                this.setState({ 
                    product: productSorted,
                    category: 'Electronics'
                 })
            })
    }

    mensProduct = (e) => {
        e.preventDefault()
        fetch("https://fakestoreapi.com/products/category/men's%20clothing")
            .then(response =>response.json())
            .then(productSorted => {
                this.setState({ 
                    product: productSorted,
                    category: "Men's clothing"
                 })
            })
    }

    womensProduct = (e) => {
        e.preventDefault()
        fetch("https://fakestoreapi.com/products/category/women's%20clothing")
            .then(response =>response.json())
            .then(productSorted => {
                this.setState({ 
                    product: productSorted,
                    category: "Women's clothing"
                 })
            })
    }


    
    render() {
        return (
            <ProductSection>
                  <SortButton>
                        <p>Sort by: </p><span>{this.state.sort} <TiArrowSortedDown/></span>
                        <UL>
                            <Li><Button href='' onClick={this.allProducts}>All</Button></Li>
                            <Li><Button href='' onClick={this.electronicsProduct}>Electronics</Button></Li>
                            <Li><Button href='' onClick={this.jeweleryProduct}>Jewelery</Button></Li>
                            <Li><Button href='' onClick={this.mensProduct}>Men's clothing</Button></Li>
                            <Li><Button href='' onClick={this.womensProduct}>Women's clothing</Button></Li>
                        </UL>
                    </SortButton>
                 <ProductContainer>
                {this.state.product.map((product) => (
                    <ProductBox key={product.id}>
                        <ProductImage src={product.image} alt="Product Image"/>
                        <ProductTitle>
                            {product.title}
                        </ProductTitle>
                        <ProductPrice>
                            {'$' + product.price}
                        </ProductPrice>
                    </ProductBox>
                ))}
                </ProductContainer>
            </ProductSection>
        )
    }
}

export default Store
