import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin: 30px 0;
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const StyledIcon = styled.span`
  width: 23px;
  height: 23px;
  display: inline-block;
  background-image: url(${(props) => props.imageSrc});
  background-size: cover;
  background-position: initial;
  fill: white;
`;

export const StyledNoImage = styled.div`
  color: #989899;
  text-align: center;
  font-size: 12px;
`;

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  outline: 0px;
  border: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  height: 45px;
  border-radius: 25px;
  width: 125px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: ${(props) => props.color};
  &:hover {
      box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  }
`;
