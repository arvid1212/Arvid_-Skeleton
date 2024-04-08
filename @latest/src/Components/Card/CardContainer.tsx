import React from "react";

export class CardContainer extends React.Component{

    render() {
        return (

            <div className="card" >{this.props.children}</div>
        );  
    }


}