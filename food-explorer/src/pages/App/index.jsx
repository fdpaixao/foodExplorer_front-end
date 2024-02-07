import { Container } from "./styles.js"


import { Header } from "../../components/Header"
import { Banner } from "../../components/Banner"
import { Card } from "../../components/Card"

export function App(){
  return(
  <Container>

    {/* Header */}
    <Header />

    <Banner />
    
    {/* Main */}

    <Card/>
    <Card/>
    
  

    {/* Foods and Drinks cards
      Refeicoes
      Sobremesa
      Bebidas */}

    {/* Footer */}

  </Container>
  );
}