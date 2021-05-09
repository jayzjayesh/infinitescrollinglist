import {useEffect , useState} from 'react';
import axios from "axios"

//this is custom hook to fetch users from the random user api

//whenever limit of users iss reached page number is updated and more users are called

export default function useUserSearch(pageNumber,count){

    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [users,setUsers] = useState([]);
    const [hasMore,setHasMore] = useState(false);
    const [countUsers,setCountUsers] = useState(count);

    
    useEffect(() => {
        setLoading(true);
        setError(false);
        let cancel;


                axios({
                    method : 'GET',
                    url : 'https://randomuser.me/api/'
                    //  params : {q : query, page : pageNumber}
                    //cancelToken : new axios.CancelToken(c => cancel = c)
                    
                }).then(res => {
                    setUsers(prevUsers => {
                        return [...new Set([...prevUsers , ...res.data.results])]
                    })
                    setHasMore(res.data.results.length > 0);
                    setLoading(false);
                    console.log(res.data.results[0].name.first);
                }).catch(e => {
                    if(axios.isCancel(e)) return
                    setError(true)
                })
    
                setCountUsers(prevCount => prevCount +1);
            

            
    }, [pageNumber]);
    
    
    return {loading,error,users,hasMore,countUsers}
}