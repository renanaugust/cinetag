import { Link } from "react-router-dom";
import logo from './logo.png';
import CabecalhoLink from "./CabecalhoLink";

function Cabecalho() {
    return (
        <header className={StyleSheet.cabecalho}>
        <Link to="./">
            <img src={logo} alt="Logo do cinetag"></img>
        </Link>
        <nav>
            <CabecalhoLink url="./">
                Home    
            </CabecalhoLink>
            <CabecalhoLink url="./Favoritos">
                Favoritos   
            </CabecalhoLink>     
        </nav>
        </header>
    )
}

export default Cabecalho