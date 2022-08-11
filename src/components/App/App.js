import user from '../Profile/user.json';
import data from '../Statistics/data.json';
import friends from '../FriendList/friends.json';
import transactions from '../TransactionHistory/transactions.json'
import  {Profile}  from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import { FriendList } from '../FriendList/FriendList';
import { Box } from 'components/Box';




export const App = () => {
  return (
    <Box as='main'display='flex'
    alignItems='center'
    flexWrap='wrap'
    justifyContent='space-evenly'>
<Profile user={user} 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />

<Statistics title="Upload stats"data={data}/>
<FriendList friends={friends}/>
<TransactionHistory items={transactions} />
    </Box>
  );
  
};
