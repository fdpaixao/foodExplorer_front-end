import styled from "styled-components";

export const Container = styled.div`
    height: 462px;
    width: 304px;


    padding: 24px;

    border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    
`;

