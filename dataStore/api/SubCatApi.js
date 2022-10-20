import PUrls from "./urls";
import axios from "axios";

import { store } from "../store";
import { setLoading, setData, setSubCatIdData,setallDuaOfCatID } from "../feature/SubCatSlicer";

export default class SubCatApi {
  static getSubCategory = async (id) => {

    let subcatidlist = [];
    let loaded_subcatid_with_duas = {};
    let subcatid_with_duas = [];

    

    try {
      
      store.dispatch(setLoading());
      const res = await axios.get(PUrls.duaSubCategory);
      store.dispatch(setData(res.data));

      subcatidlist = res.data.result
        .filter((filterItem) => {
          return filterItem.cat_id === id
        }).map((item) => item.subcat_id);
       
        for (let i = 0; i < subcatidlist.length; i++) {
          let data = await axios.get(PUrls.dua + subcatidlist[i]);
          loaded_subcatid_with_duas[`${subcatidlist[i]}`] = data.data;     
      };
     
      Object.keys(loaded_subcatid_with_duas).forEach(function(key, index) {
        subcatid_with_duas.push(loaded_subcatid_with_duas[key].result);
      });
     

      
      
      store.dispatch(setSubCatIdData(loaded_subcatid_with_duas));
      store.dispatch(setallDuaOfCatID(subcatid_with_duas));
    } catch (_) { }
  };
}
