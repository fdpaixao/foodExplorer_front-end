import { Container } from "./styles"
import macaroon from "../../assets/macaroon.svg"

export function Banner(){
    return(
        <Container>
            <img src={macaroon} alt="" />
            <div className="teste">
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
        </Container>
    )
}