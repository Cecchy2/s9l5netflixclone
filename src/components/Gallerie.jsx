import { Component } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

const starWars = "http://www.omdbapi.com/?apikey=64766599&s=star wars";
const gameOfThrones = "http://www.omdbapi.com/?apikey=64766599&s=game of thrones";
const betterCallSaul = "http://www.omdbapi.com/?apikey=64766599&s=better call saul";

class Galleria extends Component {
  state = {
    movies1: [],
    movies2: [],
    movies3: [],
    loading1: true,
    loading2: true,
    loading3: true,
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
          this.setState({ movies1: data.Search, loading1: false });
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
          this.setState({ movies2: data.Search, loading2: false });
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
          this.setState({ movies3: data.Search, loading3: false });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { movies1, movies2, movies3, loading1, loading2, loading3 } = this.state;

    console.log(movies1);
    return (
      <>
        <h5 className="text-white mt-4 text-start">Guarda la saga di Star Wars</h5>
        {loading1 ? (
          <Spinner animation="border" variant="light" />
        ) : (
          <Row>
            {movies1.slice(0, 6).map((movie) => (
              <Col key={movie.imdbID} className="text-white" xs={12} lg={4} xl={2}>
                <SingleMovie movie={movie} />
              </Col>
            ))}
          </Row>
        )}
        <h5 className="text-white mt-2 text-start">Guarda Game of Thrones</h5>
        {loading2 ? (
          <Spinner animation="border" variant="light" />
        ) : (
          <Row>
            {movies2.slice(0, 6).map((movie) => (
              <Col key={movie.imdbID} className="text-white overflow-hidden" xs={12} lg={4} xl={2}>
                <SingleMovie movie={movie} />
              </Col>
            ))}
          </Row>
        )}
        <h5 className="text-white  text-start">Continua a guardare Better Call Saul </h5>
        {loading3 ? (
          <Spinner animation="border" variant="light" />
        ) : (
          <Row>
            {movies3.slice(0, 6).map((movie) => (
              <Col key={movie.imdbID} className="text-white overflow-hidden" xs={12} lg={4} xl={2}>
                <SingleMovie movie={movie} />
              </Col>
            ))}
          </Row>
        )}
      </>
    );
  }
}

export default Galleria;
