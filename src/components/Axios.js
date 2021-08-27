import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function Axios() {
    const [id, setid] = useState(1);
    const [data, setdata] = useState({});
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((dat) => {
            console.log(dat.data.body);
            setdata(dat)
        }).catch(err=>{console.log("err")})
    
    }, [id]);
    return (
        <div>
            <input type="text" value={id} onChange={(e) => { setid(e.target.value) }} />
            <p>{data.data.body}</p>
            
        </div>
    )
}
