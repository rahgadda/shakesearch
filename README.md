# ShakeSearch

Hey guys, this is a response repository for a take home challenge available [here](https://github.com/ProlificLabs/shakesearch)

In this repository, you'll find a my simple web app that allows a user to search for a text string in the complete works of Shakespeare.

Sample live version is available at [pulley-shakesearch](https://pulley-shakesearch.herokuapp.com/)   
My implementation is available at [rahgadda-shakesearch](https://rahgadda.github.io/shakesearch/)   

Try searching for "Hamlet" to display a set of results.

## Approach:
- Created a `Node.js` project that would convert uploaded book to a repository of search index with below fields. 
  Project is available [here](scanbooks). This project can be run as a CI-CD job/github action
  - **id:** Unique Id of each line.
  - **word:** Parsed Text Data
- Above `Node.js` project json is available [here](book-index-json/completeworks1.json)
- Created a `Svelte` project to display the data based on `json`
  Project is available [here](search). Used `Svelte` to avoid using any hosting services like Heroku/Netlify 

## Inspiration
- [Google Search](https://www.youtube.com/watch?v=tFq6Q_muwG0)
