import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.div`
    width: 50%;
    margin-bottom: 70px;
`
export const TypeIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    .inative{
        opacity: .5;
    }

    button {
        border: none;
        background: none;
    }

    img {
        width: 50px;
        height: 50px;
        margin: 10px;
        cursor: pointer;

        &:hover{
            opacity: .7;
        }
    }
`
export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    span{
        color: #707070;
        margin: 11px 0 5px;
        font-size: 22px;
    }

    input {
        font-size: 16px;
        padding-top: 11px;
        padding-bottom: 11px;
        border: none;
        border-bottom: 1px solid #6930C3;
    }
` 

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 40px 0;

    span{
        color: #707070;
        margin: 11px 0;
        font-size: 22px;
    }

    textarea {
        font-size: 16px;
        border-bottom: 1px solid #6930C3;
    }
`

export const Options = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

    button {
        font-weight: bold;
        color: #4EA8DE;
        border: none;
        background: none;
        font-size: 18px;
        cursor: pointer;

        &:hover {
            opacity: .7;
        }
    }

    div {
        display: flex;
        align-items: center;
        color: #6930C3;
        font-weight: bold;
        font-size: 18px;
    }

`

export const Save = styled.div`
    width: 100%;
    margin-top: 30px;

    button{
        width: 100%;   
        background: #6930C3;
        color: #FFFFFF;
        border: none;
        font-size: 24px;
        font-weight: bold;
        padding: 20px;
        border-radius: 35px;
        cursor: pointer;

        &:hover{
            opacity: .7;
        }
    }

`
