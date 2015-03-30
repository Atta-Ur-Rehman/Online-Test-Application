angular.module("simpleApp",['firebase'])

.controller("Questions",function($scope,$firebase){
        $scope.name = " ";
        $scope.answerone = " ";
        $scope.answertwo = " ";
        $scope.answerthree = " ";
        $scope.answerfour = " ";
        $scope.answerfive = " ";
        $scope.answersix = " ";
        $scope.answerseven = " ";
        $scope.answereight = " ";
        $scope.answernine = " ";
        $scope.answerten = " ";
        $scope.answereleven = " ";
        $scope.answertwelve = " ";
        $scope.answerthirteen = " ";
        $scope.answerfourteen = " ";
        $scope.answerfifteen = " ";
        $scope.answersixteen = " ";
        $scope.answerseventeen = " ";
        $scope.answereighteen = " ";
        $scope.answerninteen = " ";
        $scope.answertwenty = " ";
        $scope.myFirebaseRef = new Firebase('https://fiery-heat-7670.firebaseio.com/Online_Test');
        $scope.submit = function () {
            $scope.myFirebaseRef.push({
                name : $scope.name,
                answerone : $scope.answerone,
                answertwo : $scope.answertwo,
                answerthree : $scope.answerthree,
                answerfour : $scope.answerfour,
                answerfive : $scope.answerfive,
                answersix : $scope.answersix,
                answerseven : $scope.answerseven,
                answereight : $scope.answereight,
                answernine : $scope.answernine,
                answerten : $scope.answerten,
                answereleven : $scope.answereleven,
                answertwelve : $scope.answertwelve,
                answerthirteen : $scope.answerthirteen,
                answerfourteen : $scope.answerfourteen,
                answerfifteen : $scope.answerfifteen,
                answersixteen : $scope.answersixteen,
                answerseventeen : $scope.answerseventeen,
                answereighteen : $scope.answereighteen,
                answerninteen : $scope.answerninteen,
                answertwenty : $scope.answertwenty

            });
            alert("Thankx your Test Submitted");
        }
    });
