//import { Link } from 'react-router-dom'
//import { useNavigate } from 'react-router-dom'
//import { useLogin } from "../../contexts/user.jsx";
//import React from "react";
import { SideBarPersonal } from "../SideBarPersonal/SideBarPersonal";
import { SideBarBlock } from "../SideBarBlock/SideBarBlock";
//import { categories } from '../playlist/Playlist';
//import { UserContext } from "../../contexts/user.jsx";
import * as S from './Sidebar.styles'
//export const categories = [1, 2, 3]
export default function Sidebar({ loading, albums }) {
  //const navigate = useNavigate()
  //const { logUser } = useLogin()
  


  return (
    <S.MainSidebar>
      {<SideBarPersonal loading={loading} />}
      <SideBarBlock
        loading={loading}
        albums={albums}
      />
    </S.MainSidebar>
  )
}
