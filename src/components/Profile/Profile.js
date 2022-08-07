 import { Box } from "components/Box";
 import PropTypes  from "prop-types";
import { SubsFooter,Name, Info, Subs, DataSub , DataBase } from "./Profile.styled";
 

 export const Profile = ({
  username, tag, location, avatar, stats, followers, views, likes}) => {
  return (
    
      
    <Box bg='grey' display='grid' justifyItems='center'border='1px solid' borderRadius={5} >
      <img
        src={avatar}
        alt="avatar"
        width="150"
        height='150'
      />
          <Box display='inline-grid' justifyItems='center'>
            <Name>{username}</Name>
            <Info>@{tag}</Info>
            <Info>{location}</Info>
         </Box>
  
          <SubsFooter>
            <Subs>
              <DataSub>Followers</DataSub>
              <DataBase>{followers}</DataBase>
            </Subs>
            <Subs>
              <DataSub>Views</DataSub>
              <DataBase>{views}</DataBase>
            </Subs>
            <Subs>
              <DataSub>Likes</DataSub>
              <DataBase>{likes}</DataBase>
            </Subs>
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
