import Pagamentos from './formas-pagamento.png'
import Image from 'react-bootstrap/Image'


function Footer() {
    return(
        <footer className="border-top text-center py-5 container mt-3">
            <p className="text-danger font-weight-bold">Formas de pagamento:</p>
            <Image src={Pagamentos} alt="Formas de pagamentos" fluid />
            <p className="small">&copy; Recode Pro 2020</p>
        </footer>
    )
}
export default Footer