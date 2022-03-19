import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: url(${(props) => props.url});
  background-color: #eee;
  border-radius: 5px;
`;
export const StyledGetImage = styled.span`
  width: 25%;
  height: 25%;
  display: inline-block;
  background-image: url(${(props) => props.imageSrc});
  background-size: cover;
  background-position: center;
  fill: white;
  cursor: pointer;
`;