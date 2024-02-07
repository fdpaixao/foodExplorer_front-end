import { Container, Logo } from "./styles"
import { Button } from "../Button"
import { Input } from "../Input"
import { Logout } from "./styles"
import { PiSignOut} from "react-icons/pi";
import { FiSearch } from "react-icons/fi";



export function Header() {
  return (
      <Container>
        <Logo>
          <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C"/>
          </svg>
          <span>food explorer</span>
        </Logo>
        
        <Input placeholder="Busque por pratos ou ingredientes" icon={FiSearch}/>
        
        <Button label="Pedidos (0)" />

        <Logout>
          <PiSignOut />
        </Logout>

      </Container>
    );
}
