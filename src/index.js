document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded!')
    let users = []
    const usersURL = 'http://localhost:3000/users'
    const divDropDown = document.querySelector('.dropdown')
    const divUserInfo = document.querySelector('.userInfo')
    const selectTag = document.createElement('select')
    const divNewUserBox = document.createElement('div')
    const inputName = document.createElement('input')
    const inputImg = document.createElement('input')
    const inputNew = document.createElement('input')
    const newUserForm = document.createElement('form')
    
    newUserForm.id = 'new-user'
    newUserForm.append(inputName, inputImg, inputNew)
    inputName.type = 'text'
    inputImg.type = 'text'
    inputNew.type = 'submit'
    inputNew.value = 'Create a new user'
    inputName.placeholder = 'Name'
    inputImg.placeholder = 'Image url'

    divNewUserBox.append(newUserForm)

    let opTitle = document.createElement('option')
    opTitle.innerText = "Select a User"
    opTitle.selected = true
    opTitle.disabled = true
    selectTag.append(opTitle)

    function fetchingUsers(){
        //request dara from server and call renderUser function for each user
        fetch(usersURL)
        .then(response => response.json())
        .then(data => {
            users = data
            users.forEach(user => {
                renderUser(user)
            })
        })
    }

    function renderUser(user){
        // creating and appending options to the selectTag for each User
        let opt = document.createElement('option')
        opt.innerText = user.name
        opt.value = user.id //e.target.selectedIndex
        selectTag.append(opt)
    }

    selectTag.addEventListener('change', (e) => {
        //find a user and Use userInfo class to show user Info inside 'user-info' div
        e.preventDefault()
        fetch(usersURL)
        .then(response => response.json())
        .then(data => {
            users = data
            })
        let user = users.find(user => user.id == e.target.value)
        let userInfo = new UserInfo()
        let divInfo = userInfo.renderUserInfo(user)
        divUserInfo.innerHTML = ''
        divUserInfo.append(divInfo)
    })

    newUserForm.addEventListener('submit', (e) => {
        e.preventDefault()
        fetch(usersURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "name": e.target[0].value,
                "image": e.target[1].value,
                "calories": {
                    "total_calories": 0
                }
            })
        })
        .then(resp => resp.json())
        .then(data => {
            users.push(data)
            renderUser(data)
        })
        location.reload()
    })

    divDropDown.append(selectTag)
    document.body.append(divNewUserBox)
    fetchingUsers()  
})