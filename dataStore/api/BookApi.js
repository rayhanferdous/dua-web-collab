import PUrls from "./urls"
import axios from 'axios';

import { store } from "../store";
import { setLoading, setData } from "../feature/BookSlicer";
export default class BookApi {
    static getBooks = async (lang) => {
        const data = await axios.get(PUrls.books+lang,)
        try {
            store.dispatch(setLoading())
            const res = await axios.get(PUrls.books+lang,)
            store.dispatch(setData(res.data))
        } catch (_) {

        } 

    }
}