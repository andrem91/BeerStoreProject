  
export default function Clube(props){
    return(
       <>
        <td>{props.idpedidos}</td>
        <td>{props.nome_cliente}</td>
        <td>{props.endereco}</td>
        <td>{props.telefone}</td>
        <td>{props.nome_produto}</td>
        <td>{props.valor}</td>
        <td>{props.quantidade}</td>
        <td>{props.total}</td>
        </>
        
    )
  }