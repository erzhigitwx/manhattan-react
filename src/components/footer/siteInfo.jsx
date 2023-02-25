import React from "react";

const SiteInfo = function () {
  return (
    <div className="site-info">
      <p className="site-info__title">Адрес</p>
      <p className="site-info__text">Набережная реки Фонтанки, 90 (вход в арке с белыми колоннами)</p>
      <p className="site-info__title">телефон</p>
      <p className="site-info__text">+7 (812) 713-1945</p>
      <p className="site-info__title">режим работы</p>
      <p className="site-info__text">Ежедневно с 12:00 до 06:00</p>

      <hr className="site-info__line"/>

      <p className="site-info__title">директор</p>
      <p className="site-info__text">Лидия Эмильевна, +7(921) 963-55-50</p>
      <p className="site-info__title">арт-директор</p>
      <p className="site-info__text">Илиния Ионашко, +7(981) 989-43-30</p>
    </div>
  );
};

export default SiteInfo;
