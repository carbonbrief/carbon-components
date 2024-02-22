<script>
	import { LinearAxes } from '$lib';
	import PropertyList from '$lib/docs/PropertyList.svelte';
	import * as d3 from 'd3';

	let props = {
		plotHeight: { default: 500, description: '' },
		plotWidth: { default: 1000, description: '' },
		margin: { default: '{ top: 0, left: 0, bottom: 0, right: 0 }', description: '' },
		yScale: { default: '(d) => d', description: '' },
		xScale: { default: '(d) => d', description: '' },
		yFormat: { default: '(d) => d', description: '' },
		xFormat: { default: '(d) => d', description: '' },
		yTickCount: { default: 10, description: '' },
		xTickCount: { default: 10, description: '' }
	};
</script>

<h1>LinearAxes</h1>
<ul>
	<li>Axes for SVG charts.</li>
	<li>The component Must be the descendent of an SVG</li>
	<li>Example: <a href="#basic">basic</a></li>
	<li>Example: <a href="#scales">scales</a></li>
	<li>Example: <a href="#formatting">formatting</a></li>
	<li><a href="#properties">Properties</a></li>
</ul>
<h2 class="docs" id="basic">Basic...</h2>
<pre>
  {`<LinearAxes 
    plotHeight={250}
    plotWidth={250}
    margin={{top:25,left:25}} />`}
</pre>
<svg width="300" height="300">
	<LinearAxes plotHeight={250} plotWidth={250} margin={{ top: 25, left: 25 }} />
</svg>

<h2 class="docs" id="scales">With scales...</h2>
<pre>
  {`<LinearAxes
    xScale={d3.scaleLinear().domain([0,100]).range([0, 250])}
    yScale={d3.scaleLinear().domain([0,10]).range([250, 0])}
    plotHeight={250}
    plotWidth={250}
    margin={{ top: 25, left: 25 }} />`}
</pre>
<svg width="300" height="300">
	<LinearAxes
		xScale={d3.scaleLinear().domain([0, 100]).range([0, 250])}
		yScale={d3.scaleLinear().domain([0, 10]).range([250, 0])}
		plotHeight={250}
		plotWidth={250}
		margin={{ top: 25, left: 25 }}
	/>
</svg>

<h2 class="docs" id="formatting">With tick formatting...</h2>
<pre>
  {`<LinearAxes
    xScale={d3.scaleLinear().domain([0,10]).range([0, 320])}
    yScale={d3.scaleLinear().domain([0,10]).range([250, 0])}
    xFormat={d=>\`$\{d\}.0\`}
    yFormat={d=>\`£$\{d * 100\}\`}
    plotHeight={250}
    plotWidth={320}
    margin={{ top: 25, left: 55 }} />`}
</pre>
<svg width="400" height="300">
	<LinearAxes
		xScale={d3.scaleLinear().domain([0, 10]).range([0, 320])}
		yScale={d3.scaleLinear().domain([0, 10]).range([250, 0])}
		xFormat={(d) => `${d}.0`}
		yFormat={(d) => `£${d * 100}`}
		plotHeight={250}
		plotWidth={320}
		margin={{ top: 25, left: 55 }}
	/>
</svg>

<h2 class="docs" id="properties">Properties</h2>
<PropertyList {props} />

<style>
	svg {
		box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
	}
</style>
