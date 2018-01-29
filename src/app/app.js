import angular from 'angular';
import $ from "jquery";
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/app.css';

$(window).on('load',function(){
    if ($('.js-sidebar').length > 0) {
        $('.js-sidebar').mCustomScrollbar({
            axis:'y',
            theme: 'minimal-dark',
            scrollbarPosition: 'inside',
            scrollInertia: 300,
        });
    }
});

let app = () => {
  return {
    template: require('../views/app.html'),
    controller: 'CardsController',
    controllerAs: 'app'
  }
};

class CardsController {
  constructor($http) {
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


  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('CardsController', CardsController);

export default MODULE_NAME;