class Calories{
    constructor(total_calories){
        this.total_calories = total_calories
    }

    renderCalories(num=0, user){
        num = !!num ? num:0
        this.total_calories = this.total_calories + parseInt(num)
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'calories': {
                    'total_calories': this.total_calories
                }
            })
        })
        user.calories.total_calories = this.total_calories
        return this.total_calories
    }
}