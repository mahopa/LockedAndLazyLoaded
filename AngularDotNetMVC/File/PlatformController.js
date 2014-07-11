console.log("Platform Controller Loaded");
app.controllerProvider.register("PlatformController", function ($scope) {
    $scope.slogan = "It's true, we are aliens. But what are you going to do about it? It's a two-party system. You have to vote for one of us. ";
    $scope.img = "http://meblogwritegood.files.wordpress.com/2012/01/screen-shot-2012-01-13-at-11-55-34-am.png";
    $scope.secretFunction = function () {
        alert("The humans know!");
    };
});