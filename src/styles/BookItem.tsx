import styled from "styled-components";

export const ListWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
`

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: calc((100% - 40px)/3);
    margin-bottom: 20px;
`

export const BookInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const BookTitle = styled.h2`
    text-decoration: underline;
    margin: 5px 0;
    cursor: pointer;
`