import axios from 'axios';
import React, { useEffect } from 'react';

const getData = (setCharacters) => {
    let data = [];
    axios.get('http://localhost:8001/tinder/cards')
        .then((response) => {
            setCharacters(response.data);
        });
}

export default getData;