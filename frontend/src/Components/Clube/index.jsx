
export default function Clube(props) {
  return (
    <tr>
      <td>{props.nome_cliente}</td>
      <td>{props.endereco}</td>
      <td>{props.telefone}</td>
      <td>{props.nome_produto}</td>
      <td>{props.valor_unit}</td>
      <td>{props.quantidade}</td>
      <td>{props.valor_final}</td>
    </tr>
  )
}