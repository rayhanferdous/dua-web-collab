import PUrls from "./urls"
import axios from 'axios';

import { store } from "../store";
import { setLoading, setData } from "../feature/DuaDailySlicer";
export default class DuaApi {
    static getDailyDua = async (lang) => {
        const data = await axios.get(PUrls.duaDailySlider+lang,)
        try {
            store.dispatch(setLoading())
            const res = await axios.get(PUrls.duaDailySlider+lang,)
            store.dispatch(setData(res.data))
        } catch (_) {

        } 

    }
}