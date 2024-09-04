<script>
</script>

<h1>GlobalStyle</h1>
<ul>
	<li>A utility component that provides top level styling and styling tokens</li>
	<li>
		The best place to put this is in your root <pre>+layout.svelte</pre>
		so you only ude it once file see<a
			href="https://github.com/carbonbrief/carbon-components/blob/a6f5a6fa48c25aae4794eeb8c2dbab9a2c5d5b61/src/routes/%2Blayout.svelte#L13"
			>e.g. here</a
		>
	</li>
</ul>
<pre>
  {`<GlobalStyle></GlobalStyle>`}
</pre>

<style>
	li pre {
		display: inline;
	}
</style>
