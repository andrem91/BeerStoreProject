import {ListGroup} from 'react-bootstrap'


function Marca(props) {
    const FiltrarCategoria = (evento) =>{
        const categoria = evento.target.id
        let elementos = document.getElementsByClassName('marca');
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
        <ListGroup.Item action onClick={FiltrarCategoria} id={props.marca.replace(/\s/g, '')} className="d-flex justify-content-between align-items-center">{props.marca}</ListGroup.Item>
    )
}

export default Marca