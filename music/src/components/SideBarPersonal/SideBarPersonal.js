//import React from "react";
import * as S from "./SideBarPersonal.styles.js";

export function SideBarPersonal({ loading, user }) {
  return (
    <S.SidebarPersonal>
      {loading ? (
        <S.SidebarPersonalName>User</S.SidebarPersonalName>
      ) : (
        <S.SidebarPersonalName>{user}</S.SidebarPersonalName>
      )}
      <S.SidebarIcon>
        <svg alt="logout">
          <use xlinkHref="img/icon/sprite.svg#logout"></use>
        </svg>
      </S.SidebarIcon>
    </S.SidebarPersonal>
  );
}