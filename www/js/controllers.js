angular.module('app.controllers', [])

.controller('homeCtrl', function($scope) {
  $scope.readOnly = true;

  $scope.stores = [
    {
      name: "가마로강정 야탑점",
      mainmenu: 'img/mainmenu.png',
      rate: 4.5,
      countReview: 52,
      countPicture: 38,
      countReply: 50,
      isOrderCall: true,
      isBillBefore: true,
      isBillAfter: true
    },
    {
      name: "토니 두마리 수제치킨 야탑점",
      mainmenu: 'img/mainmenu.png',
      rate: 4.0,
      countReview: 45,
      countPicture: 9,
      countReply: 21,
      isOrderCall: true,
      isBillBefore: true,
      isBillAfter: true
    },
    {
      name: "교촌치킨 야탑점",
      mainmenu: 'img/mainmenu.png',
      rate: 0.0,
      countReview: 0,
      countPicture: 0,
      countReply: 0,
      isOrderCall: true,
      isBillBefore: false,
      isBillAfter: false
    },
    {
      name: "가마로강정 야탑점",
      mainmenu: 'img/mainmenu.png',
      rate: 4.5,
      countReview: 52,
      countPicture: 38,
      countReply: 50,
      isOrderCall: true,
      isBillBefore: true,
      isBillAfter: true
    },
    {
      name: "가마로강정 야탑점",
      mainmenu: 'img/mainmenu.png',
      rate: 4.5,
      countReview: 52,
      countPicture: 38,
      countReply: 50,
      isOrderCall: true,
      isBillBefore: true,
      isBillAfter: true
    },
    {
      name: "가마로강정 야탑점",
      mainmenu: 'img/mainmenu.png',
      rate: 4.5,
      countReview: 52,
      countPicture: 38,
      countReply: 50,
      isOrderCall: true,
      isBillBefore: true,
      isBillAfter: true
    },
    {
      name: "토니 두마리 수제치킨 야탑점",
      mainmenu: 'img/mainmenu.png',
      rate: 4.0,
      countReview: 45,
      countPicture: 9,
      countReply: 21,
      isOrderCall: true,
      isBillBefore: true,
      isBillAfter: true
    },
    {
      name: "교촌치킨 야탑점",
      mainmenu: 'img/mainmenu.png',
      rate: 0.0,
      countReview: 0,
      countPicture: 0,
      countReply: 0,
      isOrderCall: true,
      isBillBefore: false,
      isBillAfter: false
    },
    {
      name: "토니 두마리 수제치킨 야탑점",
      mainmenu: 'img/mainmenu.png',
      rate: 4.0,
      countReview: 45,
      countPicture: 9,
      countReply: 21,
      isOrderCall: true,
      isBillBefore: true,
      isBillAfter: true
    },
    {
      name: "교촌치킨 야탑점",
      mainmenu: 'img/mainmenu.png',
      rate: 0.0,
      countReview: 0,
      countPicture: 0,
      countReply: 0,
      isOrderCall: true,
      isBillBefore: false,
      isBillAfter: false
    },
    {
      name: "토니 두마리 수제치킨 야탑점",
      mainmenu: 'img/mainmenu.png',
      rate: 4.0,
      countReview: 45,
      countPicture: 9,
      countReply: 21,
      isOrderCall: true,
      isBillBefore: true,
      isBillAfter: true
    },
    {
      name: "교촌치킨 야탑점",
      mainmenu: 'img/mainmenu.png',
      rate: 0.0,
      countReview: 0,
      countPicture: 0,
      countReply: 0,
      isOrderCall: true,
      isBillBefore: false,
      isBillAfter: false
    },
    {
      name: "궁원 숯불바베큐",
      mainmenu: 'img/mainmenu.png',
      rate: 4.0,
      countReview: 51,
      countPicture: 5,
      countReply: 0,
      isOrderCall: true,
      isBillBefore: true,
      isBillAfter: false
    }
  ]

})

.controller('favoritesCtrl', function($scope) {

})

.controller('cartCtrl', function($scope) {

})

.controller('moreCtrl', function($scope) {

})
