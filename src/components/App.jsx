import React from "react";
// import Logo from "./Logo"
import Product from "./Product"

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Product
                        src="images/image1.png"
                        description="collar para dama en acero inoxidable. Ideal para citas casuales"
                        price="97.69"
                        currency="MXN"
                    />
                    <Product
                        src="images/image2.png"
                        description="Bolsa para dama aqua pra multicolor Kelly. Ideal para temporada de verano"
                        price="134.42"
                        currency="MXN"
                    />
                    <Product
                        src="images/image3.png"
                        description="Bolsa para dama aqua pra multicolor Kelly. Ideal para temporada de verano"
                        price="119.25"
                        currency="MXN"
                    />
                </div>
            </div>
        );
    }
}

export default App;