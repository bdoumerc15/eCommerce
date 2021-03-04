import React from "react";
import "./product.css"

class Product extends React.Component {
    render() {
        return (
            <div className="product">
                <div className="image-content">
                    <img
                        src={this.props.src}
                        alt={this.props.alt}
                        className={this.props.className}
                    />
                </div>
                <div className="product-content">
                    <div className="description-product-content">
                        <span>{this.props.description}</span>
                    </div>
                    <div className="price-product-content">
                        <div className="price">
                            <span id="price">&#36;{this.props.price} {this.props.currency}</span>
                        </div>
                        <div className="button-comprar">
                            <input type="button" id="button-buy" value="COMPRAR" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;