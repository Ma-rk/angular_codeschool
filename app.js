(function () {
    var app = angular.module('store', []);
    app.controller('StoreController', function () {
        this.product = gem;
    });
    var gem = {
        name: 'Mark',
        price: 500.5,
        desc: 'the world most powerful great person!!!'
    }
})();