import User from "../models/userModel.js";

class UserController {
  async registration(req, res) {
    try {
						const {username, password} = req.body;
		    const users = await User.find();
		    const existedUser = users.find((user) => (
				    username === user.username
		    ));

		    if(existedUser) {
				    return res.status(400).json({message: 'User already exist'});
		    }

		    const user = new User(req.body);
		    await user.save();

		    res.send(user);
    }
    catch(err) {
      return res.status(400).json({message: 'Registration error'});
    }
  }

		async login(req, res) {
				try {
						const {username, password} = req.body;
						const users = await User.find();
						const existedUser = users.find((user) => (
								username === user.username
						));

						if(!existedUser) {
								return res.status(400).json({message: 'User not found'});
						}

						const isCorrectPassword = existedUser.password === password;

						if(!isCorrectPassword) {
								return res.status(400).json({message: 'Invalid password'});
						}

						res.send(existedUser);
				}
				catch(err) {
						return res.status(400).json({message: 'Login error'});
				}
		}

		async getAllUsers(req, res) {
				try {
						const users = await User.find();
						res.send(users);
				}
				catch(err) {
						return res.status(400).json({message: 'Users getting error'});
				}
		}
}

export default new UserController();
