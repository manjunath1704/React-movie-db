import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import {
  Wrapper,
  Image,
  Title,
  Year,
  ThumbnailData,
  OverView,
} from "./Thumb.styles";
const Thumb = ({
  image,
  movieId,
  clickable,
  title,
  year,
  overView,
  rating,
}) => (
  <Wrapper>
    {clickable ? (
      <Link to={`/${movieId}`} style={{ textDecoration: "none" }}>
        <Image src={image} alt="movie-thumb" />
        <ThumbnailData>
          <Title>{title}</Title>
          <Year>{new Date(year).getFullYear()}</Year>
          <OverView>{overView}</OverView>
          <ReactStars
            count={5}
            size={24}
            value={rating / 2}
            edit={false}
            isHalf={true}
            activeColor="#ffd700"
            color="#fff"
            filledIcon={false}
          />
        </ThumbnailData>
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" />
    )}
  </Wrapper>
);
export default Thumb;