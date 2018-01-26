import angular from 'angular';

import '../style/app.css';

let app = () => {
  return {
    template: require('../views/app.html'),
    controller: 'CardsController',
    controllerAs: 'app'
  }
};

class CardsController {
  constructor($scope) {
      $scope.phones = [
          {
              name: 'Nexus S',
              snippet: 'Fast just got faster with Nexus S.'
          }, {
              name: 'Motorola XOOM™ with Wi-Fi',
              snippet: 'The Next, Next Generation tablet.'
          }, {
              name: 'MOTOROLA XOOM™',
              snippet: 'The Next, Next Generation tablet.'
          }
      ];
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('CardsController', CardsController);

export default MODULE_NAME;