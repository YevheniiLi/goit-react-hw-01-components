import PropTypes  from "prop-types";

export const FriendList = ({avatar, name, isOnline}) => {
return (
            <li class="item">
        <span class="status">{isOnline ? 'Онлайн' : 'Офлайн'}</span>
        
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name">{name}</p>
        </li>
)};






FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
