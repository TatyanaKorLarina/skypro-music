//import React from "react";
import { Link } from "react-router-dom";
import * as S from "./SideBarBlock.styles.js";
import  SidebarSkeleton  from "../sidebarSkeleton/SidebarSkeleton.js";

export function SideBarBlock({ loading, albums }) {
  return (
    <S.SidebarBlock>
      {albums.map((album) => (
        <S.SidebarList key={album.id}>
          <S.SidebarItem>
            {loading ? (
              <SidebarSkeleton />
            ) : (
              <Link to={`category/${album.id}`}>
                <S.SidebarLink href={album.playlistImg}>
                  <S.SidebarImgItem
                    src={album.playlistImg}
                    alt={album.playlistAlt}
                  />
                </S.SidebarLink>
              </Link>
            )}
          </S.SidebarItem>
        </S.SidebarList>
      ))}
    </S.SidebarBlock>
  );
}