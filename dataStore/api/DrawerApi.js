import PUrls from "./urls"
import axios from 'axios';

import { store } from "../store";
import { setLoading, setData } from "../feature/DuaDailySlicer";
export default class drawerApi {
    static getDrawer = async () => {
        const data = await axios.get(PUrls.drawer,)
        try {
            store.dispatch(setLoading())
            const res = await axios.get(PUrls.drawer,)
            store.dispatch(setData(res.data))
        } catch (_) {

        } 

    }
}