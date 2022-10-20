import PUrls from "./urls"
import axios from 'axios';

import { store } from "../store";
import { setLoading, setData } from "../feature/BookDetailsSlicer";
export default class BookDetialsApi {
    static getBookDetails = async (lang) => {
        const data = await axios.get(PUrls.bookDetails+lang,)
        try {
            store.dispatch(setLoading())
            const res = await axios.get(PUrls.bookDetails+lang,)
            store.dispatch(setData(res.data))
        } catch (_) {

        } 

    }
}