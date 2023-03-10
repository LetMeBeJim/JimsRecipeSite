import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from 'react'


//only places that connect front to back
export default function Data() {
    const [backendData, setBackendData] = useState(null)
    useEffect(() => {

    fetch("https://jimsiteserver.ue.r.appspot.com/api").then(
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

export function DataRecipe(x) {
    const [backendData, setBackendData] = useState(null)
    useEffect(() => {

    fetch("https://jimsiteserver.ue.r.appspot.com/api/"+x).then(
        response => response.json()
    )
    .then(
        data => {
            setBackendData(data)
        }
    )
    }, [x])
    return backendData;
}

export function DataTasks() {
    const [backendData, setBackendData] = useState(null)
    useEffect(() => {

    fetch("https://jimstasks.ue.r.appspot.com/api").then(
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
