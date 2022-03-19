import localization from "../../services/localization";
import { useSelector } from "react-redux";
import Divider from "../Divider";
import GetImage from "../GetImage";
import {
  StyledCarousel,
  StyledWrapper,
  StyledImage,
  StyledHeader,
} from "./styles";
import "./styles.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { RootState } from "../../services/store";

const ApprovedPhotos = () => {
  const { likedPhotos } = useSelector((state: RootState) => state.photoSlice);
  const likedPhotosCounter = likedPhotos.length;

  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 5 },
  };

  const photoItems = likedPhotos.map((photo) => (
    <StyledImage imageUrl={photo.urls.thumb} />
  ));

  return (
    <>
      <StyledWrapper>
        <StyledHeader>
          {localization.approvedPhoto} ({likedPhotosCounter})
        </StyledHeader>
        {photoItems.length === 0 ? (
          <GetImage width="100px" height="50px" />
        ) : (
          <StyledCarousel
            autoHeight
            autoWidth
            disableDotsControls
            disableSlideInfo
            infinite
            responsive={responsive}
            mouseTracking
            items={photoItems}
            controlsStrategy="alternate"
          />
        )}
      </StyledWrapper>
      <Divider />
    </>
  );
};

export default ApprovedPhotos;
