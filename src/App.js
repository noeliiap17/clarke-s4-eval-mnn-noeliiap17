import React, { Component } from 'react';
import './App.css';
// import CharacterCard from './components/Characters';

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
			return (<li className={`Characters__item houseColor_${item.house.toLowerCase()}`}>
			<h2>{item.name}</h2>
			<img src={item.image} className="image" />
			<div className="container__info">
			<div className={`icon house_${item.house.toLowerCase()}`}></div>
			<div className={`icon alive_${item.alive? 'live': 'dead'.toLowerCase()}`}></div>
			</div>
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
				<input type="text" id="Seeker" className="Seeker" name="Seeker" onChange={this.handleChange} placeholder="Search your favourite character"></input>
					<ul className="Container__characters">{this.paintCharacters()}

					</ul>
				</div>
				</main>
      </div>
    );
  }
}

export default App;
