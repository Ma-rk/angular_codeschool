(function () {
    var app = angular.module('store', []);
    app.controller('StoreController', function () {
        this.products = gems;
    });
    var gems = [
        {
            name: 'Mark1',
            price: 500.5,
            desc: 'the world most powerful great person!!!',
            canPurchase: true,
            soldOut: true
        },
        {
            name: 'Mark2',
            price: 505.5,
            desc: 'the world most handsome person!!!',
            canPurchase: true,
            soldOut: false
        }
    ]
})();
