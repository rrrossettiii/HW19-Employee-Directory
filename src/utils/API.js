import axios from "axios";

export default {
	fetchEmployees: function () {
		return axios.get("https://randomuser.me/api/?results=30").then(res => {
			const users = res.data.results;
			console.log(res.data);
			return users.map(user => {
				return {
					name: user.name.first + " " + user.name.last,
					username: user.login.username,
					age: user.dob.age,
					image: user.picture.large,
					email: user.email,
					phone: user.cell,
					location: user.location.state + ", " + user.location.country
				};
			});
		});
	}
};
