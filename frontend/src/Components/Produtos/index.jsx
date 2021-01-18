import { useState, useEffect} from 'react'
import { Row } from 'react-bootstrap'

import Produto from './Produto'

function Produtos() {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await fetch("http://localhost:5000/api/produtos")
            const dados = await request.json()
            setProdutos(dados)
        }
        fetchData()
    }, [])

    return(
        <Row>
            {produtos && produtos.map(item => <Produto key={item.id_produto} marca={item.marca} produto={item.produto} estilo={item.estilo} preco={item.preco} imagem={item.imagem} origem={item.origem} />)}
        </Row>
    )
}

export default Produtos
