import React, { Component } from 'react';

/*
    This is individual movie component as 
    name suggests :)

    We are accessing all the required attributes
    from Reacts Prop :) :)
*/
class Movie extends Component{
    
    constructor(){
        super();
    }

    render()
    {
        return(
            <div className="Movie">
                
                <h2>{ this.props.title }</h2>
                <div><img width={180} height={300} src={ this.props.poster } /></div>
                <div className="Movie-Description">
                    <p>({ this.props.year })</p>
                    <p>{ this.props.description }</p>
                </div>
            </div>
        )
    }
}

export default Movie;