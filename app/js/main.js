'use strict';

// adding some fun comments
// here is more dftfvvutufufuffuf

angular.module('contactsAppApp')
  .controller('MainCtrl', function($scope, $, contactsService){
    $scope.initContacts = function(){
       $scope.contacts = contactsService.contacts;
       $scope.letters =contactsService.letters;
    };

    $scope.keygen = function(){
      var num = Math.random();
      return Math.floor(num*100000000);
    };


    $scope.newAddress = function(){
      var key =  $scope.keygen();
      var o = {
        first:$scope.firstName,
        last: $scope.lastName,
        country: $scope.country,
        postcode: $scope.postcode,
        addressl1: $scope.addressl1,
        addressl2:$scope.addressl2 ,
        town: $scope.town,
        county: $scope.county,
        oid: key
      };
      localStorage.setItem(key, JSON.stringify(o));
      $scope.contacts.push(o);
    };

    $scope.selectContact = function(id) {
      $scope.selectedContact = this.contact;
      $('#first').val($scope.selectedContact.first);
      $('#last').val($scope.selectedContact.last);
      $('#countryE').val($scope.selectedContact.country);
      $('#postcodeE').val($scope.selectedContact.postcode);
      $('#addressl1E').val($scope.selectedContact.addressl1);
      $('#addressl2E').val($scope.selectedContact.addressl2);
      $('#townE').val($scope.selectedContact.town);
      $('#countyE').val($scope.selectedContact.county);
      if(!$scope.contacts[id].selected){
        $scope.contacts[id].selected = true;
      } else {
        $scope.contacts[id].selected = false;
      }
    };

    $scope.edit = function(){
      var key = $scope.selectedContact.oid;
      var o = {
        first:$('#first').val(),
        last:  $('#last').val(),
        country: $('#countryE').val(),
        postcode:  $('#postcodeE').val(),
        addressl1: $('#addressl1E').val(),
        addressl2:$('#addressl2E').val(),
        town: $('#townE').val(),
        county:  $('#countyE').val(),
        oid: key
      };
      localStorage.setItem(key , JSON.stringify(o));
      contactsService.refresh();
      $scope.contacts = contactsService.contacts;
    };

   /*  for letter filterling
   $scope.filter = function(letters){
      contactsService.getContactsByLetters(letters);
      $scope.contacts = contactsService.contacts;
    };

    */


  });