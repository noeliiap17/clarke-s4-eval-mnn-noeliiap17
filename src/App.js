import React, { Component } from 'react';
import './App.css';
//import Charecters from './Charecters';

class App extends Component {

	constructor(props){
    super(props);
    // this. = this..bind(this);
    this.state = {
      characters: [],
    };
  }

	componentDidMount() {
		fetch ('http://hp-api.herokuapp.com/api/characters')
		.then(request => request.json())
		.then(json => {
			this.setState({
				characters: json,
				showOnlyShearch: true
			});
		//	console.log(this.state.characters);
		});

	}

	paintCharacters() {
		const listName = [];

	for(const listCharacters of this.state.characters){

		listName.push(<li className="Characters__item">

			<h2>{listCharacters.name}</h2>
			<img src={listCharacters.image} className="image" />
			<span>{listCharacters.house}</span>
			<span>{listCharacters.alive? 'vivo': 'muerto'}</span>

			</li>);
	}
	return listName;
}
	filterCharacters() {
		const filter = (event) => {
			const input = document.getElementById('Seeker');
			const valorInput = event.target.value;
			if (valorInput.includes(valorInput)){

			}
		}
	}


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Harry Potter Characters</h1>
        </header>
				<main>
				<div className="Container__page">
				<input type="text" id="Seeker" className="Seeker" name="Seeker" />
					<ul className="Container__characters">{this.paintCharacters()}</ul>
				</div>
				</main>
      </div>
    );
  }
}

export default App;
