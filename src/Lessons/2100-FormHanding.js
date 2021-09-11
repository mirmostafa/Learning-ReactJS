import React, { Component } from 'react'

export class FormHanding extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName: '',
             language: 'Cpp',
        };
    }
    

    onUserNameTextBoxChanged = event =>{
        //console.log(event.target.value);
        this.setState({
            userName: event.target.value
        }, () => console.log(this.state.userName));
    };

    onLanguageChanged = event =>{
        this.setState({
            language : event.target.value
        }, () => console.log(this.state.language));
    };

    render() {
        return (
            <form>
                <div>
                    <input type='text' value={this.state.userName} onChange={this.onUserNameTextBoxChanged}/>
                </div>
                <div>
                    <select value={this.state.language} onChange={this.onLanguageChanged}>
                        <option value="Cpp">C++</option>
                        <option value="CSharp">C#</option>
                        <option value="FSharp">F#</option>
                    </select>
                </div>
            </form>
        )
    }
}

export default FormHanding
