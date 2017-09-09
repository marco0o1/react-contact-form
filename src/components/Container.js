// import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components'; 

const Container = styled.div`
    margin-left: auto; 
    margin-right: auto;
    max-width: 1170px;  
    padding: 1em;

    ${props => props.wrapper && css`
        box-shadow: 0 0 20px 0 rgba(184, 22, 31, 0.3);
    `}
`; 

export default Container; 