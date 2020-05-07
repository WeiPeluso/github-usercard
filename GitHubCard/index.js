/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/weipeluso')
  .then((data)=> {
    console.log(data);
  })
  .catch((error)=> {
    console.log(error);
  })
  .then(()=> {
    console.log('done');
  });


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const cards=document.querySelector('.cards')
axios.get('https://api.github.com/users/weipeluso')
  .then((info)=> {
    const myCard=createPerson({imgUrl:`${info.data.avatar_url}`,name:`${info.data.name}`,username:`${info.data.login}`,
    userLocation:`${info.data.location}`,githubAddress:`${info.data.html_url}`,followers:`${info.data.followers}`,
    following:`${info.data.following}`, bio:`${info.data.bio}`})
     cards.appendChild(myCard)
  })
  .catch((error)=> {
    console.log(error);
  })
  .then(()=> {
    console.log('done');
  });

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];

followersArray.forEach((member)=>{

  axios.get(`https://api.github.com/users/${member}`)
  .then((info)=> {
    const myCard=createPerson({imgUrl:`${info.data.avatar_url}`,name:`${info.data.name}`,username:`${info.data.login}`,
    userLocation:`${info.data.location}`,githubAddress:`${info.data.html_url}`,followers:`${info.data.followers}`,
    following:`${info.data.following}`, bio:`${info.data.bio}`})
     cards.appendChild(myCard)
  })
  .catch((error)=> {
    console.log(error);
  })
  .then(()=> {
    console.log('done');
  });
  
})


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function createPerson(information){

 const {imgUrl,name,username,userLocation,githubAddress,followers,following, bio}=information

  const card=document.createElement('div')
  const image=document.createElement('img')
  const cardInfo=document.createElement('div')
  const h3=document.createElement('h3')
  const p1UserName=document.createElement('p')
  const p2Location=document.createElement('p')
  const p3Profile=document.createElement('p')
  const link=document.createElement('a')
  const p4Followers=document.createElement('p')
  const p5Following=document.createElement('p')
  const p6Bio=document.createElement('p')

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  h3.classList.add('name')
  p1UserName.classList.add('username')

  card.appendChild(image)
  card.appendChild(cardInfo)

  cardInfo.appendChild(h3)
  cardInfo.appendChild(p1UserName)
  cardInfo.appendChild(p2Location)
  cardInfo.appendChild(p3Profile)
  cardInfo.appendChild(p4Followers)
  cardInfo.appendChild(p5Following)
  cardInfo.appendChild(p6Bio)

  image.src=imgUrl
  h3.textContent=name
  p1UserName.textContent=username
  p2Location.textContent=`Location: ${userLocation}`
  p3Profile.textContent=`Profile: `
  p3Profile.appendChild(link)
  link.href=githubAddress
  link.textContent=githubAddress
  p4Followers.textContent=`Followers: ${followers}`
  p5Following.textContent=`Followering: ${following}`
  p6Bio.textContent=`Bio: ${bio}`

  return card
}

console.log( createPerson({imgUrl:"",name:"",username:"",userLocation:"",githubAddress:"xx",followers:"",following:"", bio:""}))
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
