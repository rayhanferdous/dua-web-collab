import PUrls from "./urls"
import axios from 'axios';

import { store } from "../store";
import { setLoading, setData } from "../feature/RuqyahCatSlicer";

export default class RuqCatApi {
    static getRuqyahCategory = async (lang) => {
        const data = await axios.get(PUrls.ruqyahCategory+lang,)
        try {
            store.dispatch(setLoading())
            const res = await axios.get(PUrls.ruqyahCategory+lang,)
            store.dispatch(setData(res.data))
        } catch (_) {

        } 

    }
}