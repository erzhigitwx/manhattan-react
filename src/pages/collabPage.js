import React from 'react';
import CollabBlock from '../components/collabBlocks/collabBlocks';
import CollabList from '../components/collabBlocks/collabList';
import '../styles/collab.scss';

const CollabPage = function () {
    return(
        <>
            <CollabBlock />
            <CollabList />
        </>
    );
  };


export default CollabPage;