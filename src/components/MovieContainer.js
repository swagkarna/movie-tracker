import React, { Component } from 'react';
import './MovieContainer.scss';
import { signOut } from '../actions/';
import {key} from '../util/key';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchMovies} from '../thunks/fetchMovieThunk';


export class MovieContainer extends Component  {
    constructor() {
      super() 
      this.state = {
       
      }

    }

    componentDidMount = async () => {
      const url= `https://api.themoviedb.org/3/discover/movie?api_key=${key}&/discover/movie?primary_release_year=2010&sort_by=vote_average.desc`;
      await this.props.loadMovies(url);
    }
    
    // fetchMovies= async ()=>{
    //   const url= `https://api.themoviedb.org/3/discover/movie?api_key=${key}&/discover/movie?primary_release_year=2010&sort_by=vote_average.desc`;
    //   fetchData(url)
    //   let response = await fetchData(url)
    //   let movies = cleanMovieData(response)
    //   this.setState({
    //     movies
    //   })
    // }
    


  render() {
    console.log(this.props['user'])
    console.log(this.props.movies)
    const {movies} = this.props
    // const displayMovies = movies.length && movies.map(movie => {
    //     return <img src={movie.posterImage} />
    // })
    return (
    <section> 
        <header>
          <section className='header-title'>
            <h1 className='container-h1'>Movie <i className="fas fa-film"></i> Tracker</h1>
          </section>
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
            <ul id="menu">
              <h4 className="user-name">{this.props['user'].name}</h4>
              <a href="#"><li>Home</li></a>
              <hr></hr>
              <a href="#"><li>Favorite</li></a>
              <hr></hr>
              <a href="#"><li>About</li></a>
              <hr></hr>
              <Link to='/Login'>
              <a href="#" onClick={signOut}><li>Sign Out</li></a>
              </Link>
              <hr></hr>
            </ul>
          </div>
        </nav>
        </header>
       <main className='movies'>{
         movies.map(movie => {
          return (
            <img src={movie.posterImage}/>
          )
         })
        }
       
       </main>
    </section>
        )
}
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
  // user_id: state.user.id,
  // isLoading: state.isLoading,
  user: state.users
})

export const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  loadMovies: (url) => dispatch(fetchMovies(url))
})

export default connect(mapStateToProps,mapDispatchToProps)(MovieContainer);

