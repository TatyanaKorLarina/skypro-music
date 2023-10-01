//import React from "react";
import * as S from "./SideBarPersonal.styles.js";

export function SideBarPersonal({ loading, user, switchUser }) {
  return (
    <S.SidebarPersonal>
      {loading ? (
        <S.SidebarPersonalName>{loading}</S.SidebarPersonalName>
      ) : (
        <S.SidebarPersonalName>{user}</S.SidebarPersonalName>
      )}
      <S.SidebarIcon onClick={switchUser}>
        <svg alt="logout">
          <use xlinkHref="img/icon/sprite.svg#logout"></use>
        </svg>
      </S.SidebarIcon>
    </S.SidebarPersonal>
  );
}