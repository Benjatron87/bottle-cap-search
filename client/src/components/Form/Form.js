import React, { Component } from 'react';
import './Form.css';
import API from '../../utils/API';

class Form extends Component {

    state = {
        "image": "",
        "brand": ""
    }

    handleChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    submitHandling = event => {
        event.preventDefault();

        const image = {
            "image": this.state.image,
            "brand": this.state.brand
        }
        console.log(image);

        API.sendImage(image);

        this.setState({
            "image": "",
            "brand": ""
        })
    }

    render() {
        return (
            <div>
               <form>
                    <input onChange={this.handleChange} className="input pic-input" type="file" name="image" value={this.state.image}  accept="image/*"/>
                    <br></br>
                    <input onChange={this.handleChange} className="input brand-input" placeholder="Enter Brand" type="text" name="brand" value={this.state.brand} />
                    <br></br>
                    <button onClick={this.submitHandling} className="input submit" type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default Form;