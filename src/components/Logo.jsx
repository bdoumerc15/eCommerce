import React from "react";

class Logo extends React.Component {
    render() {
        return (
            <div id="logo">
                <img src={this.props.src} alt={this.props.alt} />
            </div>
        );
    }
}

export default Logo;