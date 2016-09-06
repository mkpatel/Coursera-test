'use strict';

angular.module('mainApp')

.factory('bookFactory', function() {


	var books = [
              
              {
                "_id": "57ce88cecb64a9b97acc0e52",
                "isbn": "ISBN-123-3456-789",
                "title": "Learning Node.js",
                "author": "Ashwin Hegde",
                "price": 350,
                "availableOn": [
                  "Amazon",
                  "eBay",
                  "Flipkart"
                ]
              },
              {
                "_id": "57ce88cecb64a9b97acc0e53",
                "isbn": "ISBN-987-8765-876",
                "title": "Learning Knockout",
                "author": "Jerin John",
                "price": 250,
                "availableOn": [
                  "Amazon",
                  "Flipkart"
                ]
              },
              {
                "_id": "57ce88cecb64a9b97acc0e54",
                "isbn": "ISBN-345-2342-123",
                "title": "Learning Backbone",
                "author": "Saju Sasidharan",
                "price": 250,
                "availableOn": [
                  "eBay",
                  "Flipkart"
                ]
              },
              {
                "_id": "57ce88cecb64a9b97acc0e55",
                "isbn": "ISBN-678-8765-098",
                "title": "Learning React",
                "author": "Ashwin Hegde",
                "price": 450,
                "availableOn": [
                  "Amazon",
                  "Flipkart"
                ]
              },
              {
                "_id": "57ce88cecb64a9b97acc0e56",
                "isbn": "ISBN-356-8935-548",
                "title": "Learning Angular",
                "author": "Saju Sasidharan",
                "price": 650,
                "availableOn": [
                  "Amazon",
                  "eBay",
                  "Flipkart"
                ]
              },
              {
                "_id": "57ce88cecb64a9b97acc0e57",
                "isbn": "ISBN-098-7896-009",
                "title": "Learning Go",
                "author": "Ashwin Hegde",
                "price": 150,
                "availableOn": [
                  "Amazon"
                ]
              },
              {
                "_id": "57ce88cecb64a9b97acc0e58",
                "isbn": "ISBN-642-9764-086",
                "title": "Learning Team Management",
                "author": "Ajay Sajwan",
                "price": 340,
                "availableOn": [
                  "Amazon",
                  "Flipkart"
                ]
              },
              {
                "_id": "57ce88cecb64a9b97acc0e59",
                "isbn": "ISBN-153-2436-483",
                "title": "Project Management",
                "author": "Kumar Kundan",
                "price": 650,
                "availableOn": [
                  "Amazon",
                  "eBay",
                  "Flipkart",
                  "Google"
                ]
              },
              {
                "_id": "57ce88cecb64a9b97acc0e5a",
                "isbn": "ISBN-243-4356-812",
                "title": "Delivery Management",
                "author": "Kumar Kundan",
                "price": 750,
                "availableOn": [
                  "Amazon",
                  "Flipkart"
                ]
              }
                        
            
            ];


    /*Creating an object*/        

    var bookfac = {};

    /*Return a book of array*/
    bookfac.getBooks = function() {

    		return books;
    };

    /*Returning a single book */
    bookfac.getBook = function(index) {

    	return books[index];
    }

    return bookfac;

 });