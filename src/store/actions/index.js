// this file react redux actions
// actions.js
import { set_title } from "../type";
export const setTitle = (title) => ({
  type: set_title,
  payload: title,
});
