const User = require("./userTable");

//create
exports.addUser = async (userObject) => {
    try {
        await User.create(userObject);
    } catch (error) {
        console.log(error);
    }
}

//read
exports.listUsers = async () => {
    try {
        return await User.findAll();
    } catch (error) {
        console.log(error);
    }
}

//update
exports.updateUser = async (yargsObject, updateUserObject) => {
    try {
        await User.update({firstName: updateUserObject.newFirstName, lastName: updateUserObject.newLastName, email: updateUserObject.newEmail}, {
            where: {
              email: yargsObject.email
            }
          });
          console.log("User successfully updated");
    } catch (error) {
        console.log(error);
    }
}

//delete
exports.deleteUser = async (yargsObject) => {
    try {
        await User.destroy({
            where: {
              email: yargsObject.email
            }
          });
          console.log("User successfully deleted");
    } catch (error) {
        console.log(error);
    }
}