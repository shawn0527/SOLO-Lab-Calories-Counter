class UserInfo {
    constructor() {
    }

    renderUserInfo(user) {
        let userDiv = document.createElement('div')
        let pTag = document.createElement('p')
        pTag.innerText = user.name
        let userImg = document.createElement('img')
        userImg.src = user.image
        let userH4 = document.createElement('h4')
        userH4.innerText = `Total Calories: ${user.calories.total_calories}`
        let userForm = document.createElement('form')
        let userFormInput = document.createElement('input')
        userFormInput.type = 'number' //by default it is a text
        userFormInput.placeholder = 'Enter Calories'
        let userFormSubmit = document.createElement('input')
        userFormSubmit.type = 'submit'
        userFormSubmit.value = 'Add Calories'
        let resetBtn = document.createElement('button')
        resetBtn.innerText = 'Reset Calories'
        let dltBtn = document.createElement('button')
        dltBtn.innerText = 'Delete User'
        userForm.append(userFormInput, userFormSubmit)
        userDiv.append(pTag, userImg, userH4, userForm, resetBtn, dltBtn)

        userForm.addEventListener('submit', (e) => {
            e.preventDefault()
            let userCalories = new Calories(user.calories.total_calories)
            let total_cal = userCalories.renderCalories(e.target[0].value, user)
            userH4.innerText = `Total Calories: ${total_cal}`
        })

        resetBtn.addEventListener('click', (e) => {
            let userCalories = new Calories(0)
            userCalories.renderCalories(0, user)
            userH4.innerText = "Total Calories: 0"
        })

        let users = []

        fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(data => {
            users = data
        })

        dltBtn.addEventListener('click', () => {
            fetch(`http://localhost:3000/users/${user.id}`, {
                method: 'DELETE',
            })
            let index = users.indexOf(user)
            users.splice(index, 1)
            location.reload()
        })
        return userDiv
    }
}