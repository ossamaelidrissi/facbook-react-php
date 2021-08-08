import React,{useState,useCallback,useEffect, createContext  } from 'react'
import axios from 'axios'

const DataContext = createContext();

const Provider = ({children}) => {

    const [posts, setPosts] = useState([]);

    async function promise(){
        const result = await axios.get('http://localhost:7882/Facebook-data/Controllers/API/post.php');
        const data = await result.data;

        setPosts(data);
    }

    useEffect(() => {
        promise();
    }, [posts]);
    return (

        <DataContext.Provider value = {{posts}}>
            {children}
        </DataContext.Provider>
)
}

export {DataContext , Provider  };