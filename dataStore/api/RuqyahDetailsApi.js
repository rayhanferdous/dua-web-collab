import PUrls from "./urls"
import axios from 'axios';

import { store } from "../store";
import { setLoading, setData } from "../feature/RuqyahDetailsSlicer";

export default class RuqyahDetailsApi {
    static getRuqyahDetails = async (lang) => {
        const data = await axios.get(PUrls.ruqyahDetails+lang,)
        try {
            store.dispatch(setLoading())
            const res = await axios.get(PUrls.ruqyahDetails+lang,)
            store.dispatch(setData(res.data))
        } catch (_) {

        } 

    }
}