import { atom } from "recoil";

// atom 설정
export const recoilState = atom({
  key: "count",
  default: 10,
});
