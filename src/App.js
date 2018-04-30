import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Components/Header/Header';
import './App.css';
import {superheroMovies} from './Data_Static/Movies';
import Movie from './Components/Movie/Movie';
class App extends Component {

  constructor(){
    super();

    this.state = {
      movieList: superheroMovies
    }
  }

  render() {
    const headerText = "Welcome to my React Movie Gallery";
    console.log(this.state);
    return (
      <div className="App">
        <Header text={headerText}/>

        {
          /**
            *  Iterating over the Movies movieList
            */
         }
        <div className="Movies">
        {
          this.state.movieList.map(
            (item) => {
                console.log(item);
                return (
                        <Movie 
                            key = {item.id}
                            title={item.title}
                            poster={item.poster}
                            year={item.year}
                            description={item.description}
                        >
                        </Movie>
                  
                )
            }
          )
        }
        </div>
      </div>
    );
  }
}

export default App;
