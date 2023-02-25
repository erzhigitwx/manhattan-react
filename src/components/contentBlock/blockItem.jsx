import React from 'react';


const BlockItem = function ({ buttonText, title, pharagraph }) {
    return(
        <div className="block-item">
            <li className="block-item__button">{buttonText}</li>

            <h1 className='block-item__title'>{title}</h1>

            <p className="block-item__text">{pharagraph}</p>

            <li className="block-item__about">Подробнее</li>
        </div>
    );
  };


export default BlockItem;