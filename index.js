document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded!')
  
    let users = []
    const usersURL = 'http://localhost:3000/users'
    const divDropDown = document.querySelector('.dropdown')
    const divUserInfo = document.querySelector('.userInfo')
    const selectTag = document.createElement('select')

    let opTitle = document.createElement('option')
    opTitle.innerText = "Select a User"
    opTitle.selected = true
    opTitle.disabled = true
    selectTag.append(opTitle)

    function fetchingUsers(){
        fetch(usersURL)
        .then(res => res.json())
        .then(obj => {
            // call renderUser function for each user
        })
    }

    function renderUser(user){
        // creating and appending options to the selectTag for each User
    }

    selectTag.addEventListener('change', (e) => {
        //find a user and Use userInfo class to show user Info inside 'user-info' div 
    })

    divDropDown.append(selectTag)
    fetchingUsers()
  
  })