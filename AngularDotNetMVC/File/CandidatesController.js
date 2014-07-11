console.log("Candidate Controller Loaded");
app.controllerProvider.register("CandidatesController", function ($scope) {
    $scope.test = "Woooo!";
    $scope.Candidates = [{name:"Kang", image:"http://www.how-to-draw-cartoons-online.com/image-files/kang-and-kodos-10.gif", tagline:"We have reached the limits of what probing can teach us"},{name:"Kodos", image:"http://www.how-to-draw-cartoons-online.com/image-files/kang-and-kodos-10.gif", tagline:"Will cook for Humans"
    }];
  
})