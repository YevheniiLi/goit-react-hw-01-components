import styled from "styled-components";

export const Tablet = styled.table`
  margin-top: ${p => `${p.theme.space[4]}px`}; 
 
  border-collapse: collapse;
  max-width: 860px;
  width: 100%;
  
  text-align: center;
  box-shadow: ${p => `${p.theme.shadows.shadow}`};
  border-radius: ${p => `${p.theme.radii.medium}`};
  & th {
    padding: ${p => `${p.theme.space[4]}px`} 0;
    text-transform: uppercase;
    font-weight: ${p => p.theme.fontWeights.medium};
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.tablecolor};
    border: ${p => p.theme.borders.normal};
    border-color:  ${p => p.theme.colors.black};
      
  }
  & td {
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.black};
    white-space: pre-wrap;
    padding: ${p => `${p.theme.space[4]}px`} 0;
    vertical-align: middle;
    border: ${p => p.theme.borders.normal};
     border-color: ${p => p.theme.colors.black};
  }
`;


