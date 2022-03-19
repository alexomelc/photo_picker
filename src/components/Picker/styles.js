import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  margin: 15px 0;
  height: 400px;
`;

export const StyledImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${(props) => props.url});
  background-color: #eee;
  border-radius: 5px;
  background-position: center;
  background-size: cover;
`;
