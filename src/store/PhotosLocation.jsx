import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { photosLinks } from "#constants";

const DEFAULT_PHOTOSGROUP = photosLinks.Library;
const usePhotosgroupStore = create(
  immer((set) => ({
    activePhotosgroup: DEFAULT_PHOTOSGROUP,
    setActionPhotosgroup: (photosLink = null) =>
      set((state) => {
        state.activePhotosgroup = photosLink;
      }),
    resetActionPhotosgroup: () =>
      set((state) => {
        state.activePhotosgroup = DEFAULT_PHOTOSGROUP;
      }),
  }))
);

export default usePhotosgroupStore;