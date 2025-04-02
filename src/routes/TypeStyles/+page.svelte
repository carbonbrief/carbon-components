
<h1>Site type styles</h1>
<article class="site-style">
<h1>Heading 1, PT Sans bold 2.75rem</h1>
<details>
	<summary>CSS</summary>
	<pre>
font-size: 2.75rem;
font-family: 'PT Sans', sans-serif;
font-weight: bold;
</pre>
</details>

<h2>Heading 2, PT Sans bold 2rem</h2>
<details>
	<summary>CSS</summary>
	<pre>
font-size: 2rem;
font-family: 'PT Sans', sans-serif;
font-weight: bold;
</pre>
</details>

<h3>Heading 3, PT Sans bold 1.7rem</h3>
<details>
	<summary>CSS</summary>
	<pre>
font-size: 1.75rem;
font-family: 'PT Sans', sans-serif;
font-weight: bold;
</pre>
</details>

<p>
	<strong>Body copy, PT Serif 1.25rem, line height 2.25rem, max-width 46rem</strong>. Carbon Brief
	is a UK-based website covering the latest developments in climate science, climate policy and
	energy policy.
</p>
<details>
	<summary>CSS</summary>
	<pre>
font-size: 1.25rem;
font-family: 'PT Serif', sans-serif;
line-height: 2.25rem;
max-width:46rem;
</pre>
</details>

<h2 class="chart-title">Inline chart title, bold 1.375rem,</h2>
<details>
	<summary>CSS</summary>
	<pre>
font-family: 'PT Sans', sans-serif;
font-size: 1.375rem;
line-height: 1.25rem;
</pre>
</details>

<p class="caption">Captions & chart sub titles, PT Sans 1rem, line height 1.5rem</p>
<details>
	<summary>CSS</summary>
	<pre>
font-family: 'PT Sans', sans-serif;
font-size: 1rem;
line-height: 1.5rem;
</pre>
</details>

<p class="source"><strong>Source:</strong> PT Sans 0.8rem, #666666</p>
<details>
	<summary>CSS</summary>
	<pre>
  font-family: 'PT Sans', sans-serif;
  font-size: 0.8rem;
  color: #666666;
</pre>
</details>
</article>

<style>
	.site-style summary {
		font-family: 'PT Sans', sans-serif;
		font-size: 1rem;
		display: block;
		border-bottom: 1px dotted #666666;
		display: inline-block;
		cursor: pointer;
	}
	.site-style h1 {
		font-size: 2.75rem;
		font-family: 'PT Sans', sans-serif;
		font-weight: bold;
	}
	.site-style h2 {
		font-size: 2rem;
		font-family: 'PT Sans', sans-serif;
		font-weight: bold;
	}

	.site-style h3 {
		font-size: 1.75rem;
		font-family: 'PT Sans', sans-serif;
		font-weight: bold;
	}

	.site-style p {
		font-size: 1.25rem;
		font-family: 'PT Serif', sans-serif;
		line-height: 2.25rem;
		max-width: 46rem;
	}

	.site-style .chart-title {
		font-size: 1.375rem;
		font-weight: bold;
		line-height: 1.25rem;
	}

	.site-style .caption {
		font-family: 'PT Sans', sans-serif;
		font-size: 1rem;
		line-height: 1.5rem;
	}
	.site-style .source {
		font-family: 'PT Sans', sans-serif;
		font-size: 0.8rem;
		color: #666666;
	}

	.site-style pre {
		max-width: 46rem;
		color: #666666;
		border-inline-start: 1px dotted #666666;
		padding-inline-start: 0.5rem;
	}
</style>
