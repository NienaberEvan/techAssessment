import moment from "moment";
import React, {useState} from "react";
import {useHistory} from 'react-router-dom';
import styles from './SearchResults.module.css'

interface Props {
    results: any[]
}

export const SearchResults: React.FC<Props> = ({results}) => {
    const history = useHistory()

    if (!results.length) {
     return null           
    }

    return (
        <div className={styles.main}>
            {results.map((r, index) => (
                <button className={styles.button} onClick={() => history.push(r.id)} key={index}>
                    <p>Date: {moment(r.created_at).format('DD-MM-YYYY')} {' '}</p>
                    <p>Event Type: </p>
                    <p>{r.type}</p>
                </button>
            ))}
        </div>
    )
}