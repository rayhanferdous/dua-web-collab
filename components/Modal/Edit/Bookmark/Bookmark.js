import React from 'react'
import FolderName from '../FolderName'
import EditPopup from '../EditPopup'
import FolderColor from '../../BookmarkPopup/FolderColor'
import PopupBtn from '../../PopupBtn'

function Bookmark({onClose}) {
  return (
      <EditPopup>
          <FolderName />
          <FolderColor />
          <PopupBtn onClose={onClose}/>
    </EditPopup>
  )
}

export default Bookmark