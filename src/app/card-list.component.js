angular.
module('app').
component('cardList', {
    template:
    '<ul>' +
    '<li ng-repeat="card in $ctrl.cards">' +
    '<span>{{card.name}}</span>' +
    '<p>{{card.snippet}}</p>' +
    '</li>' +
    '</ul>',
    controller: function CardListController() {
        this.cards = [
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
});
