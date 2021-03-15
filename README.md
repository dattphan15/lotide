# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dattphan15/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`


## Documentation

The following functions are currently implemented:

***

* `assertArraysEqual(actual, expected)`: Compares two arrays to see if they're equal or not.

* `assertEqual(actual, expected)`: Compares two items to see if they're equal or not.

* `assertObjectsEqual(actual, expected)`: Compares two objects to see if they're equal or not.

* `countLetters(string)`: Counts the different letters in a string.

* `countOnly(allItems, itemsToCount)`:Takes a collection of items and return count for a specific subset of those items.

* `eqArrays(array1, array2)`: Takes in two arrays and returns true or false based on a perfect match.

* `eqObjects(object1, object 2)`: Return a true or false based on a perfect match.

* `findKey(object, callback)`: Scan an object and returns the first key for which the callback returns a truthy value.

* `findKeyByValue(object, value)`: Finds an object key value, by passing the object and value as arguments.

* `head(array)`: Returns the first element in an array.

* `letterPositions(string)`: Returns an object of arrays, which contain all the indices (zero-based positions) in the input string where each character is found.

* `map(array, callback)`: Returns a new array after being passed through the callback.

* `middle(array)`: Returns the middle element/s of an array.

* `tail(array)`: Returns the last element of an array.

* `takeUntil(array, callback)`: Returns each element into a new array starting from the beginning of the array being passed until the callback returns truthy.

* `without(source, itemsToRemove)`: Returns a subet of a given array, removing unwanted elements.
