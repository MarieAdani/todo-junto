import React from "react";

class PersonCard extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            edad: this.props.age
        }

    }

    render(){

        const {name, lastName, hair} = this.props

        return(


            <div className="row justify-content-center">
                <div className="row col-3 card mb-3">
                <h2>{name} {lastName}</h2>
                <p>Age: {this.state.edad} </p>
                <p>Hair: {hair} </p>
                <button className="btn btn-info mb-3" onClick={this.years}>Happy Birthday!</button>
                </div>
            </div>
        )
    }

    years = () => {
        let newAge = this.state.edad +1;
        this.setState({edad: newAge})
    }


} 
export default PersonCard;