import React from 'react';
import ContentBlock from '../components/contentBlock/ContentBlock';
import HomeBlock from '../components/home-block/homeBlock';
import ManhattanComand from '../components/manhattanCommand/ManhattanComand';
import MenuFood from '../components/menu-food/menuFood';
import '../styles/home.scss';

const HomePage = function () {
    return(
        <>
            <HomeBlock />
            <MenuFood />
            <ContentBlock />
            <ManhattanComand /> 
        </>
    );
  };


export default HomePage;