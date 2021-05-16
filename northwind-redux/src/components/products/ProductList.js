import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Badge,Button } from 'reactstrap';
import { bindActionCreators } from 'redux'
import * as productActions from '../../redux/actions/productActions'
import { Table } from 'reactstrap'
import * as cartActions from '../../redux/actions/cartActions'
import alertify from 'alertifyjs'
import {Link} from 'react-router-dom'

class ProductList extends Component {

    componentDidMount() {
        this.props.actions.getProducts()
    }

    addToCart=(product)=>{
        this.props.actions.addToCart({quantity:1,product})
        alertify.success(product.productName + " sepete eklendi.")
    }

    render() {
        return (
            <div>
                <h3>
                    <Badge color='warning'>Products</Badge>
                    <Badge color='success'>{this.props.currentCategory.categoryName}</Badge>

                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Unit Price</th>
                                <th>Quantity Per Unit</th>
                                <th>Units in Stock</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.products.map(product => (
                                <tr key={product.id}>
                                    <th scope="row">{product.id}</th>
                                    <td><Link to={"/saveproduct/"+product.id}>{product.productName}</Link></td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.quantityPerUnit}</td>
                                    <td>{product.unitsInStock}</td>
                                    <td>
                                        <Button color="success" onClick={()=>this.addToCart(product)}>
                                            sepete ekle
                                        </Button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>
                </h3>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        product: state.productListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getCategories, dispatch),
            addToCart: bindActionCreators(cartActions.addToCart,dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)

export default ProductList;