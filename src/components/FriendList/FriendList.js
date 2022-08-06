import PropTypes  from "prop-types";

export const FriendList = ({avatar, name, isOnline}) => {
return (
        <li className="item">
        <span className="status">{isOnline ? 'Онлайн' : 'Офлайн'}</span>
        
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
        </li>

         
)};

export const FriendName = ({friends}) => {
  return (
  <ul className="friend-list">
  {friends.map(({id, avatar, name, isOnline}) =>(
  <FriendList 
  key={id} 
  avatar ={avatar}
  name = {name}
  isOnline = {isOnline}
  /> 
      ))} 
  </ul>
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
