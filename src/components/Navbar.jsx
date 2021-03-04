import React from "react";

class Navbar extends React.Component {

    elements = ["nuevo", "mujer", "hombre", "niños", "catálogos", "ofertas"];
    showElements = (elements) => {
        return elements.map(element => {
            return <li><a href="/">{element}</a></li>
        });
    }
    render() {
        return (
            <div>
                <nav className={this.props.className}>
                    <ul>
                        {this.showElements(this.elements)}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;
