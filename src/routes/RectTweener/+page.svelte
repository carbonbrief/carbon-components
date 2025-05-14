<script>
	import { RectTweener } from '$lib';
	import PropertyList from '$lib/docs/PropertyList.svelte';

	let properties = {
		duration: {
			default: 500,
			description: 'The time in miliseconds that tweens will take to complete'
		},
		width: { default: 100, description: '' },
		height: { default: 100, description: '' },
		x: { default: 0, description: '' },
		y: { default: 0, description: '' },
		fill: { default: 'rgba(0,0,0,0.5)', description: 'not yet tweenable' },
		stroke: { default: 'rgb(0,0,0)', description: 'not yet tweenable' },
		strokeWidth: { default: '2', description: '' }
	};

	let egWidth = $state(100);
	let egHeight = $state(100);
	let egX = $state(100);
	let egY = $state(100);

	function randomExample() {
		egWidth = Math.random() * 200;
		egHeight = Math.random() * 200;
		egX = Math.random() * (500 - egWidth);
		egY = Math.random() * (500 - egHeight);
	}
</script>

<h1>RectTweener</h1>
<ul>
	<li>A utility component that provides a tweenable version of the SVG rect primitive</li>
	<li>The component must be the descenent of and SVG</li>
	<li>Example: <a href="#basic">basic</a></li>
	<li>Interactive: <a href="#basic">interactive</a></li>
	<li><a href="#properties">Properties</a></li>
</ul>
<h2 class="docs" id="basic">Basic usage</h2>
<pre>{`<svg width={100} height={100}>
  <RectTweener 
    x={25}
    y={25}
    width={50}
    height={50}
    fill={"rgba(56,200,0,0.7)"}
    stroke={"rgb(56,200,0)"}
    strokeWidth={4}>
  </RectTweener>
</svg>`}</pre>
<svg width={100} height={100}>
	<RectTweener
		x={25}
		y={25}
		width={50}
		height={50}
		fill={'rgba(56,200,0,0.7)'}
		stroke={'rgb(56,200,0)'}
		strokeWidth={4}
	></RectTweener>
</svg>

<h2 class="docs" id="interactive">Interactive</h2>
<pre class="code-js">{`
  let egWidth = $state(100);
  let egHeight = $state(100);
  let egX = $state(100);
  let egY = $state(100);
  
  function randomExample(){
    egWidth = Math.random() * 200;
    egHeight = Math.random() * 200;
    egX = Math.random() * (500-egWidth);
    egY = Math.random() * (500-egHeight);
  }
`}</pre>
<pre class="code-svelte">{`
<button onclick={randomExample}>CHANGE</button>
<br>
<svg width={100} height={100}>
  <RectTweener 
    x={25}
    y={25}
    width={50}
    height={50}
    fill={"rgba(56,200,0,0.7)"}
    stroke={"rgb(56,200,0)"}
    strokeWidth={4}>
  </RectTweener>
</svg>`}</pre>

<button onclick={randomExample}>CHANGE</button>
<br />
<svg width={500} height={500}>
	<RectTweener
		x={egX}
		y={egY}
		width={egWidth}
		height={egHeight}
		fill={'rgba(56,200,0,0.7)'}
		stroke={'rgb(56,200,0)'}
		strokeWidth={4}
	></RectTweener>
</svg>

<h2 class="docs" id="properties">Properties</h2>
<PropertyList props={properties} />

<style>
	:global(svg) {
		box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
	}
</style>
