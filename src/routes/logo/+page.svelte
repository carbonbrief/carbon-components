<script>
	import { Logo } from '$lib';
</script>

<h1>Logo</h1>
<pre>{`<Logo></Logo>`}</pre>
<Logo />
<pre>{`<Logo monochrome={true}></Logo>`}</pre>
<Logo monochrome={true} />
<pre>{`<Logo light={true}></Logo>`}</pre>
<div class="dark">
	<Logo light={true} />
</div>
<pre>{`<Logo light={true} monochrome={true}></Logo>`}</pre>
<div class="dark">
	<Logo light={true} monochrome={true} />
</div>

<style>
	.dark {
		background-color: black;
	}
</style>
