import React from "react";
import { Wrapper, Content, Text } from "./HeroImage.styles";
import Rating from "react-rating-stars-component";
const HeroImage = ({ image, title, text, rating }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1 style={{margin:'0px'}}>{title}</h1>
        <p style={{margin:'0px'}}>{text}</p>
        <Rating
          count={5}
          size={24}
          value={rating / 2}
          edit={false}
          isHalf={true}
          activeColor="#ffd700"
        />
      </Text>
    </Content>
  </Wrapper>
);

export default HeroImage;
