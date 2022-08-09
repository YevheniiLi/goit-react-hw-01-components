import PropTypes  from "prop-types";
// import { Box } from "components/Box";
import { FriendData, FriendName} from "./FriendList.styled";

export const FriendList = ({ friends }) => {
  return (
      <FriendName  >
          {friends.map(({ avatar, name, isOnline, id }) => {
              return (
                <FriendData 
                key={id}
                isOnline={isOnline}>
                <span></span>
                
                <img src={avatar} alt="User avatar" width="48" />
                <p>{name}</p>
                </FriendData>)
              })
          }
      </FriendName>
  );
};

    FriendList.propTypes = {
        friends: PropTypes.arrayOf (
        PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number
    }).isRequired
      ).isRequired
    };
