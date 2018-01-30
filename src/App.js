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
				characters: json
			});
		//	console.log(this.state.characters);
		});

	}

	paintCharacters() {
		const listName = [];

	for(const listCharacters of this.state.characters){

		listName.push(<li className="listPerson"><div class="Container__person">
			<h2>{listCharacters.name}</h2>
			<img src={listCharacters.image} className="image"/>
			<span>{listCharacters.house}</span>
			<span>{listCharacters.alive? 'vivo': 'muerto'}</span>

			</div></li>);
	}
	return listName;
}

filterCharacters() {
	
}


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Harry Potter Characters</h1>
        </header>
				<main>
				<div className="Container__page">
				<input type="text" className="Seeker" name="Seeker" />
					<div className="Container__characters">
					<ul>{this.paintCharacters()}</ul>
					</div>
				</div>

				</main>
      </div>
    );
  }
}

export default App;
