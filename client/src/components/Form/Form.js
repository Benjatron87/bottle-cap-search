import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    render() {
        return (
            <div>
               <form>
                    <input className="input pic-input" type="file" name="pic" accept="image/*"/>
                    <br></br>
                    <input className="input brand-input" placeholder="Enter Brand" type="text" name="brand"/>
                    <br></br>
                    <button className="input submit" type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default Form;