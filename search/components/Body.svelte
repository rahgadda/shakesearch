<script>
  import { Row, Col, CardText, TextField } from "svelte-materialify";
  import Result from "./Result.svelte";
  import { onMount } from "svelte";

  const apiUrl =
    "https://rahgadda.github.io/shakesearch/book-index-json/completeworks1.json";
  let searchKeyWords = [];
  let value = "";
  $: hint = "Hint Text";
  let hintKeyWords = [];
  let displayText = [];

  function arrayIsEmpty(array) {
    //If it's not an array, return FALSE.
    if (!Array.isArray(array)) {
      return false;
    }
    //If it is an array, check its length property
    if (array.length == 0) {
      //Return TRUE if the array is empty
      return true;
    }
    //Otherwise, return FALSE.
    return false;
  }

  onMount(async () => {
    const response = await fetch(apiUrl);
    searchKeyWords = await response.json();
  });

  function displayResults() {
    if (
      !(
        hint === "Hint Text" ||
        hint === "Invalid Text" ||
        arrayIsEmpty(hintKeyWords)
      )
    ) {
      displayText = [];
        
      if (hintKeyWords.length > 20) {
        hintKeyWords = hintKeyWords.splice(0, 20);
      }

      try {
        hintKeyWords.forEach(element => {
          element.id > 6
            ? (displayText = [
                ...displayText,
                {
                  id: element.id,
                  word: searchKeyWords
                    .slice(element.id - 6, element.id + 6)
                    .map(e => e.word)
                    .join(" ")
                }
              ])
            : (displayText = [
                ...displayText,
                {
                  id: element.id,
                  word: searchKeyWords
                    .slice(0, element.id + 12)
                    .map(e => e.word)
                    .join(" ")
                }
              ]);
        });
      } catch (e) {
        console.log(e);
      }
    }
  }

  function updateHint() {
    hintKeyWords = searchKeyWords.filter(row => {
      if (row.word.includes(value.toLowerCase())) return row;
    });

    hint = value
      ? !arrayIsEmpty(hintKeyWords)
        ? hintKeyWords
            .slice(0, 10)
            .map(e => e.word)
            .join("\r")
        : "Invalid Text"
      : "Hint Text";
  }
</script>

<Row>
  <Col cols={2} />
  <Col cols={8}>
    <Col cols={12}>
      <br /><br />
      <Row>
        <Col cols={2} />
        <Col cols={8}>
          <TextField placeholder="Enter Search Text & Hit Enter" hint={hint} bind:value={value} on:keyup={updateHint} on:change={displayResults} dense rounded solo />
        </Col>
        <Col cols={2} />
      </Row><br /><br />
      <Row >
      {#if (!(hint === "Hint Text" || hint === "Invalid Text" || arrayIsEmpty(hintKeyWords)))}
        {#each displayText.slice(0, 20) as  item}
          <Result>
            <CardText>
              {item.word}
            </CardText>
          </Result> 
        {/each}
      {/if}
      </Row>
    </Col>
  </Col>
  <Col cols={2} />
</Row>