import http from "./http-common";
const user = "alexander_omelc";

const PhotoApi = {
  GetRandomPhoto: () => {
    return http.get(`/photos/random`);
  },

  LikePhoto: (id: string) => {
    return http.post(`/photos/${id}/like`);
  },

  UnlikePhoto: (id: string) => {
    return http.delete(`/photos/${id}/like`);
  },

  GetUsersLikedPhots: () => {
    return http.get(`/users/${user}/likes/?per_page=30`);
  },
};

export default PhotoApi;
