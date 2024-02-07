import styled from "styled-components"


export const Container = styled.header`
    grid-area: header;

    height: 104px;
    width: 100%;

    display: flex;
    padding: 24px 123px;
    align-items: center;
    gap: 32px;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    > svg {
        width: 30px;
        height: 30px;
    }

    >span {
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`;

export const Logout = styled.button`
    
    border: 0;
    background: none;

    >svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 32px;

        display: flex;
    }

   
`
