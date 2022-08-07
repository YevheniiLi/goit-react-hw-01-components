import user from '../Profile/user.json';
import data from '../Statistics/data.json';
import friends from '../FriendList/friends.json';
import transactions from '../TransactionHistory/transactions.json'
import  {ProfileName}  from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import { FriendName } from '../FriendList/FriendList';
import { Box } from 'components/Box';




export const App = () => {
  return (
    <Box as='main' display='flex'
    alignItems='flex-start'
    flexWrap='wrap'
    justifyContent='space=around'>
<ProfileName user={user} />
<Statistics title="Upload stats"data={data}/>
<FriendName friends ={friends}/>
<TransactionHistory items={transactions} />
    </Box>
  );
  
};
