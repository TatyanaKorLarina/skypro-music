import styled from 'styled-components'

export const CenterblockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`

export const PopUpAuthor = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 248px;
  height: 305px;
  border-radius: 12px;
  background: #313131;
  position: absolute;
  z-index: 1;
  margin-top: 360px;
  margin-left: 90px;
  overflow: scroll;
`

export const Item = styled.li`
  font-family: StratosSkyeng;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  &:last-child {
    padding-bottom: 30px;
  }
  &:hover {
    color: violet;
    text-decoration: underline;
  }
`

export const PopUpYear = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 180px;
  height: 237px;
  position: absolute;
  z-index: 1;
  margin-top: 360px;
  margin-left: 290px;
`

export const PopUpGenre = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: #313131;
  position: absolute;
  z-index: 1;
  margin-top: 300px;
  margin-left: 350px;
  width: 221px;
  height: 196px;
`