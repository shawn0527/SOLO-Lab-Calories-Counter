# JavaScript SOLO Challenge

### Demo
![Demo](demo.gif)


### Deliverables

1. Show all user's name in the dropdown menu by **requesting** data from user
2. Use the `UserInfo` class, and use it to **render** each user's data inside 'user-info' div when you select a user from drop down menu. Find HTML format below:

```html
 <div class="userInfo">
	<div>
		<p>USER's NAME</p>
		<img src=User's image>
		<h4>Total Calories: User's total calories</h4>
		<form>
                    <input type="text" placeholder="Enter Calories">
                    <input type="submit" value="Add Calories">
		</form>
		<button>Reset Calories</button>
	</div>
</div>
```
3. Use `Calories` class to add calories to their total calories (when a user clicks on the submit button) 
4. Persist total calories's value in the db.json
5. When a user clicks on a `Reset Calories` button ,set total calories to `0`


### BONUS

* User should be able to create a new user with initially `0` total calories