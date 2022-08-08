 import { Box } from "components/Box";
 import PropTypes  from "prop-types";
import { Data, Name, Info, SubsFooter} from "./Profile.styled";
 

 export const Profile = ({
  username, tag, location, avatar, stats, followers, views, likes}) => {
  return (
    
      
    <Box  bg='profilecolor' display='grid' justifyItems='center' border='1px solid' borderRadius='4px' borderColor='lamp' >
        <Data> 
                <img src={avatar} alt="avatar" width="130"/>
                <Name>{username}</Name>
                <Info>@{tag}</Info>
                <Info>{location}</Info>
        </Data>
         
  
          <SubsFooter>
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
          </SubsFooter>
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
