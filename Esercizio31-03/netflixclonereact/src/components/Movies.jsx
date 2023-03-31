import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import MoviePicture from "./MoviePicture";
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'

class Movies extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false, 
  };

  async componentDidMount() {
    try {
      let res = await fetch(
        "http://www.omdbapi.com/?apikey=719da90d&s=" +
          this.props.search +
          "&type=movie"
      );
      if (res.ok) {
        const body = await res.json();
        this.setState({ movies: body.Search });
        this.setState({ isLoading: false });
       
      } else {
        console.log("Error in fetch: response status", res.status);
        this.setState({ isLoading: false });
        this.setState({ isError: true });
      }
    } catch (error) {
      console.log("Error in fetch: ", error);
      this.setState({ isLoading: false });
      this.setState({ isError: true });
    }
  }

  render() {
    return (
      <>
        <h2 className="text-light mt-4">{this.props.search}</h2>
        {this.state.isError && (
          <Alert variant="danger">ERRORE!!</Alert>
        )}
        {this.state.isLoading && (
          <div className="text-center">
            <Spinner animation="border" role="status" variant="success">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        <Row>
          {this.state.movies.slice(0, 4).map((movie) => {
            return (
              <Col xs={12} sm={6} md={4} lg={3} key={movie.imdbID}>
                <MoviePicture src={movie.Poster}></MoviePicture>
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default Movies;

