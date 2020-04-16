import React, {useState,useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';
import yelp from '../api/yelp';

export default useReasult = () => {
    const [results,
        setResult] = useState([]);

    const SearchAPI = async(searchResult) => {
        try
        {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchResult,
                    location: 'san jose'
                }
            })
            setResult(response.data.businesses)
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(()=>{
SearchAPI('pasta')
    },[])
    return [SearchAPI, results];

}
