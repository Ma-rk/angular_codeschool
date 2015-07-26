(function () {
    var app = angular.module('store', []);
    app.controller('StoreController', function () {
        this.products = gems;
    });
    app.controller('PanelController', function () {
        this.tab = 1;
        this.selectTab = function (setTab) {
            this.tab = setTab;
        };
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        }
    });
    var gems = [
        {
            name: 'Mark1',
            price: 500.5,
            desc: 'the world most powerful great person!!!',
            image: {
                full: 'imgs/01-full.jpg',
                thumb: 'imgs/01-thumb.jpg'
            },
            canPurchase: true,
            soldOut: true
        },
        {
            name: 'Mark2',
            price: 505.5,
            desc: 'the world most handsome person!!!',
            image: {
                full: 'imgs/02-full.jpg',
                thumb: 'imgs/02-thumb.jpg'
            },
            canPurchase: true,
            soldOut: false
        }
    ]
})();
