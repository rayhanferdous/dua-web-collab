import { configureStore } from "@reduxjs/toolkit";
import BookDetailsSlicer from "./feature/BookDetailsSlicer";
import BookSlicer from "./feature/BookSlicer";
import DrawerSlicer from "./feature/DrawerSlicer";
import DuaCatSlicer from "./feature/DuaCatSlicer";
import DuaDailySlicer from "./feature/DuaDailySlicer";
import DuaInfoSlicer from "./feature/DuaInfoSlicer";
import DuaSlicer from "./feature/DuaSlicer";
import FontSettingsSlicer from "./feature/FontSettingsSlicer";
import GeneralSettingsSlicer from "./feature/GeneralSettingsSlicer";
import GlobalDataSlicer from "./feature/GlobalDataSlicer";
import LanguageSlicer from "./feature/LanguageSlicer";
import RuqyahSlicer from "./feature/RuqyahCatSlicer";
import RuqyahDetailsSlicer from "./feature/RuqyahDetailsSlicer";
import RuqyahSubCatSlicer from "./feature/RuqyahSubCatSlicer";
import SearchSlicer from "./feature/SearchSlicer";
import SelectedSectionSlicer from "./feature/SelectedSectionSlicer";
import SubCatSlicer from "./feature/SubCatSlicer";

export const store = configureStore({
  reducer: {
    dua: DuaSlicer,
    duaCat: DuaCatSlicer,
    subCat: SubCatSlicer,
    ruqyahCat: RuqyahSlicer,
    ruqyahSubCat: RuqyahSubCatSlicer,
    ruqyahDetails: RuqyahDetailsSlicer,
    duaInfo: DuaInfoSlicer,
    books: BookSlicer,
    bookDetails: BookDetailsSlicer,
    drawer: DrawerSlicer,
    duaDaily: DuaDailySlicer,
    duaSearch: SearchSlicer,
    globalData: GlobalDataSlicer,
    language: LanguageSlicer,
    selectedSection: SelectedSectionSlicer,
    generalSettings: GeneralSettingsSlicer,
    fontSettings: FontSettingsSlicer,
  },
});
