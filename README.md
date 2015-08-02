# angular_codeschool
- CODE SCHOOL: SHAPING UP WITH ANGULAR.JS

https://www.codeschool.com/courses/shaping-up-with-angular-js

![alt tag](https://github.com/Ma-rk/angular_codeschool/blob/master/imgs/frontPage.png)

#### creating a module
- `var app = angular.module('myModule', []);`


##LEVEL 1


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

  var gems = [...];
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

##LEVEL 3

### Displaying Reviews should seem repetitive
```
<!DOCTYPE html>
<html ng-app="gemStore">
  <head>
    ...
  </head>
  <body ng-controller="StoreController as store">
    ...
        <section ng-controller="TabController as tab">
          ...
          <!--  Review Tab's Content  -->
          <div ng-show="tab.isSet(3)">
            <!--  Product Reviews List -->
            <ul>
              <h4>Reviews</h4>
              <li ng-repeat="review in product.reviews">
                <blockquote>
                  <strong> {{review.stars}} Stars</strong>
                  {{review.body}}
                  <cite class="clearfix">{{review.author}}</cite>
                </blockquote>
              </li>
            </ul>
          </div>
        </section>
</html>
```
```
(not changed)
```

### Create a Review Form
```
<!DOCTYPE html>
<html ng-app="gemStore">
  <body ng-controller="StoreController as store">
  ...
            <!--  Review Form -->
            <form name="reviewForm">
              <!--  Live Preview -->
              <blockquote>
                <strong> Stars</strong>
                
                <cite class="clearfix">—</cite>
              </blockquote>

              <!--  Review Form -->
              <h4>Submit a Review</h4>
              <fieldset class="form-group">
                <select ng-model="review.stars" class="form-control" ng-options="stars for stars in [5,4,3,2,1]"  title="Stars">
                  <option value="">Rate the Product</option>
                </select>
              </fieldset>
              <fieldset class="form-group">
                <textarea ng-model="review.body" class="form-control" placeholder="Write a short review of the product..." title="Review"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input type="email" class="form-control" placeholder="jimmyDean@example.org" title="Email" />
              </fieldset>
              <fieldset ng-model="review.author" class="form-group">
                <input type="submit" class="btn btn-primary pull-right" value="Submit Review" />
              </fieldset>
            </form>
  ...
  </body>
</html>
```
```
(not changed)
```

### Review Live Preview!
```
<!DOCTYPE html>
<html ng-app="gemStore">
  <body ng-controller="StoreController as store">
  ...
            <!--  Review Form -->
            <form name="reviewForm">
              <!--  Live Preview -->
              <blockquote>
                <strong>{{review.stars}} Stars</strong>
                {{review.body}}
                <cite class="clearfix">-{{review.author}}</cite>
              </blockquote>

              <!--  Review Form -->
              <h4>Submit a Review</h4>
              <fieldset class="form-group">
                <select ng-model="review.stars" class="form-control" ng-options="stars for stars in [5,4,3,2,1]"  title="Stars">
                  <option value="">Rate the Product</option>
                </select>
              </fieldset>
              <fieldset class="form-group">
                <textarea ng-model="review.body" class="form-control" placeholder="Write a short review of the product..." title="Review"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input ng-model="review.author" type="email" class="form-control" placeholder="jimmyDean@example.org" title="Email" />
              </fieldset>
              <fieldset class="form-group">
                <input type="submit" class="btn btn-primary pull-right" value="Submit Review" />
              </fieldset>
            </form>
  ...
  </body>
</html>
```
```
(not changed)
```
