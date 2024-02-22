<script>
	import { Footer } from '$lib';
</script>

<h1>Footer</h1>
<pre>{`<Footer />`}</pre>
<Footer />

<h2 clss="docs">Styling</h2>
<p>To provide styling options the component uses the following custom css properties</p>
<pre>
	var(--color-dark-background, #333333); /* component background */
	var(--color-light-text, #fffaf0); /* component text */
	
	/* spacing */
	var(--s-4, 0.2rem);
	var(--s0, 1rem);
	var(--s1, 1.5rem);
	var(--s3, 3.375rem)
	var(--s4, 5rem);

	/* fonts */
	var(--sans-serif, "PT Sans" , Helvetica, sans-serif);
	var(--sans-serif-narrow, "PT Sans Narrow" , Helvetica, sans-serif);
	var(--serif, "PT Serif", "Times New Roman", Times, serif);
</pre>
<p>The component also defines a global `screenreader-only` class</p>
<pre>
  {`:global(.screenreader-only){
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }`}
</pre>