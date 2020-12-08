import Marca from './Marca'
import { useState, useEffect} from 'react'


function Marcas() {

    const [marcas, setMarcas] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await fetch("http://localhost/beer-store/src/database/api/marca.php")
            const dados = await request.json()
            setMarcas(dados)
        }
        fetchData()
    }, [])

    return (
        <>
            {marcas && marcas.map(item => <Marca key={item.id_marca} marca={item.marca} />)}
        </>
    )
}

export default Marcas
