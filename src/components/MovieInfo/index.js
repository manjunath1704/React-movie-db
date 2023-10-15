import React from "react";
//  styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";

//components
import Thumb from "../Thumb";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import NoImage from "../../images/no_image.jpg";

const MovieInfo = ({ movie }) => (
  <Wrapper backdrop={movie.backdrop_path}>
    <Content>
      <Thumb
        image={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NoImage
        }
      />
      <Text>
        <h1>{movie.title}</h1>
        <p>{movie.tagline}</p>
        <h3>PLOT</h3>
        <p>{movie.overview}</p>

        <div className="rating-directors">
          <div>
            <h3>RATING</h3>
            <div className="score">{movie.vote_average}</div>
          </div>
          <div className="director">
            <h3>Release date</h3>
            <div>{movie.release_date}</div>
            <div>{movie.original_language}</div>
            <ul>
              {movie.genres &&
                movie.genres.map((data, index) => {
                  return <li key={index}>{data.name}</li>;
                })}
            </ul>
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
);

export default MovieInfo;