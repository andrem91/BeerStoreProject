import { lazy, Suspense } from 'react';
import { Row, Col } from 'react-bootstrap';
const Produtos = lazy(() => import('../../Components/Produtos'));
const Categorias = lazy(() => import('../../Components/Categorias'));

function PageProdutos() {
    return (
        <>
            <h2 className="border-bottom py-3">Produtos</h2>
            <Row>
                <Col lg={3} md={4}>
                    <h2>Filtrar Por: </h2>
                    <Suspense fallback={<p>Carregando...</p>}>
                        <Categorias />
                    </Suspense>
                </Col>
                <Col lg={9} md={8}>
                    <Suspense fallback={<p>Carregando...</p>}>
                        <Produtos />
                    </Suspense>
                </Col>
            </Row>
        </>
    );
};

export default PageProdutos;