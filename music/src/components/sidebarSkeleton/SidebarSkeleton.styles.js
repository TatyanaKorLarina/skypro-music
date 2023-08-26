import  styled  from 'styled-components'

export const MainSidebar = styled.div`
  max-width: 418px;
  padding: 20px 90px 20px 78px;
`

export const SidebarBlock = styled.div`
  height: 100%;
  padding: 40px 0 0 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
`

export const SidebarList = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

export const SidebarItem = styled.div`
    width: 250px;
    height: 150px;
    &:not(:last-child) {
        margin-bottom: 30px;
    }
`

export const SidebarImgSkeleton = styled.div`
    width: 250px;
    height: 150px;
    background: #313131;
`