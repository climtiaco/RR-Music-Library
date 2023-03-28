import { useEffect, useState } from 'react';
import { Gallery } from './components/Gallery.js';
import { SearchBar } from './components/SearchBar.js';

function App(){
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

    useEffect (() => {
        fetch(`https://itunes.apple.com/search?term=${search}`)
        .then(response => response.json())
        .then(({resultCount, results}) => {
            const successMessage = `Successfully fetched ${resultCount} result(s)!`;
            const errorMessage = 'Not found'
            setMessage(resultCount ? successMessage : errorMessage)
            setData(results)
            console.log(results)
        })
    }, [search])

    return (
        <div>
            <SearchBar setSearch={setSearch}/>
            {message}
            <Gallery data={data}/>
        </div>
    )
}

export default App;
