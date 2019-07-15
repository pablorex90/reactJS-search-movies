import React, { Component } from 'react'
import { SearchForm } from '../components/SearchForm';
import { Title } from '../components/title';
// import '../App.css';
// import 'bulma/css/bulma.css'
import { MoviesList } from '../components/MoviesList';

export class Home extends Component {
    state = { results: [], usedSearch: false }

    _handleResults = (results) => {
        this.setState({ results, usedSearch: true })
    }

    _renderResults = () => {
        return (
            this.state.results.length === 0
                ? <p>Sorry! :disappointed: results not found</p>
                : <MoviesList movies={this.state.results}></MoviesList>
        )
    }

    render() {
        return (
            <div>
                <Title>Search Movies</Title>
                <div className='SearchForm-wrapper'>
                    <SearchForm onResults={this._handleResults}></SearchForm>
                </div>
                {
                    this.state.usedSearch
                        ? this._renderResults()
                        : <small>Use the form to search a movie</small>
                }
            </div>
        )
    }
}
