console.log("False Platform Controller Loaded...You are fooled Human!");
app.controllerProvider.register("PlatformController", function ($scope) {
    $scope.slogan = "My fellow Americans. As a young boy, I dreamed of being a baseball; but tonight I say, we must move forward, not backward; upward, not forward; and always twirling, twirling, twirling towards freedom!";
    $scope.img = "http://deadhomersociety.files.wordpress.com/2012/11/treehouseofhorrorvii5.png";
});