import styled from  'styled-components';

export const Container = styled.div`
    width: 335px;
    height: 175px;
    box-shadow: -1px 1px 20px -3px rgba(0,0,0,0.75);
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 20px;
    cursor: pointer;
    transition: all .2s ease;

    &:hover{
        opacity: .5;
    }
`

export const TopCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const BottomCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    strong {
        color: #4EA8DE;
        font-weight: bold;
    }

    span{
        color: #707070;
    }
`