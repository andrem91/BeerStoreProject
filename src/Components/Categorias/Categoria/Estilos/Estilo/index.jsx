import {ListGroup} from 'react-bootstrap'

// .replace(/\s/g, '')


function Estilo(props) {
  
    const FiltrarCategoria = (evento) =>{
        const categoria = evento.target.id
        let elementos = document.getElementsByClassName('estilo');
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
        <ListGroup.Item action onClick={FiltrarCategoria} id={props.estilo.replace(/\s/g, '')} className="d-flex justify-content-between align-items-center">{props.estilo}</ListGroup.Item>
    )
}

export default Estilo
