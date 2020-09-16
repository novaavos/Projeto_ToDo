import styled from  'styled-components';

export const Container = styled.div`
    width: 260px;
    height: 60px;
    background: ${props => props.active ? '#4EA8DE' : '#6930C3'};
    padding: 10px;
    cursor: pointer;
    outline: 0;

    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    img {
        width: 30px;
        height: 27px;
    }

    span  {
        color: #fff;
        font-weight: bold;
        align-self: flex-end;
        font-size: 18px;
    }

    &:hover {
        background: #4EA8DE;
    }
`