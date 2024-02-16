<script>
	import {LinearAxes, GlobalStyle} from '$lib';
	import * as d3 from 'd3';
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
<section class="properties">
	<ul>
		<li>
			plotHeight
			<p>Default value <strong>500</strong></p>
		</li>
		<li>
			plotWidth
			<p>Default value <strong>1000</strong></p>
		</li>
		<li>
			margin
			<p>Default value <strong>{`{ top: 0, left: 0}`}</strong></p>
		</li>
		<li>
			yScale
			<p>Default value <strong>(d) => d</strong></p>
		</li>
		<li>
			xScale
			<p>Default value <strong>(d) => d</strong></p>
		</li>
		<li>
			yFormat
			<p>Default value <strong>(d) => d</strong></p>
		</li>
		<li>
			xFormat
			<p>Default value <strong>(d) => d</strong></p>
		</li>
		<li>
			yTickCount
			<p>Default value <strong>10</strong></p>
		</li>
		<li>
			xTickCount
			<p>Default value <strong>10</strong></p>
		</li>
	</ul>
</section>

<style>
	svg {
		box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
	}
</style>
