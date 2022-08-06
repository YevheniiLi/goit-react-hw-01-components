import PropTypes  from "prop-types";
import { Box } from "components/Box";

 export const Statistics = ({title, data}) => {
  return(
      
          <Box as='section'>
          <h2>{title}</h2>

            <Box>
         {data.map(stat => {
          const {label, percentage,id} = stat;
          return (
              <Box key={id} >
                  <span>{label}</span>
                  <span>{percentage}</span>
              </Box>
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


