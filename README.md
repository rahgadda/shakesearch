# ShakeSearch

Hey guys, this is a response repository for a take home challenge available [here](https://github.com/ProlificLabs/shakesearch)

In this repository, you'll find a my simple web app that allows a user to search for a text string in the complete works of Shakespeare.

Sample live version is available at [pulley-shakesearch](https://pulley-shakesearch.herokuapp.com/)   
My implementation is available at [rahgadda-shakesearch]()   

Try searching for "Hamlet" to display a set of results.

## Approach:
- Created a `Node.js` project that would convert uploaded book to a repository of search index with below fields. 
  Project is available [here](scanbooks).
  - sno: Serial No
  - hashcode: MD5 Hashcode for each text
  - line number of text
  - data: Parsed Text Data
