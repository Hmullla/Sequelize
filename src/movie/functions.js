const Movie = require("./table");

//create
exports.addMovie = async (movieObject) => {
    try {
        await Movie.create(movieObject);
    } catch (error) {
        console.log(error);
    }
}

//read
exports.listMovies = async () => {
    try {
        return await Movie.findAll();
    } catch (error) {
        console.log(error);
    }
}

//update
exports.updateMovie = async (yargsObject, updateObject) => {
    try {
        await Movie.update({title: updateObject.newTitle, actor: updateObject.newActor}, {
            where: {
              title: yargsObject.title
            }
          });
          console.log("Movie successfully updated");
    } catch (error) {
        console.log(error);
    }
}

//delete
exports.deleteMovie = async (yargsObject) => {
    try {
        await Movie.destroy({
            where: {
              title: yargsObject.title
            }
          });
          console.log("Movie successfully deleted");
    } catch (error) {
        console.log(error);
    }
}