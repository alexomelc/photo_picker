import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";

export const StyledWrapper = styled.div`
  margin: 5px 0 15px 0;
`;

export const StyledCarousel = styled(AliceCarousel)`
  .alice-carousel {
  }

.alice-carousel__wrapper {
  background-color: yellow;
}
`;

export const StyledImage = styled.div`
  margin: 5px;
  height: 50px;
  width: 100px;
  background-image: url(${(props) => props.imageUrl});
  background-color: #eee;
  background-size: cover;
  border-radius: 5px;
  background-position: center;
`;

export const StyledHeader = styled.p`
  color: #3037ef;
  letter-spacing: 1px;
  font-size: 12px;
  text-transform: uppercase;
`;