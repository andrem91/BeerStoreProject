import Produtos from '../../Components/Produtos'
import Categorias from '../../Components/Categorias'

import {Row, Col} from 'react-bootstrap'

function PageProdutos() {
    return (
        <>
            <h2 className="border-bottom py-3">Produtos</h2>
            <Row>
                <Col lg={3} md={4}>
                    <h2>Filtrar Por: </h2>
                    <Categorias />
                </Col>
                <Col lg={9} md={8}>
                    <Produtos />
                </Col>
            </Row>
        </>
    )
}

export default PageProdutos