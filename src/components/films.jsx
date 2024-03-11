/* eslint-disable react/prop-types */
import { Film } from "./film.jsx";

function Films(props) {
    const { films = [] } = props;

    return (
        <div className="films">
            {films.length ? (
                films.map((film) => <Film key={film.imdbId} {...film} />)
            ) : (
                <h4>Not found</h4>
            )}
        </div>
    );
}

export { Films };
