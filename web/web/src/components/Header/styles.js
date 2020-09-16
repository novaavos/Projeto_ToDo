import styled from  'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #6930C3;
    border-bottom: 5px solid #4EA8DE;
    outline: 0;
    display: flex;
`

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    img {
        width: 150px;
        height: 69px;
    }
`

export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
        background: none;
        border: none;
        cursor: pointer;
        outline: 0;
    }

    a, button {
        color: #fff;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

        &:hover {
            color: #4EA8DE;
        }
    }

    #notification {
        img {
            width: 32px;
            height: 36px;
        }

        span {
            background: #fff;
            color: #4EA8DE;
            padding: 3px 7px;
            border-radius: 50%;
            position: relative;
            top: -25px;
            right: 10px;
        }

        &:hover {
            opacity: 0.5;
        }
    }

    .dividir::after {
        content: "|";
        margin: 0 5px;
        color: #fff;
        opacity: .5;
    }
`