import store from "~/store";
import {
  _setBackgroundColor,
  setColor,
  _setFontSize,
} from "~/store/appearance/index";

export const setBackgroundColor = (data) =>
  store.dispatch(_setBackgroundColor(data));
export const setColor = () => store.dispatch(_setColor(data));
export const setFontSize = () => store.dispatch(_setFontSize(data));
