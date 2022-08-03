import user from '../components/Profile/user.json';
import data from '../components/Statistics/data.json'
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

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
      {/* <Statistics stats={data} 
/> */}
    </div>
  );
  
};
