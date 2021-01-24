import Estilo from './Estilo'
import { useState, useEffect} from 'react'

function Estilos() {

    const [estilos, setEstilos] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await fetch("http://localhost:5000/estilos")
            const dados = await request.json()
            setEstilos(dados)
        }
        fetchData()
    }, [])

    return(
            <>
            {estilos && estilos.map(item => <Estilo key={item.id_estilo} estilo={item.estilo} />)}
            </>
    )
}
export default Estilos