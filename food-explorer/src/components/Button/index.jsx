import { Container } from "./styles";

export function Button({ label, ...rest }) {
  return (
    <Container 
        type="button"
        {...rest}
    >
        {label}
    </Container>
  )
}