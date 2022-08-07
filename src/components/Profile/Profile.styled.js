 import styled from "styled-components";
// import { style } from "styled-system";


export const Name = styled.p`
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.headers};
`;

export const Info = styled.p `
    display: flex;
    justify-content: center;
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.normal};
 `;

export const SubsFooter = styled.footer`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 80px;
    background-color: ${p => p.theme.colors.primary};

    `;



export const Subs = styled.li`
     display: grid;
     align-items: center;
     justify-content: center;
     /* height: 100%; */
     padding: ${p => p.theme.space[3]}px;
     /* border-radius: ${p => p.theme.radii.sm}; */
     border: ${p => p.theme.borders.normal} ;
     
     
`;


export const DataSub = styled.span`
display: flex;
justify-content: center;
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.s};
line-height: ${p => p.theme.lineHeights.body};
`



export const DataBase = styled.span`
    display: inline-grid;
    justify-content: center;
    color: ${p => p.theme.colors.black} ;
    font-weight: ${p => p.theme.fontWeights.bold};
`;