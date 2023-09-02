import { useState } from 'react';


import * as S from './Filter.styles'

function Filter() {
  // Создаем состояние для отслеживания текущего активного фильтра
  const [activeFilter, setActiveFilter] = useState(null);

  // Функция обработки клика по кнопке фильтра
  const handleFilterClick = (filterId) => {
    if (activeFilter === filterId) {
      // Если текущий активный фильтр совпадает с нажатым, сбрасываем его значение
      setActiveFilter(null);
    } else {
      // Иначе устанавливаем активный фильтр в ID нажатой кнопки
      setActiveFilter(filterId);
    }
  };
  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterButton 
        active={activeFilter === 'button-author'}
        onClick={() => handleFilterClick('button-author')}>
        исполнителю
      </S.FilterButton>
      <S.FilterButton 
        active={activeFilter === 'button-year'}
        onClick={() => handleFilterClick('button-year')}>
        году выпуска
      </S.FilterButton>
      <S.FilterButton 
      active={activeFilter === 'button-genre'}
        onClick={() => handleFilterClick('button-genre')}>
        жанру
      </S.FilterButton>
      {activeFilter === 'button-author' && (
        <S.PopUpAuthor>
          <S.Item>Nero</S.Item>
          <S.Item>Dynoro</S.Item>
          <S.Item>Outwork</S.Item>
          <S.Item>Mr. Gee</S.Item>
          <S.Item>Ali Bakgor</S.Item>
          <S.Item>Стоункат</S.Item>
          <S.Item>Psychopath</S.Item>
          <S.Item>Jaded</S.Item>
          <S.Item>Will Clarke</S.Item>
          <S.Item>AR/CO</S.Item>
          <S.Item>Blue Foundation</S.Item>
          <S.Item>Zeds Dead</S.Item>
          <S.Item>HYBIT</S.Item>
          <S.Item>Mr. Black</S.Item>
          <S.Item>Offer Nissim</S.Item>
          <S.Item>Hi Profile</S.Item>
          <S.Item>minthaze</S.Item>
          <S.Item>Calvin Harris</S.Item>
          <S.Item>Disciples</S.Item>
          <S.Item>Tom Boxer</S.Item>
        </S.PopUpAuthor>
      )}
      {activeFilter === 'button-year' && (
        <S.PopUpYear>
          <S.Item>1994</S.Item>
          <S.Item>1995</S.Item>
          <S.Item>2000</S.Item>
          
        </S.PopUpYear>
      )}
      {activeFilter === 'button-genre' && (
        <S.PopUpGenre>
          <S.Item>rock</S.Item>
          <S.Item>rap</S.Item>
          <S.Item>hip-hop</S.Item>
          <S.Item>electronic</S.Item>
          <S.Item>house</S.Item>
          <S.Item>techno</S.Item>
          
        </S.PopUpGenre>
      )}
    </S.CenterblockFilter>
  );
  
}

export default Filter;