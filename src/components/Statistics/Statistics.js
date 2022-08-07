import PropTypes  from "prop-types";
import { Box } from "components/Box";
import {  StatsItem, Title } from "./Statistics.styled";

 export const Statistics = ({title, data}) => {
  return(
      
          <Box  as='section' bg='white' border='normal' borderRadius={5} boxShadow = 'shadows'>
       <Title>{title}</Title> 

            <Box display ='grid' gridTemplateColumns='3fr 3fr 3fr 3fr 3fr'>
         {data.map(stat => {
          const {label, percentage,id} = stat;
          return (
              <StatsItem key={id} >
                  <span>{label}</span>
                  <span>{percentage}</span>
              </StatsItem>
          );
         })}
            </Box>
      </Box>
  );
};

Statistics.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.exact ({
            label: PropTypes.string,
            percentage: PropTypes.number,
            id: PropTypes.string,
        }).isRequired
        
    ).isRequired
    
}




















// export const Statistics = ({title, data}) => (

//     <section class="statistics">
//     <h2 class="title">Upload stats</h2>
  
//     <ul class="stat-list">
//       <li class="item">
//         <span class="label">.docx</span>
//         <span class="percentage">12%</span>
//       </li>
//       <li class="item">
//         <span class="label">.mp3</span>
//         <span class="percentage">14%</span>
//       </li>
//       <li class="item">
//         <span class="label">.pdf</span>
//         <span class="percentage">41%</span>
//       </li>
//       <li class="item">
//         <span class="label">.mp4</span>
//         <span class="percentage">12%</span>
//       </li>
//     </ul>
//   </section>
// );


