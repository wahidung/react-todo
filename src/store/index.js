import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const theme = atom({
  key: "theme",
  default: "light",
  effects_UNSTABLE: [persistAtom],
});

export { theme };
