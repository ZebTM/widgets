import React, {useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');

    useEffect(() => {
        const search = async () => {
            await axios.get('');
        };

        search()
    }, [term]);

    return (
        <div>
            <div className="ui form">
                <div className="field">

                </div>
            </div>
        </div>
    )
}