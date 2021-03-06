import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';
import 'ng-scrollbar-npm';
import 'ng-scrollbar/dist/ng-scrollbar.min.js';
import 'ng-scrollbar/dist/ng-scrollbar.min.css';
// import 'angular-sanitize';
import '../style/app.css';

let app = () => {
  return {
    template: require('../views/app.html'),
    controller: 'CardsController',
    controllerAs: 'app'
  }
};

class CardsController {
  constructor($scope, $http) {
      var self = this;
      self.cardNameArr = [
          'Burial from a Different Dimension',
          'Charge of the Light Brigade',
          'Infernoid Antra',
          'Infernoid Attondel',
          'Infernoid Decatron',
          'Infernoid Devyaty',
          'Infernoid Harmadik',
          'Infernoid Onuncu',
          'Infernoid Patrulea',
          'Infernoid Pirmais',
          'Infernoid Seitsemas',
          'Lyla, Lightsworn Sorceress',
          'Monster Gate',
          'One for One',
          'Raiden, Hand of the Lightsworn',
          'Reasoning',
          'Time-Space Trap Hole',
          'Torrential Tribute',
          'Upstart Goblin',
          'Void Seer'
      ];
      self.cards = [];
      self.info = function(index){
          self.cardInfo = self.cards[index];
      };

      self.cardNameArr.forEach(cardName => {
          $http.get('http://52.57.88.137/api/card_data/'+cardName).then(function(response) {
              self.cardData = response.data;
              self.cards.push({
                  name: self.cardData.data.name,
                  description: self.cardData.data.text,
                  type: self.cardData.data.type,
              })
          });
      });

      $scope.$on('scrollbar.show', function(){
          console.log('Scrollbar show');
      });
      $scope.$on('scrollbar.hide', function(){
          console.log('Scrollbar hide');
      });

  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.bootstrap', 'ngScrollbar'])
  .directive('app', app)
  .controller('CardsController', CardsController);

export default MODULE_NAME;