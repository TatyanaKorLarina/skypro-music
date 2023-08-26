import * as S from './SidebarSkeleton.styles'

function SidebarSkeleton() {
  return (
    <S.MainSidebar>
      
      <S.SidebarBlock>
        <S.SidebarList>
          <S.SidebarItem>
            <S.SidebarImgSkeleton />
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarImgSkeleton />
          </S.SidebarItem>
          <S.SidebarItem>
            <S.SidebarImgSkeleton />
          </S.SidebarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}

export default SidebarSkeleton
