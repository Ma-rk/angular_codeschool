# angular_codeschool
- CODE SCHOOL: SHAPING UP WITH ANGULAR.JS

##LEVEL 1

### creating a module
- `var app = angular.module('myModule`, []);


### our first controller
```
<!DOCTYPE html>
<html ng-app="gemStore">
  <head>
    <link rel="stylesheet" type="text/css" href="bootstrap.min.css" />
    <script type="text/javascript" src="angular.min.js"></script>
    <script type="text/javascript" src="app.js"></script>
  </head>
  <body ng-controller="StoreController as store">
    <div class="product row">
      <h3>
        {{store.product.name}}
        <em class="pull-right">{{store.product.price}}</em>
      </h3>
    </div>
  </body>
</html>
```
```
(function(){
  var gem = { name: 'Azurite', price: 2.95 };
  var app = angular.module('gemStore', []);
  app.controller('StoreController', function(){
    this.product = gem;
  });
})();
```


### Not For Sale
```
<!DOCTYPE html>
<html ng-app="gemStore">
  <head>
    <link rel="stylesheet" type="text/css" href="bootstrap.min.css" />
    <script type="text/javascript" src="angular.min.js"></script>
    <script type="text/javascript" src="app.js"></script>
  </head>
  <body class="container" ng-controller="StoreController as store">
    <div class="product row">
      <h3>
        {{store.product.name}}
        <em class="pull-right">${{store.product.price}}</em>
      </h3>
      <button>Add to Cart</button>
    </div>
  </body>
</html>
```
```
(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.product = gem;
  });

  var gem = {
    name: 'Azurite',
    price: 110.50,
    canPurchase: false,
    soldOut: true
  };
})();
```

##LEVEL 2

### Using filters
```
<!DOCTYPE html>
<html ng-app="gemStore">
  <head>
    <link rel="stylesheet" type="text/css" href="bootstrap.min.css" />
    <script type="text/javascript" src="angular.min.js"></script>
    <script type="text/javascript" src="app.js"></script>
  </head>
  <body class="container" ng-controller="StoreController as store">
    <div class="product row" ng-repeat="product in store.products">
      <h3>
        {{product.name}}
        <em class="pull-right">{{product.price}}</em>
      </h3>
    </div>
  </body>
</html>
```
```
(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    { name: 'Azurite', price: 110.50 },
    { name: 'Bloodstone', price: 22.90 },
    { name: 'Zircon', price: 1100 },
  ];
})();
```
### Displaying the First Image 
```
<!DOCTYPE html>
<html ng-app="gemStore">
  <head>
    <link rel="stylesheet" type="text/css" href="bootstrap.min.css" />
    <script type="text/javascript" src="angular.min.js"></script>
    <script type="text/javascript" src="app.js"></script>
  </head>
  <body ng-controller="StoreController as store">
    <!--  Products Container  -->
    <div class="list-group">
      <!--  Product Container  -->
      <div class="list-group-item" ng-repeat="product in store.products">
        <h3>
          {{product.name}}
          <em class="pull-right">{{product.price | currency}}</em>
        </h3>
        <!-- Image Gallery  -->
        <div class="gallery">
          <img ng-src={{product.images[0]}} />
        </div>
      </div>
    </div>
  </body>
</html>
```
```
(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [{
      name: 'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        "images/gem-02.gif",
        "images/gem-05.gif",
        "images/gem-09.gif"
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Zircon',
      description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
      shine: 70,
      price: 1100,
      rarity: 2,
      color: '#000',
      faces: 6,
      images: [
        "images/gem-06.gif",
        "images/gem-07.gif",
        "images/gem-10.gif"
      ],
      reviews: [{
        stars: 1,
        body: "This gem is WAY too expensive for its rarity value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "BBW: High Shine != High Quality.",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your rubles!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }]
    }];
})();

```
### Displaying the First Image 
```
<!DOCTYPE html>
<html ng-app="gemStore">
  <head>
    <link rel="stylesheet" type="text/css" href="bootstrap.min.css" />
    <script type="text/javascript" src="angular.min.js"></script>
    <script type="text/javascript" src="app.js"></script>
  </head>
  <body ng-controller="StoreController as store">
    <!--  Products Container  -->
    <div class="list-group">
      <!--  Product Container  -->
      <div class="list-group-item" ng-repeat="product in store.products">
        <h3>
          {{product.name}}
          <em class="pull-right">{{product.price | currency}}</em>
        </h3>
        <!-- Image Gallery  -->
        <div class="gallery">
          <img ng-src={{product.images[0]}} />
        </div>
      </div>
    </div>
  </body>
</html>
```
```
(not changed)
```

### Display All Thumbnails
```
<!DOCTYPE html>
<html ng-app="gemStore">
  <head>
    <link rel="stylesheet" type="text/css" href="bootstrap.min.css" />
    <script type="text/javascript" src="angular.min.js"></script>
    <script type="text/javascript" src="app.js"></script>
  </head>
  <body class="list-group" ng-controller="StoreController as store">
    <!--  Product Container  -->
    <div class="list-group-item" ng-repeat="product in store.products">
      <h3>{{product.name}} <em class="pull-right">{{product.price | currency}}</em></h3>

      <!-- Image Gallery  -->
      <div class="gallery">
        <div class="img-wrap">
          <img ng-src="{{product.images[0]}}" />
        </div>
        <ul class="img-thumbnails clearfix">
          <li class="small-image pull-left thumbnail" ng-repeat="image in product.images">
            <img ng-src="{{image}}" />
          </li>
        </ul>
      </div>
    </div>
  </body>
</html>
```
```
(not changed)
```

### No Images, No Gallery
```
<!DOCTYPE html>
<html ng-app="gemStore">
  <head>
    <link rel="stylesheet" type="text/css" href="bootstrap.min.css" />
    <script type="text/javascript" src="angular.min.js"></script>
    <script type="text/javascript" src="app.js"></script>
  </head>
  <body ng-controller="StoreController as store">
    <!--  Products Container  -->
    <div class="list-group">
      <!--  Product Container  -->
      <div class="list-group-item" ng-repeat="product in store.products">
        <h3>
          {{product.name}}
          <em class="pull-right">{{product.price | currency}}</em>
        </h3>

        <!-- Image Gallery  -->
        <div class="gallery" ng-show="product.images.length">
          <img class="img img-circle img-thumbnail center-block" ng-src="{{product.images[0]}}" />
          <ul class="clearfix">
            <li class="small-image pull-left thumbnail" ng-repeat="image in product.images"> <img ng-src="{{image}}" /> </li>
          </ul>
        </div>
      </div>
    </div>
  </body>
</html>
```
```
(not changed)
```

### Tabs Inside Out 
```
(not changed)
```
```
(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('TabController', function(){
		this.tab=1;
    this.setTab=function(selectedTab){
      this.tab=selectedTab;
    };
    this.isSet=function(checkTab){
      return checkTab === this.tab;
    };
  });
  var gems = [...];
})();
```

### Using TabController 
```
<!DOCTYPE html>
<html ng-app="gemStore">
  <head>
    <link rel="stylesheet" type="text/css" href="bootstrap.min.css" />
    <script type="text/javascript" src="angular.min.js"></script>
    <script type="text/javascript" src="app.js"></script>
  </head>
  <body class="list-group" ng-controller="StoreController as store">
    <header>
      <h1 class="text-center">Flatlander Crafted Gems</h1>
      <h2 class="text-center">– an Angular store –</h2>
    </header>
    <div class="list-group-item" ng-repeat="product in store.products">
      <h3>
        {{product.name}}
        <em class="pull-right">{{product.price | currency}}</em>
      </h3>
      <section ng-show="product.images.length">
        <img ng-src="{{product.images[0]}}" />
        <ul class="list-inline thumbs">
          <li class="thumbnail" ng-repeat="image in product.images">
            <img ng-src="{{image}}" />
          </li>
        </ul>
      </section>

      <section class="tab" ng-controller="TabController as tabCtrl">
        <ul class="nav nav-pills">
          <li ng-class="{active:tabCtrl.isSet(1)}">
            <a href ng-click="tabCtrl.setTab(1)">Description</a></li>
          <li ng-class="{active:tabCtrl.isSet(2)}">
            <a href ng-click="tabCtrl.setTab(2)">Specs</a></li>
          <li ng-class="{active:tabCtrl.isSet(3)}">
            <a href ng-click="tabCtrl.setTab(3)">Reviews</a></li>
        </ul>
        <div ng-show="tabCtrl.isSet(1)">
          <h4>Description</h4>
          <blockquote>{{product.description}}</blockquote>
        </div>
        <div ng-show="tabCtrl.isSet(2)">
          <h4>Specs</h4>
          <blockquote>Shine: {{product.shine}}</blockquote>
        </div>
        <div ng-show="tabCtrl.isSet(3)">
          <h4>Reviews</h4>
          <blockquote></blockquote>
        </div>
      </section>
    </div>
  </body>
</html>
```
```
(not changed)
```

### Creating Gallery Controller 
```
(not changed)
```
```
(function() {
  var app = angular.module('gemStore', []);

  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(value){
      if(value === null)
        this.current = 0;
      else
        this.current = value;
    };
  });

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });

  var gems = [...];
})();
```

### Using Gallery Controller
```

```
```
(not changed)
```

### Using Gallery Controller
```
<!DOCTYPE html>
<html ng-app="gemStore">
  <head>
    ...
  </head>
  <body class="list-group" ng-controller="StoreController as store">
    <header>
      <h1 class="text-center">Flatlander Crafted Gems</h1>
      <h2 class="text-center">– an Angular store –</h2>
    </header>
    <div class="list-group-item" ng-repeat="product in store.products">
      <h3>
        {{product.name}}
        <em class="pull-right">{{product.price | currency}}</em>
      </h3>

      <!-- Image Gallery  -->
      <div class='gallery' ng-controller="GalleryController as gallary" ng-show="product.images.length">
        <img ng-src="{{product.images[gallary.current]}}" />
        <ul class="list-inline thumbs">
          <li class="thumbnail" ng-repeat="image in product.images">
            <img ng-src="{{image}}" />
          </li>
        </ul>
      </div>

      <section class="tab" ng-controller="TabController as tab">
       ...
      </section>
    </div>
  </body>
</html>
```
```
(not changed)
```
