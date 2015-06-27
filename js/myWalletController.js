myWallet.controller('MyWalletController', ['$http', function($http){
  var self = this;

  self.stripeCallback = function (code, result) {
    if (result.error) {
        console.log('it failed! error: ' + result.error.message);
    } else {
        console.log('success! token: ' + result.id);
    }
  };
}])