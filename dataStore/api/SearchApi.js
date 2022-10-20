import axios from "axios";
import PUrls from "./urls";

import { store } from "../store";
import { setLoading, setData } from "../feature/SearchSlicer";

export default class SearchApi {
  static duaSearch = async (query, lang) => {
    const res = await axios.post(PUrls.duaSearch + lang, query).catch((error) => console.log("Error: ", error));

    try {
      store.dispatch(setLoading());

      store.dispatch(setData(res.data));
    } catch (_) {}
  };
}
