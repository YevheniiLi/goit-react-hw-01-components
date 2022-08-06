 import { Box } from "components/Box";
 import PropTypes  from "prop-types";
 

 export const Profile = ({
  username, tag, location, avatar, stats, followers, views, likes}) => {
  return (
    
      
    <Box bg='grey'  alignItmes='center' border='1px solid'>
      <img
        src={avatar}
        alt="avatar"
        className="avatar"
        width="150"
      />
          <Box>
            <p>{username}</p>
            <p>@{tag}</p>
            <p>{location}</p>
         </Box>
  
          <Box as='ul'>
            <li>
              <span>Followers</span>
              <span>{followers}</span>
            </li>
            <li>
              <span>Views</span>
              <span>{views}</span>
            </li>
            <li>
              <span>Likes</span>
              <span>{likes}</span>
            </li>
          </Box>
    </Box>
  
  )};


  export const ProfileName =({user}) => {
    return (
  <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes}
/>
    )};




ProfileName.propTypes = {
  user: PropTypes.exact ({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,

    stats: PropTypes.exact ({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number, 
}).isRequired

  }).isRequired
}
