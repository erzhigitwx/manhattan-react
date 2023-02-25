import React from 'react';
import filmAf1 from '../../assets/film1.jpg';
import filmAf2 from '../../assets/filmList/filmAf2.jpg';
import filmAf3 from '../../assets/filmList/filmAf3.jpg';
import filmAf4 from '../../assets/filmList/filmAf4.jpg';

const FilmList = function () {
    return(
        <div className="film-list">
            <li className="film-list__button">Top “Manhattan” party</li>
            <h1 className="film-list__title">афиша</h1>
            <div className="film-list__container">
                <div className="unique">
                    <img src={filmAf1} alt="film" className='unique-img'/>
                    <div className="unique-content">
                        <li className="unique-content__button">17.07.2022 * 19.00</li>
                        <p className="unique-content__text">Рок в Манхэттене </p>
                        <li className="unique-content__price">550 $</li>
                    </div>
                </div>
                <img src={filmAf2} alt="film" />
                <img src={filmAf3} alt="film" />
                <img src={filmAf4} alt="film" />
                <img src={filmAf4} alt="film" />
                <img src={filmAf1} alt="film" />
                <img src={filmAf2} alt="film" />
                <img src={filmAf3} alt="film" />
                <img src={filmAf3} alt="film" />
                <img src={filmAf4} alt="film" />
                <img src={filmAf1} alt="film" />
                <img src={filmAf2} alt="film" />
            </div>
        </div>
    );
  };


export default FilmList;