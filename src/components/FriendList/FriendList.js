import PropTypes  from "prop-types";
import { Box } from "components/Box";

export const FriendList = ({avatar, name, isOnline}) => {
return (
        <Box >
        <span>{isOnline ? 'Онлайн' : 'Офлайн'}</span>
        
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
        </Box>

         
)};

export const FriendName = ({friends}) => {
  return (
  <Box>
  {friends.map(({id, avatar, name, isOnline}) =>(
  <FriendList 
  key={id} 
  avatar ={avatar}
  name = {name}
  isOnline = {isOnline}
  /> 
      ))} 
  </Box>
)}


// export const FriendName = ({friends}) => {
//   return (
//   <ul className="friend-list">
//   {friends.map(friend => (
//   <ul></ul>
//   ))}
//   </ul>
// );
//   };




    FriendName.propTypes = {
        friends: PropTypes.arrayOf (
        PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number
    }).isRequired
      ).isRequired
    };
