import user from '../components/Profile/user.json';
import data from '../components/Statistics/data.json';
import friends from '../components/FriendList/friends.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';


export const App = () => {
  return (
    <div>
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
          <Statistics title="Upload stats" stats={data} />
          <Statistics 
          stats={data}
          key={data.id}
          label={data.label}
          percentage={data.percentage} 
    />

          {/* <FriendList friends ={friends}
 />; */}

            
        <ul class="friend-list">
            {friends.map((friend) =>(
            <FriendList 
            key={friend.id} 
            friend ={friend}
            avatar ={friend.avatar}
            name = {friend.name}
            isOnline = {friend.isOnline}
            /> 
                ))} 
       </ul>
         


    </div>
  );
  
};
