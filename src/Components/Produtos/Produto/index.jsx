import { Col, Card, Button } from 'react-bootstrap'
import './style.css'

function Produto(props) {

    return(
        <Col lg={4} md={6} className="boxProduto mb-2">
            <Card className="h-100">
                <Card.Img variant="top" src={require(`./img/${props.imagem}`).default} alt="Imagem do Produto" className="imgProduto mx-auto" />
                <Card.Body>
                    <Card.Title>{props.produto}</Card.Title>
                    <Card.Subtitle>{props.marca}</Card.Subtitle>
                        <Card.Text className="mt-2">
                            Estilo: {props.estilo} <br />
                            País de origem: {props.origem} <br />
                            R$ {props.preco}
                        </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" size='lg' block>Detalhes</Button>
                </Card.Footer>
            </Card>
            <span id={props.estilo.replace(/\s/g, '')} className="estilo"></span>
            <span id={props.marca.replace(/\s/g, '')} className="marca"></span>
            <span id={props.origem.replace(/\s/g, '')} className="origem"></span>
        </Col>
    )

}

export default Produto