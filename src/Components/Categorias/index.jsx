import Categoria from './Categoria'
import { ListGroup } from 'react-bootstrap'

    function Categorias() {
        const FiltrarCategoria = (evento) =>{
            const categoria = evento.target.id
            let elementos = document.getElementsByClassName('boxProduto');
            for (var i = 0; i < elementos.length; i++) {
              if (categoria === "todos"){
                  elementos[i].style = "display: flex";
              }
              else{
                  elementos[i].style = "display: none";
              }
          }
        }


        
        return(
            <aside>
                <ListGroup>
                    <ListGroup.Item action onClick={FiltrarCategoria} className="d-flex justify-content-between align-items-center" id="todos">
                        Todos os Produtos
                    </ListGroup.Item>
                </ListGroup>
                <Categoria />
            </aside>

        )
    }


export default Categorias