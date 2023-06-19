import { ContainerHeader, Title } from "./styles";
const Header = ({ title }) => {
    return (
        <ContainerHeader >
            <Title>{title}</Title>
        </ContainerHeader>
    );
}

export default Header;