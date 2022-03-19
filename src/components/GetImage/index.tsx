import { StyledGetImage, StyledWrapper } from "./styles";
import { useDispatch } from "react-redux";
import { getRandomPhoto } from "../../services/redux/photos";

interface Props {
  width: string;
  height: string;
}

const GetImage = (props: Props) => {
  const { width, height } = props;
  const dispatch = useDispatch();

  const getRandomPhotoHandler = () => {
    dispatch(getRandomPhoto());
  };

  return (
    <StyledWrapper width={width} height={height}>
      <StyledGetImage
        onClick={getRandomPhotoHandler}
        imageSrc="./plus_icon.svg"
      />
    </StyledWrapper>
  );
};

export default GetImage;
