import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    render() {
        return (
            <div className="input">
               <form>
                    <input type="file" name="pic" accept="image/*"/>
                    <br></br>
                    <input type="text" name="brand"/>
                    <br></br>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default Form;