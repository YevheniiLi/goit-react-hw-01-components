
import PropTypes  from "prop-types";
// import { Box } from "components/Box";
import { FriendMap , FriendData} from "./FriendList.styled";

export const FriendList = ({avatar, name, isOnline}) => {
return (
        <FriendData isOnline={isOnline}>
        <span></span>
        
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
        </FriendData>

         
)};

export const FriendName = ({friends}) => {
  return (
  <FriendMap>
  {friends.map(({id, avatar, name, isOnline}) =>(
  <FriendList 
  key={id} 
  avatar ={avatar}
  name = {name}
  isOnline = {isOnline}
  /> 
      ))} 
  </FriendMap>
)}





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
