import PUrls from "./urls"
import axios from 'axios';

import { store } from "../store";
import { setLoading, setData, setRuqyahSubCatId } from "../feature/RuqyahSubCatSlicer";

export default class RuqyahSubCatApi {
    static getRuqyahSubCat = async (lang) => {
        const data = await axios.get(PUrls.ruqyahSubCat+lang,)
        try {
            store.dispatch(setLoading())
            const res = await axios.get(PUrls.ruqyahSubCat+lang,)
            store.dispatch(setData(res.data))
            store.dispatch(setRuqyahSubCatId(res.data?.result?.map((item) => item.subcat_id)))
        } catch (_) {

        } 

    }
}