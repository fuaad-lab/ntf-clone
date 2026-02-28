import { atom } from "recoil";

export const modalState = atom({
    key: 'modalState',
    default: false,
});


export const movieState = atom({
    key: 'MovieState',
    default: null,
});