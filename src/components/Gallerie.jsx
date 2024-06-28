import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

const starWars = "http://www.omdbapi.com/?apikey=64766599&s=star wars";
const gameOfThrones = "http://www.omdbapi.com/?apikey=64766599&s=game of thrones";
const betterCallSaul = "http://www.omdbapi.com/?apikey=64766599&s=better call saul";

class Galleria extends Component {
  state = {
    movies1: [],
    movies2: [],
    movies3: [],
  };

  componentDidMount() {
    this.FetchMovies();
    this.FetchMovies2();
    this.FetchMovies3();
  }

  FetchMovies = async () => {
    try {
      const resp = await fetch(starWars);
      if (resp.ok) {
        const data = await resp.json();
        if (data.Search) {
          this.setState({ movies1: data.Search });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  FetchMovies2 = async () => {
    try {
      const resp = await fetch(gameOfThrones);
      if (resp.ok) {
        const data = await resp.json();
        if (data.Search) {
          this.setState({ movies2: data.Search });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  FetchMovies3 = async () => {
    try {
      const resp = await fetch(betterCallSaul);
      if (resp.ok) {
        const data = await resp.json();
        if (data.Search) {
          this.setState({ movies3: data.Search });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { movies1, movies2, movies3 } = this.state;

    console.log(movies1);
    return (
      <Container>
        <h5 className="text-white mt-4 text-start">Guarda la saga di Star Wars</h5>
        <Row>
          {movies1.slice(0, 6).map((movie) => (
            <Col key={movie.imdbID} className="text-white ">
              <SingleMovie movie={movie} />
            </Col>
          ))}
        </Row>
        <h5 className="text-white mt-2 text-start">Guarda Game of Thrones</h5>
        <Row>
          {movies2.slice(0, 6).map((movie) => (
            <Col key={movie.imdbID} className="text-white overflow-hidden" mb={7}>
              <SingleMovie movie={movie} />
            </Col>
          ))}
        </Row>
        <h5 className="text-white  text-start">Continua a guardare Better Call Saul </h5>
        <Row>
          {movies3.slice(0, 6).map((movie) => (
            <Col key={movie.imdbID} className="text-white overflow-hidden" mb={5}>
              <SingleMovie movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Galleria;
