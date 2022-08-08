import styled from "styled-components";




export const FriendMap = styled.ul`
padding: ${p => p.theme.space[2]}px;
gap: ${p => p.theme.space[4]}px;
display: flex;
flex-direction: column;

`;

export const FriendData = styled.li`
img {
    border-radius: ${p => p.theme.radii.sm};
  }
    width: 200px;
    padding: ${p => p.theme.space[3]}px;
    gap: ${p => p.theme.space[3]}px;
    display: flex;
    align-items: center;
    box-shadow: ${p => p.theme.shadows.shadow};
    background-color: ${p =>p.theme.colors.profilecolor};
    border-radius: ${p => p.theme.radii.none};
span {
    width: 12px;
    height: 12px;
    border-radius: ${p => p.theme.radii.h};
    background-color: ${p => {
      return p.isOnline 
       ?`${p.theme.colors.green}`
       :`${p.theme.colors.red}`;
    }};
   
  }
`;
