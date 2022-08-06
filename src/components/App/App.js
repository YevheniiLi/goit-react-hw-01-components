import user from '../Profile/user.json';
import data from '../Statistics/data.json';
import friends from '../FriendList/friends.json';
import transactions from '../TransactionHistory/transactions.json'
import  {ProfileName}  from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import { FriendName } from '../FriendList/FriendList'
import { Container } from './App.styled';



export const App = () => {
  return (
    <Container>
<ProfileName user={user} />
<Statistics title="Upload stats"data={data}/>
<FriendName friends ={friends}/>
<TransactionHistory items={transactions} />
    </Container>
  );
  
};
