import PropTypes  from "prop-types";
// import { Box } from "components/Box";
import { FriendName} from "./FriendList.styled";
import { FriendListItem } from "./FriendListItem";

export const FriendList = ({ friends }) => {
  return (
        <FriendName  >
          {friends.map(friend => (
              <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
        />
      ))}
        </FriendName>
  );
};

    FriendList.propTypes = {
        friends: PropTypes.arrayOf (
        PropTypes.exact({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number
    }).isRequired
      ).isRequired
    };

    