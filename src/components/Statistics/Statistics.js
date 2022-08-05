import PropTypes  from "prop-types";

 export const Statistics = ({title, data}) => {
  return(
      
          <section className="statistics">
  {title !== undefined && <h2 className="title">{title}</h2>}

<ul>
         {data.map(stat => {
          const {label, percentage,id} = stat;
          return (
              <li key={id} className='item'>
                  <span className="label">{label}</span>
                  <span className="percentage">{percentage}</span>
              </li>
          );
         })}
      </ul>
      </section>
  );
};

Statistics.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape ({
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


