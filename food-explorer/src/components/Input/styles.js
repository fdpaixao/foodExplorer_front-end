import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    

    border-radius: 5px;

    > input {
        height: 48px;
        width: 100%;
        padding: 12px 14px;
        
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        background: transparent;
        border: 0;

        &:paceholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
        
        > svg {
            margin-left: 16px;
        }
    }

`