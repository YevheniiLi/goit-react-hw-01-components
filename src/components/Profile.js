export const Profile = ({profile: { username, tag, location, avatar, stats, folowers, views, likes }}) => {
return (
<div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <p class={username}>Petra Marica</p>
    <p class={tag}>@pmarica</p>
    <p class={location}>Salvador, Brasil</p>
  </div>

  <ul class={stats}>
    <li>
      <span class={folowers}>Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class={views}>Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class={likes}>Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
);
}


// {
//     "username": "Jacques Gluke",
//     "tag": "jgluke",
//     "location": "Ocho Rios, Jamaica",
//     "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//     "stats": {
//       "followers": 5603,
//       "views": 4827,
//       "likes": 1308
//     }
//   }