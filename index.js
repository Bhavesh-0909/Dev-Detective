const SearchInput = document.querySelector("[Search-input]");
const SearchForm = document.querySelector("[SearchForm]");
const userName = "bhavesh-0909";

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
    const ProfileName = document.querySelector("[Profile-name]");
    const ProfileUrl = document.querySelector("[Profile-url]");
    const ProfileBio = document.querySelector("[Profile-url]");
}


