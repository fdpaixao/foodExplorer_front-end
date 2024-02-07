import styled from "styled-components";

export const Container = styled.button`
    width: 216px;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    height: 56px;
    border: 0;
    padding: 12px 32px;
    margin : 24px 0;
    border-radius: 5px;

    font-weight: 500;
    font-size: 14px;

    &:disabled {
        opacity: 0.5;
    }
`;