import { store } from "../services/store";
import { addRandomPhoto, addLikedPhotos } from "../services/redux/photos";

test("Add random photo", () => {
  let state = store.getState().photoSlice;
  const unchangedPhoto = state.randomPhoto;
  expect(unchangedPhoto?.urls.regular).toBe("");
  expect(unchangedPhoto?.urls.thumb).toBe("");

  store.dispatch(addRandomPhoto({ id: "1", urls: { regular: 'google.com'}  }));
  state = store.getState().photoSlice;

  const changedPhoto = state.randomPhoto;
  expect(changedPhoto?.id).toBe("1");
  expect(changedPhoto?.urls.regular).toBe("google.com");
});

test("Add liked photo", () => {
  let state = store.getState().photoSlice;
  const unchangedPhoto = state.likedPhotos.find((photo) => photo.id === "");
  expect(unchangedPhoto?.urls.regular).toBe(undefined);
  expect(unchangedPhoto?.urls.thumb).toBe(undefined);

  store.dispatch(addLikedPhotos([{ id: "1", urls: { regular: "google.com" }}]));

  state = store.getState().photoSlice;
  const changedPhoto = state.likedPhotos.find((photo) => photo.id === "1");
  expect(changedPhoto?.id).toBe("1");
  expect(changedPhoto?.urls.regular).toBe("google.com");
});
