const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movie/functions");
const { addUser, listUsers, updateUser, deleteUser } = require("./users/userFunctions");

const app = async (yargsObject) => {
    try { 
        await sequelize.sync()
        //movie
        if (yargsObject.create) {
            await addMovie ({title: yargsObject.title, actor: yargsObject.actor})
            console.log(await listMovies());
        } else if (yargsObject.read) {
            console.log(await listMovies());
        } else if (yargsObject.update) {
            await updateMovie({title: yargsObject.title, actor: yargsObject.actor}, {title: yargsObject.newTitle, actor: yargsObject.newActor});
            console.log(await listMovies());
        } else if (yargsObject.delete) {
            await deleteMovie (yargsObject)
            console.log(await listMovies());
        } 
        //user
        else if (yargsObject.create) {
            await addUser ({firstName: yargsObject.firstName, lastName: yargsObject.lastName, email: yargsObject.email})
            console.log(await listUsers());
        } else if (yargsObject.read) {
            console.log(await listUsers());
        } else if (yargsObject.update) {
            await updateUser({firstName: yargsObject.firstName, lastName: yargsObject.lastName, email: yargsObject.email}, {firstName: yargsObject.newFirstName, lastName: yargsObject.newLastName, email: yargsObject.newEmail});
            console.log(await listUsers());
        } else if (yargsObject.delete) {
            await deleteUser (yargsObject)
            console.log(await listUsers());
        } 
        //error
        else {
            console.log("incorrect command")
        }
    } catch (error) {
        console.log(error)
    }
} 

app(yargs.argv)