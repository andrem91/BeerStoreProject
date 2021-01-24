import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Form, Button, Table, Container } from 'react-bootstrap';
import Pedido from '../../Components/Clube';


export default function PagePedidos() {

    const [nome_cliente, setNome_cliente] = useState("");
    const [endereco, setEndereco] = useState("");
    const [telefone, setTelefone] = useState("");
    const [nome_produto, setNome_produto] = useState("");
    const [valor_unit, setValor_unit] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [valor_final, setValor_final] = useState("");

    const [pedidos, setPedidos] = useState([]); // chamar funcao get

    const cadastrarPedido = () => {
        Axios.post('http://localhost:5000/clube/cadastrar', {
            nome_cliente: nome_cliente,
            endereco: endereco,
            telefone: telefone,
            nome_produto: nome_produto,
            valor_unit: valor_unit,
            quantidade: quantidade,
            valor_final: valor_final
        });
    }

    useEffect(() => {
        async function fethData() {
            const url = "http://localhost:5000/clube";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setPedidos(resultado);
        }
        fethData();
    }, []);

    return (
        <Container>
            <div className="col-lg-6 col-md-6 mx-auto">
                <Form>
                    <h4>Fazer Pedidos</h4>
                    <Form.Group>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control type="text" id="nome_cliente" name="nome_cliente" onChange={(evento) => setNome_cliente(evento.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Endereço:</Form.Label>
                        <Form.Control type="text" id="endereco" name="endereco" onChange={(evento) => setEndereco(evento.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control type="text" id="telefone" name="telefone" onChange={(evento) => setTelefone(evento.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Produto:</Form.Label>
                        <Form.Control type="text" id="nome_produto" name="nome_produto" onChange={(evento) => setNome_produto(evento.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Valor Unitário:</Form.Label>
                        <Form.Control type="text" id="valor_unit" name="valor_unit" onChange={(evento) => setValor_unit(evento.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control type="text" id="quantidade" name="quantidade" onChange={(evento) => setQuantidade(evento.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Preço Final:</Form.Label>
                        <Form.Control type="text" id="valor_final" name="valor_final" onChange={(evento) => setValor_final(evento.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={cadastrarPedido}>
                        Cadastrar
                    </Button>
                </Form>
            </div>

            <div className='py-4'>
                <Table>
                    <thead>
                        <tr>
                            <th>nome</th>
                            <th>endereco</th>
                            <th>telefone</th>
                            <th>produto</th>
                            <th>valor</th>
                            <th>quantidade</th>
                            <th>total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pedidos && pedidos.map(pedido => <Pedido
                            key={pedido.idpedidos}
                            id={pedido.idpedidos}
                            nome_cliente={pedido.nome_cliente}
                            endereco={pedido.endereco}
                            telefone={pedido.telefone}
                            nome_produto={pedido.nome_produto}
                            valor_unit={pedido.valor_unit}
                            quantidade={pedido.quantidade}
                            valor_final={pedido.valor_final}
                        />)}
                    </tbody>
                </Table>
            </div>

        </Container>
    );
}