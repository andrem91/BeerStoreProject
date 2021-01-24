import { Card } from "react-bootstrap";

export default function Depoimento(props) {
  return (
    <Card className="mb-1">
      <Card.Body>
        <p>Nome: {props.cliente}</p>
        <p>Email: {props.email}</p>
        <p>Telefone: {props.telefone}</p>
        <p>Mensagem:<br />{props.mensagem}</p>
      </Card.Body>
    </Card>
  );
}