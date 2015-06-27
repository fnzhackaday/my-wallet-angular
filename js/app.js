var myWallet = angular.module('MyWallet', ['ngResource', 'angularPayments']);

myWallet.config(function() {
    window.Stripe.setPublishableKey('pk_test_c794w6gPwRzg5GIr6woBkdKw');
});