import {ListGroup} from 'react-bootstrap'


function Origem(props) {

    const FiltrarCategoria = (evento) =>{
        const categoria = evento.target.id
        let elementos = document.getElementsByClassName('origem');
        for (var i = 0; i < elementos.length; i++) {
          if (categoria === elementos[i].id || categoria === "todos"){
              elementos[i].parentNode.style = "display: flex";
          }
          else{
              elementos[i].parentNode.style = "display: none";
          }
      }
    }

    return (
        <ListGroup.Item action onClick={FiltrarCategoria} className="d-flex justify-content-between align-items-center" id={props.origem.replace(/\s/g, '')}>{props.origem}</ListGroup.Item>
    )
}

export default Origem