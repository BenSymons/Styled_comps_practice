import styled, {css} from "styled-components"

const Button = styled.button`
    background: lightblue;
    border-radius: 5px;

    ${props => props.big && css`
    font-size: 48pt;
    background: white;
    `}
`;

export default Button