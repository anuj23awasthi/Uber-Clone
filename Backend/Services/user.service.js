const userModel = require('../models/user.model');

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
    try {
        if (!firstname || !email || !password) {
            throw new Error('Firstname, email, and password are required');
        }

        const user = new userModel({
            fullname: {
                firstname,
                lastname,
            },
            email,
            password,
        });

        await user.save(); // Save the user to the database
        return user;
    } catch (error) {
        throw new Error(`Error creating user: ${error.message}`);
    }
};
