import { useState } from 'react';
import './Filter.css';

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
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <switch className={activeFilter === 'filter__button button-author _btn-text' ? 'filter__button  _btn-text active' : 'filter__button  _btn-text'}
        onClick={() => handleFilterClick('filter__button button-author _btn-text')}>
        исполнителю
      </switch>
      <switch className={activeFilter === 'filter__button button-year _btn-text' ? 'filter__button  _btn-text active' : 'filter__button  _btn-text'}
        onClick={() => handleFilterClick('filter__button button-year _btn-text')}>
        году выпуска
      </switch>
      <switch className={activeFilter === 'filter__button button-genre _btn-text' ? 'filter__button  _btn-text active' : 'filter__button  _btn-text'}
        onClick={() => handleFilterClick('filter__button button-genre _btn-text')}>
        жанру
      </switch>
      {activeFilter === 'filter__button button-author _btn-text' && (
        <ul className='pop-up-author'>
          <li>Nero</li>
          <li>Dynoro</li>
          <li>Outwork</li>
          <li>Mr. Gee</li>
          <li>Ali Bakgor</li>
          <li>Стоункат</li>
          <li>Psychopath</li>
          <li>Jaded</li>
          <li>Will Clarke</li>
          <li>AR/CO</li>
          <li>Blue Foundation</li>
          <li>Zeds Dead</li>
          <li>HYBIT</li>
          <li>Mr. Black</li>
          <li>Offer Nissim</li>
          <li>Hi Profile</li>
          <li>minthaze</li>
          <li>Calvin Harris</li>
          <li>Disciples</li>
          <li>Tom Boxer</li>
        </ul>
      )}
      {activeFilter === 'filter__button button-year _btn-text' && (
        <ul className='pop-up-year'>
          <li>1994</li>
          <li>1995</li>
          <li>2000</li>
          
        </ul>
      )}
      {activeFilter === 'filter__button button-genre _btn-text' && (
        <ul className='pop-up-genre'>
          <li>rock</li>
          <li>rap</li>
          <li>hip-hop</li>
          <li>electronic</li>
          <li>house</li>
          <li>techno</li>
          
        </ul>
      )}
    </div>
  );
  
}

export default Filter;