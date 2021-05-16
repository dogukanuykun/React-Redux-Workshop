import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Navi from './Navi';
import ProductList from './ProductList';
import CategoryList from './CategoryList';


export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  getProducts = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };

  addToCart = product => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart!");
  };

  render() {
    let productInfo = { title: "Product List", }
    let categoryInfo = { title: "Category List" }
    return (
      <div>
        <Container>

          <Navi cart={this.state.cart}></Navi>
          <br></br>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}></CategoryList>
            </Col>
            <Col xs="9">
              <ProductList
                products={this.state.products}
                addToCart = {this.addToCart}
                currentCategory={this.state.currentCategory}
                info={productInfo}></ProductList>
            </Col>
          </Row>
        </Container>

      </div >
    );
  }

}