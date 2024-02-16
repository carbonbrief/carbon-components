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
<a href="/">/Carbon component system</a>
<slot />
<div class="page-footer" />

<style>
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
