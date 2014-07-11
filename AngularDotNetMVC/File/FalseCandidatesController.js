console.log("False Candidate Controller Loaded");
app.controllerProvider.register("CandidatesController", function ($scope) {
    $scope.Candidates = [
        {
            name: "Bob Dole",
            image: "http://www.nido.org/cl/src/1396241870261.jpg",
            tagline: "It does not matter which way you vote. Either way your planet is doomed. Doomed. Doomed. "
        },
        {
            name: "Bill Clinton", image: "http://img4.wikia.nocookie.net/__cb20090906211654/lossimpson/es/images/1/11/Bill_Clinton.png",
            tagline: " I am Clin-Ton. As overlord, all will kneel trembling before me and obey my brutal commands. End communication."
        }]
})