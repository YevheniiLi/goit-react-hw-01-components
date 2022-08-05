import user from '../components/Profile/user.json';
import data from '../components/Statistics/data.json';
import friends from '../components/FriendList/friends.json';
import transactions from '../components/TransactionHistory/transactions.json'
import  {ProfileName}  from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { FriendName } from './FriendList/FriendList'



export const App = () => {
  return (
    <div>
<ProfileName user={user} />
<Statistics title="Upload stats"data={data}/>
<FriendName friends ={friends}/>
<TransactionHistory items={transactions} />
    </div>
  );
  
};
