import PUrls from "./urls";
import axios from "axios";

import { store } from "../store";
import { setLoading, setData } from "../feature/DuaCatSlicer";
export default class DuaCatApi {
  static getCategory = async () => {
    const data = await axios.get(PUrls.duaCategory);
    try {
      store.dispatch(setLoading());
      const res = await axios.get(PUrls.duaCategory);
      store.dispatch(setData(res.data));
    } catch (_) {}
  };
}
