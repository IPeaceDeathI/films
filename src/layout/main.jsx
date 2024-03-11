import React from "react";
import { Films } from "../components/films.jsx";
import { Search } from "../components/search.jsx";
import { Preloader } from "../components/preloader.jsx";

class Main extends React.Component {
    state = {
        films: [],
        loading: true,
    };
    componentDidMount() {
        fetch("https://www.omdbapi.com/?apikey=8d1421b1&s=matrix")
            .then((response) => response.json())
            .then((data) =>
                this.setState({ films: data.Search, loading: false })
            );
    }

    searchFilms = (str, type = "all") => {
        fetch(
            "https://www.omdbapi.com/?apikey=8d1421b1&s=" +
                str +
                (type != "all" ? "&type=" + type : "")
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({ films: data.Search, loading: false })
            );
    };
    render() {
        const { loading } = this.state;

        return (
            <main className="container content">
                <Search searchFilms={this.searchFilms} />
                {loading ? <Preloader /> : <Films films={this.state.films} />}
            </main>
        );
    }
}

export { Main };
