var friends = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.get("/api/friends", function(req, res) {

        var matchFound = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

    // parse in results from survey
    var userData = req.body;
    var userScore = userData.scores;

    // calculate scores of users and those in the friend db
    var totalDifference = 0;

    // a for loop that loops through array of friends
    for (var i = 0; i < friends.length; i++) {
        console.log(friend[i].name);
        totalDifference = 0;

        // a for loop that loops through scores
        for (var j = 0; j < friends[i].scores[j]; j++) {

            // add the score difference to totalDifference var
            totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

            // conditions for when the totalDif is less than the current best match
            if (totalDifference <= matchFound.friendDifference) {

                // resetting matches
                matchFound.name = friend[i].name;
                matchFound.photo = friends[i].photo;
                matchFound.friendDifference = totalDifference;

            }
        }
    }

    // saves the user data into db
    friends.push(userData);

    // best match jSON
    res.json(matchFound);
});
}