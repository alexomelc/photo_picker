import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../services/store";
import Header from "../../components/Header";
import ApprovedPhotos from "../../components/ApprovedPhotos";
import Picker from "../../components/Picker";
import ControlPanel from "../../components/ControlPanel";
import Spinner from "../../components/Spinner";
import { useEffect } from "react";
import { StyledWrapper, StyledApp } from "./styles";
import { addRandomPhoto } from "../../services/redux/photos";
import {
  getUsersLikedPhotos,
  addLikedPhotos,
} from "../../services/redux/photos";

export default function Reviewer() {
  const { randomPhoto, likedPhotos, loading } = useSelector(
    (state: RootState) => state.photoSlice
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const localData = localStorage.getItem("randomPhoto");
    const likedPhotos = localStorage.getItem("likedPhotos");
    if (localData !== null) {
      dispatch(addRandomPhoto(JSON.parse(localData)));
    }

    if (likedPhotos !== null) {
      dispatch(addLikedPhotos(JSON.parse(likedPhotos)));
    } else {
      dispatch(getUsersLikedPhotos());
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("randomPhoto", JSON.stringify(randomPhoto));
    localStorage.setItem("likedPhotos", JSON.stringify(likedPhotos));
  }, [randomPhoto, likedPhotos]);

  return (
    <StyledWrapper>
      <StyledApp data-testid="reviewer">
        <Header />
        {loading ? (
          <Spinner />
        ) : (
          <>
            <ApprovedPhotos />
            <Picker imageUrl={randomPhoto.urls.regular} loading={loading} />
            <ControlPanel imageUrl={randomPhoto.urls.regular} />
          </>
        )}
      </StyledApp>
    </StyledWrapper>
  );
}
