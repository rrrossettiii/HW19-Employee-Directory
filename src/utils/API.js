import axios from "axios";

export default {
	fetchUsers: function () {
		return axios.get("https://randomuser.me/api/?results=30").then(res => {
			const users = res.data.results;
			console.log(res.data);
			return users.map(user => {
				return {
					name: user.name,
					dob: user.dob,
					image: user.picture.thumbnail,
					email: user.email,
					location: user.location
				};
			});
		});
	}
};
