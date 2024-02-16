<script>
	import {GlobalStyle} from "$lib";
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=PT+Sans+Narrow:wght@400;700&family=PT+Serif:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<GlobalStyle></GlobalStyle>

<article>
<nav class="sticky-nav"><a href="/">Carbon component system</a></nav>
<section>
<slot />
</section>
</article>
<div class="page-footer" />

<style>
	:global(body){
		margin: 0;
		padding: 0;
	}
	article{
		padding:0.5lh;
		padding-top: 0;
	}
	section{
		padding-top: 2lh;
	}

	.sticky-nav{
		font-weight: bold;
		position: fixed;
		backdrop-filter: blur(5px);
		display: flex;
		justify-content:start;
		background-color: rgba(255,255,255,0.5);
		margin: 0;
		width:100%;
	}

	.sticky-nav a{
		text-decoration: none;
		color: black;
	}
	.sticky-nav a:hover{
		text-decoration: none;
		color: red;
	}

	:global(h2.docs) {
		border-bottom: 1px solid black;
		margin-top: 2rem;
	}
	:global(.properties li) {
		font-family: monospace;
	}
	:global(.properties li p) {
		font-family: serif;
		padding-left: 1rem;
	}
	:global(.properties li p strong) {
		font-family: monospace;
	}
</style>
