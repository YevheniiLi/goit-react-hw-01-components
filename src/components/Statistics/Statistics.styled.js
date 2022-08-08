import styled from "styled-components";

export const Title = styled.h2 `
text-align: center;
margin: 0;
color: ${p => p.theme.colors.gray};
font-weight: ${p => p.theme.fontWeights.medium};
font-size: ${p => p.theme.fontSizes.ml};
line-height: ${p => p.theme.lineHeights.body};
padding: ${p => p.theme.space[5]}px;
text-transform: uppercase;
`;



export const StatsItem = styled.li`

  padding: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[3]}px;
  gap: ${p => p.theme.space[3]}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: ${p => {
    const item = p.children[0].props.children;
    switch (item) {
      case '.docx':
        return `${p.theme.colors.lamp}`;
      case '.pdf':
        return `${p.theme.colors.lightblue}`;
      case '.mp3':
        return `${p.theme.colors.yellow}`;
      case '.psd':
        return `${p.theme.colors.purple}`;
      default:
        return `${p.theme.colors.lightblue}`;
    }
  }};
  & span {
    color: ${p => p.theme.colors.white};
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.body};
    font-weight: ${p => p.theme.fontWeights.medium};
  }
  & span:not(:last-child) {
    color: ${p => p.theme.colors.white};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.lineHeights.body};
    font-weight: ${p => p.theme.fontWeights.normal};
  }
`;