import PropTypes from 'prop-types'
import { FriendData } from './FriendListItem.styled'

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendData 

        isOnline={isOnline}>
        <span></span>
        
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
        </FriendData>)

}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
}