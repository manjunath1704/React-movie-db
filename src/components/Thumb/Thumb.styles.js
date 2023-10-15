import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframe animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Title = styled.h5`
  font-size: 20px;
  color: #000;
  text-decoration: none;
  margin: 0;
  color: #fff;
`;
export const Year = styled.h5`
  font-size: 12px;
  color: #000;
  text-decoration: none;
  margin: 0;
  color: #fff;
  font-weight:300;
`;

export const Wrapper = styled.article`
  position: relative;
  overflow:hidden;
`;
export const ThumbnailData = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px 15px;
  background: linear-gradient(to bottom,#ffffff00 -1%,#000 18%);
  border-bottom-left-radius:20px;
  border-bottom-right-radius:20px;
`;

export const OverView = styled.p`
margin:6px 0;
font-size:14px;
color:#fff;
display: -webkit-box;
-webkit-line-clamp: 3; /* Number of lines to show */
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
`;