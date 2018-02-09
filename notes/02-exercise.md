# CHALLENGE: Find and return the longest word in a string

## PROBLEM STATEMENT

Write a function that takes a string and outputs the longest word in the string.

## INPUTS

1. A string

## OUTPUTS

1. A string

## EXAMPLES

Input: "What is the longest word in this string?"
Output: longest

Input: "hello world"
Output: "hello"

Input: "The longest word I know is antidisestablishmentarianism."
Output: antidisestablishmentarianism

Input: "They’re gone"
Output: "they’re"

Input: ""
Output: ""

Input: 1234
Output: TypeError

Input: false
Output: TypeError

## ASSUMPTIONS and GOTCHAS

* All of the words in the string could be the same length. When this happens, we will return the first word.
* If the input is an empty string, the output will be an empty string.
* If the input is not a string, the program will throw a TypeError.
* If the longest word is followed by punctuation, the punctuation should not be included in the output.
* A word can include an apostrophe.
* When returning the word, convert it to lowercase.

## PSEUDOCODE

Convert the input string to an array of the words in the string, excluding punctuation
From the array of words, create a new array that contains the length of each word
Find the index of the maximum value
Return the word at the index of the maximum valuec