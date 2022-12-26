import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from 'react'


//only places that connect front to back
export default function Data() {
    const [backendData, setBackendData] = useState(null)
    useEffect(() => {

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
