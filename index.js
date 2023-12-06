const SearchInput = document.querySelector("[Search-input]");
const SearchForm = document.querySelector("[SearchForm]");
const ProfileName = document.querySelector("[Profile-name]");
const ProfileUrl = document.querySelector("[Profile-url]");
const ProfileBio = document.querySelector("[Profile-bio]");
const ProfileIcon = document.querySelector("[Profile-icon]");
const ProfileJoinedDate = document.querySelector("[Profile-joined-date]");
const RepoNo = document.querySelector("[Repo-no]");
const FollowersNo = document.querySelector("[Followers-no]");
const FollowingNo = document.querySelector("[Following-no]");
const location = document.querySelector("[Location]");
const biolink = document.querySelector("[biolink]");
const Twitterlink = document.querySelector("[Twitterlink]");
const Office = document.querySelector("[Office]");

const userName = "bhavesh-0909";
fetchUserDetails(userName);

SearchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let userName = SearchInput.value;
    if(SearchInput.value !== ""){
        fetchUserDetails(userName);
    }
    else{
        alert("enter the user name")
    }
})

async function fetchUserDetails(userName){

    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    rendorInfo(data);

}

function rendorInfo(data){
    ProfileName.innerText = `${data?.name}`;
    ProfileUrl.href = `${data?.html_url}`;
    ProfileUrl.innerText = `@${data?.login}`;
    ProfileIcon.src = `${data?.avatar_url}`;
    ProfileJoinedDate.innerText = `Joined ${data?.created_at}`;
    RepoNo.innerText = `${data?.public_repos}`;
    FollowersNo.innerText = `${data?.followers}`;
    FollowingNo.innerText = `${data?.following}`;
    bioInfo(data);
    locationInfo(data);
    Biolink(data);
    TwitterlinkInfo(data);
    officeInfo(data);
}



function bioInfo(data){

    if(data?.bio){
        ProfileBio.innerText = `${data?.bio}`;
    }
    else{
        ProfileBio.innerText = "no bio";
    }

}

function locationInfo(data){

    if(data?.location){
        location.innerText = `${data?.location}`;
    }
    else{
        location.innerText = "No Location";        
    }

}

function TwitterlinkInfo(data){

    if(data?.twitter_username){
        location.innerText = `${data?.twitter_username}`;
    }
    else{
        location.innerText = "No TwitterlinkInfo";        
    }

}

function officeInfo(data){

    if(data?.company){
        location.innerText = `${data?.company}`;
    }
    else{
        location.innerText = "No company";        
    }
}
function Biolink(data){

    if(data?.blog){
        location.innerText = `${data?.blog}`;
    }
    else{
        location.innerText = "No blog";        
    }
}


