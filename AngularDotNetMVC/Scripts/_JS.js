var app = angular.module("app", ["ngRoute"]);
//This function creates the route object for the $routeProvider.when(...) method
var Injector = function (templateUrl, dependencies, controller) {
    this.templateUrl = templateUrl;
    this.resolve = {
        dependencies: function ($q, $rootScope) {
            var deferred = $q.defer();
            //This is from the Script JS Library
            // Load the dependencies via Script JS
            $script(dependencies, function () {
                // all dependencies loaded resolve the promise
                $rootScope.$apply(function () {
                    deferred.resolve();
                });
            });
            return deferred.promise;
        }
    };
    this.controller = controller;
};

app.config(function ($routeProvider, $controllerProvider) {
    //
    app.controllerProvider = $controllerProvider;
    $routeProvider
        .when("/", new Injector("Views/Index", ['Files/HomeController'], "HomeController"))
    .when("/Platform", new Injector("Views/Platform", ["Files/PlatformController"], "PlatformController"))
    .when("/Candidates", new Injector("Views/Candidates", ["Files/CandidatesController"], "CandidatesController"));
});