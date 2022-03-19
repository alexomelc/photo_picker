import { useSelector, useDispatch } from "react-redux";
import localization from "../../services/localization";
import {
  likePhoto,
  unLikePhoto,
  getRandomPhoto,
  getUsersLikedPhotos,
} from "../../services/redux/photos";
import { RootState } from "../../services/store";
import {
  StyledWrapper,
  StyledButtonGroup,
  StyledButton,
  StyledIcon,
  StyledNoImage,
} from "./styles";

interface Props {
  imageUrl: string;
}

const ControlPanel = (props: Props) => {
  const { imageUrl } = props;
  const { randomPhoto } = useSelector((state: RootState) => state.photoSlice);
  const dispatch = useDispatch();

  const likePhotoHandler = () => {
    dispatch(likePhoto(randomPhoto.id));
    dispatch(getRandomPhoto());
    dispatch(getUsersLikedPhotos());
  };
  const unlikePhotoHandler = () => {
    dispatch(unLikePhoto(randomPhoto.id));
    dispatch(getRandomPhoto());
  };

  return (
    <StyledWrapper>
      {imageUrl ? (
        <StyledButtonGroup>
          <StyledButton color="#242436" onClick={unlikePhotoHandler}>
            <StyledIcon imageSrc="./close_icon.svg" />
          </StyledButton>
          <StyledButton color="#3037ef" onClick={likePhotoHandler}>
            <StyledIcon imageSrc="./confirm_icon.svg" />
          </StyledButton>
        </StyledButtonGroup>
      ) : (
        <StyledNoImage>{localization.controlPanel}</StyledNoImage>
      )}
    </StyledWrapper>
  );
};

export default ControlPanel;
