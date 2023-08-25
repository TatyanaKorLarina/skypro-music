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
          <li className="item">Nero</li>
          <li className="item">Dynoro</li>
          <li className="item">Outwork</li>
          <li className="item">Mr. Gee</li>
          <li className="item">Ali Bakgor</li>
          <li className="item">Стоункат</li>
          <li className="item">Psychopath</li>
          <li className="item">Jaded</li>
          <li className="item">Will Clarke</li>
          <li className="item">AR/CO</li>
          <li className="item">Blue Foundation</li>
          <li className="item">Zeds Dead</li>
          <li className="item">HYBIT</li>
          <li className="item">Mr. Black</li>
          <li className="item">Offer Nissim</li>
          <li className="item">Hi Profile</li>
          <li className="item">minthaze</li>
          <li className="item">Calvin Harris</li>
          <li className="item">Disciples</li>
          <li className="item">Tom Boxer</li>
        </ul>
      )}
      {activeFilter === 'filter__button button-year _btn-text' && (
        <ul className='pop-up-year'>
          <li className="item">1994</li>
          <li className="item">1995</li>
          <li className="item">2000</li>
          
        </ul>
      )}
      {activeFilter === 'filter__button button-genre _btn-text' && (
        <ul className='pop-up-genre'>
          <li className="item">rock</li>
          <li className="item">rap</li>
          <li className="item">hip-hop</li>
          <li className="item">electronic</li>
          <li className="item">house</li>
          <li className="item">techno</li>
          
        </ul>
      )}
    </div>
  );
  
}

export default Filter;