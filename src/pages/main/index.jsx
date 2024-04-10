import React from 'react';
import Header from '../../components/header/';
import beaner from '../../assets/InstaSplitPoster.jpg';

const Main = () => {
    return (
        <div>
            <Header />
            <img src={beaner} alt="Beaner" style={{ width: '100%', height: 'auto' }} />
        </div>
    );
};

export default Main;
