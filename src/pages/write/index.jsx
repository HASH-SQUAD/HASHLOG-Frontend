import React from 'react';
import Header from '../../components/header';
import {useState} from 'react';


const Write = () => {
    const [userName, setUserName] = useState("강민지님");

    return (
        <>
        <Header userName={userName} />
      
        </>
    );
};

export default Write;