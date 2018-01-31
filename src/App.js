import React, { Component } from 'react';
import './App.css';
//import Charecters from './Charecters';

class App extends Component {

	constructor(props){
    super(props);
		this.handleChange = this.handleChange.bind(this)
    this.state = {
      characters: [],
			valorInput:''
    };
  }

	componentDidMount() {
		fetch ('http://hp-api.herokuapp.com/api/characters')
		.then(request => request.json())
		.then(json => {
			this.setState({
				characters: json,
			});
		//	console.log(this.state.characters);
		});
	}

	paintCharacters() {
		const listName = this.state.characters.filter(item => item.name.toLowerCase().includes(this.state.valorInput));

		return listName.map(item => {
			return (<li className="Characters__item">
			<h2>{item.name}</h2>
			<img src={item.image} className="image" />
			<span>{item.house}</span>
			<span>{item.alive? 'vivo': 'muerto'}</span>
			</li>)
		});
	}


	handleChange(event){
		const searchCharacters = event.target.value
		//console.log(writting)
		this.setState({
			valorInput: searchCharacters.toLowerCase()
		});
	}


  render() {
console.log(this.state.valorInput)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Harry Potter Characters</h1>
        </header>
				<main>
				<div className="Container__page">
				<input type="text" id="Seeker" className="Seeker" name="Seeker" onChange={this.handleChange}></input>
					<ul className="Container__characters">{this.paintCharacters()}</ul>
				</div>
				</main>
      </div>
    );
  }
}

export default App;
