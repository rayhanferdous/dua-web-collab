import PUrls from "./urls"
import axios from 'axios';

import { store } from "../store";
import { setLoading, setData } from "../feature/DuaInfoSlicer";
export default class DuaInfoApi {
    static getDuaInfo = async (language) => {
        const data = await axios.get(PUrls.duaInfo+language,)
        try {
            store.dispatch(setLoading())
            const res = await axios.get(PUrls.duaInfo+language,)
            store.dispatch(setData(res.data))
        } catch (_) {

        } 

    }
}