import { useEffect, useState } from 'react'
import './Frindes.css'
import Friend from './Friend'
export default function Frindes () {
    const [Friends, setFrindes] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFrindes(data))
    },[])

    return (
        <div className='box'>
            <h3>Frindes : {Friends.length}</h3>
            {
                Friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}