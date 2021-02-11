import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Depoimento from '../../Components/Depoimento';


export default function Depoimentos() {

    const [cliente, setCliente] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");

    const [depoimentos, setDepoimentos] = useState([]); // chamar funcao get

    const cadastrarDepoimento = () => {
        Axios.post('http://localhost:5001/depoimentos/cadastrar', {
            cliente: cliente,
            email: email,
            telefone: telefone,
            mensagem: mensagem,
        });
    }
    useEffect(() => {
        async function fethData() {
            const url = "http://localhost:5001/depoimentos";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setDepoimentos(resultado);
        }
        fethData();
    }, []);

    return (
        <Container>
            <div className="col-lg-6 col-md-6 mx-auto">
                <Form>
                    <h4>Deixe seu depoimento</h4>
                    <Form.Group>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control type="text" id="cliente" name="cliente" onChange={(evento) => setCliente(evento.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" id="email" name="email" onChange={(evento) => setEmail(evento.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control type="text" id="telefone" name="telefone" onChange={(evento) => setTelefone(evento.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mensagem:</Form.Label>
                        <Form.Control as="textarea" rows="4" id="mensagem" name="mensagem" onChange={(evento) => setMensagem(evento.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={cadastrarDepoimento}>
                        Cadastrar
                    </Button>
                </Form>
            </div>
            <hr />
            <div className='py-4'>
                {depoimentos && depoimentos.map(depoimento => <Depoimento
                    key={depoimento._id}
                    cliente={depoimento.cliente}
                    email={depoimento.email}
                    telefone={depoimento.telefone}
                    mensagem={depoimento.mensagem}
                />)}
            </div>
        </Container>
    );
}