import { Container } from "./styles.js"
import Dish1 from "../../assets/dish1.svg"
import Heart from "../../assets/heart.svg"


export function Card(){
    return(
        <Container>
            <div className="card">
                <img src={Heart} alt="Heart" />

                <img src={Dish1} alt="Dish" />

                <h2>Torradas de Parma </h2>
                <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>

                <span>R$ 25,97</span>

                <span>- 01 +</span>

                <button>Incluir</button>

            </div>
        </Container>
    );
}