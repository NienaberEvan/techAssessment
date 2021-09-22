import React, {useState} from 'react'
import UserController from '../api/UserController'
import { SearchResults } from '../components/SearchResults'
import styles from './Search.module.css'

export const Search :React.FC = () => {
    const [userName, setUserName] = useState('')
    const [results, setResults] = useState<any[]>([])
    const [searched, setSearched] = useState<boolean>(false)
    const [loading, setLoading] =useState<boolean>(false)

    const getActivity = async () => {
        setLoading(true)
        UserController.fetchActivity(userName).then(resp => {
            setSearched(true)
            setResults(resp)
            setLoading(false)
        })
    }

    console.log({styles})

    // future plan: dropdown with selectable names when partial name is put in
    return (
        <div className={styles.main}>
            <p className={styles.title}>Search User Name</p>
            <input className={styles.searchBar} onChange={(e) => setUserName(e.target.value)} placeholder="Enter username" />
            <button className={styles.searchButton} onClick={() => getActivity()}>
                Search
            </button>
            {loading && <p>Loading...</p>}
            {(searched && results.length) &&
                <p className={styles.resultText}>Activity for user {userName}</p>}
            {(searched && !results.length) && 
                <p className={styles.resultText}>No activity found for user {userName}</p>
            }

            <SearchResults results={results} />
        </div>
    )
}