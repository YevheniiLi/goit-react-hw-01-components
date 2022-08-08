 import styled from "styled-components";
// import { style } from "styled-system";

export const Data =styled.div`
padding: ${p =>p.theme.space[4]}px;
text-align: center;
img {
    width: 130px;
    height: 130px;
    border-radius: ${p => p.theme.radii.h};
}
`;

export const Name = styled.p`
    margin-top: 15px;
    margin-bottom: 0px;
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.ml};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p =>p.theme.colors.black}
    
`;

export const Info = styled.p `
    margin-top: 10px;
    margin-bottom: 0px;
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.gray};
 `;



export const SubsFooter = styled.footer`
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 3fr 3fr 3fr;
    justify-content: space-evenly;
    color: ${p =>  p.theme.colors.black};
    margin-top: 10px;
            li {
                border-top: ${p =>  p.theme.borders.normal};
                border-top-color: ${p => p.theme.colors.white};
                border-radius:  ${p =>  p.theme.radii.m};
                background-color: ${p =>  p.theme.colors.sub};
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 10px;
                gap: 2px;
                & span:not(:last-child) {
                color: ${p => p.theme.colors.gray};
                font-size: ${p => p.theme.fontSizes.s};
                line-height: ${p =>  p.theme.lineHeights.body};
                }
                & span {
                color: ${p => p.theme.colors.black};
                font-size: ${p => p.theme.fontSizes.s};
                font-weight: ${p => p.theme.fontWeights.bold};
                line-height: ${p => p.theme.lineHeights.body};
                }
            }
            & li:not(:last-child) {
                border-right: ${p => p.theme.borders.normal};
                color: ${p => p.theme.colors.white};
            
            }`;

