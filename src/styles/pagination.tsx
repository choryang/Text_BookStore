import styled from "styled-components";

export const StyledPagination = styled.div`
    ul {
        width: 50%;
        height: 50px;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;

        li {
            list-style: none;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            

            &:hover, &:active {
                background-color: #5d5d5d;
                a {
                    color: white;
                }
                
            }
            

            a {
                text-decoration: none;
                color: black;
            }
        }

    }
    
`