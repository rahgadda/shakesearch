<script>
  import {
    AppBar,
    Container,
    Row,
    Col,
    Footer,
    Select,
    MaterialApp
  } from "svelte-materialify";
  import Header from "./Header.svelte";
  import MyFooter from "./MyFooter.svelte";
  import Body from "./Body.svelte";
</script>

<MaterialApp>
		<Header />
		<Body />
		<MyFooter />
</MaterialApp>