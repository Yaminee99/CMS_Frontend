import { Container } from "react-bootstrap";

export function Header(props){
    return (
        <Container className="mt-2 text-center">
            <h1>{props.text}</h1>
        </Container>
    );
}