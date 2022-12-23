import "bootstrap/dist/css/bootstrap.min.css";
import React, {useEffect, useState} from 'react'

export default function Data() {
    const [backendData, setBackendData] = useState(null)
    useEffect(() => {
    //change /api to link in heroku
    fetch("/api").then(
        response => response.json()
    )
    .then(
        data => {
            setBackendData(data)
        }
    )
    }, [])
    return backendData;
}
