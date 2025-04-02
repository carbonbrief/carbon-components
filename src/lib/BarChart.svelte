<script>
	import { scaleLinear, scaleTime, line, extent, area } from 'd3';
	import {Colours} from '$lib';
	import LinearAxes from '$lib/LinearAxes.svelte';
	import Tooltip from '$lib/Tooltip.svelte';
	import Key from '$lib/SVGKey.svelte';

	let categorical = Colours.categoricalAreas;

	export let width = 720;
	export let height = 600;
	export let data = [];
	export let margin = { top: 20, left: 70, bottom: 100, right: 20 };
	export let lineProperties = [];
	export let timeAccessor = (d, i) => new Date();
	export let dateFormat = (d) => d;
	export let valueFormat = (d) => d;
	export let dateExtent;
	export let valueExtent;
	export let lineColors = categorical;
	export let areaColors = ['rgba(0,0,0,0.2)', 'rgba(255,0,0,0.2)'];
	export let areaProperties = [];
	export let lineThickness = 3;
	export let valueTickCount = 5;
	export let timeTickCount = 5;
	export let keyPosition = { x: 0, y: 0 };
	export let keyOrientation = 'vertical';
	export let key = true;
	export let interactive = false;

	let chartSVG;
	let SVGpoint;
	$: {
		if (chartSVG) {
			SVGpoint = chartSVG.createSVGPoint();
		}
	}

	let plotWidth = width - (margin.left + margin.right);
	let plotHeight = height - (margin.top + margin.bottom);
	let sortedData;
	let sorter = (a, b) => {
		return timeAccessor(a).getTime() - timeAccessor(b).getTime();
	};

	if (!dateExtent) {
		dateExtent = [timeAccessor(data[0]), timeAccessor(data[data.length - 1])];
	}

	if (!valueExtent) {
		valueExtent = [];
		for (let i = 0; i < lineProperties.length; i++) {
			let localExtent = extent(data, (d) => Number(d[lineProperties[i]]));
			if (!valueExtent[0]) {
				valueExtent = [...localExtent];
			}
			valueExtent = [
				Math.min(Number(localExtent[0]), Number(valueExtent[0])),
				Math.max(Number(localExtent[1]), Number(valueExtent[1]))
			];
		}
	}

	let valueScale = scaleLinear().domain(valueExtent).range([plotHeight, 0]).nice();

	let timeScale = scaleTime().domain(dateExtent).range([0, plotWidth]);

	let chartLines = [];
	let chartAreas = [];

	//layout method
	$: {
		sortedData = data
			.sort(sorter) // order the points
			.filter((row) => {
				// don't plot anythign outside an explicitly set date range
				if (dateExtent) {
					return (
						timeAccessor(row).getTime() >= dateExtent[0].getTime() &&
						timeAccessor(row).getTime() <= dateExtent[1].getTime()
					);
				} else {
					return true;
				}
			});

		chartLines = lineProperties.map((property, i) => {
			let lineGenerator = line()
				.x((row) => timeScale(timeAccessor(row)))
				.y((row) => valueScale(Number(row[property])));
			let renderData = sortedData.filter((row) => row[property]);
			return {
				path: lineGenerator(renderData),
				stroke: lineColors[i]
			};
		});

		chartAreas = areaProperties.map((properties, i) => {
			let areaGenerator = area()
				.x((row, i) => timeScale(timeAccessor(sortedData[i])))
				.y0((row) => valueScale(Number(row[properties.min])))
				.y1((row) => valueScale(Number(row[properties.max])));

			return {
				path: areaGenerator(sortedData),
				fill: areaColors[i]
			};
		});
	}

	let pointerPos = { x: 0, y: 0 };
	let pointerActive = false;
	let highlightData = {};

	function mouseMove(ev, d) {
		pointerPos = { x: ev.layerX, y: ev.layerY };
		highlightData = d;
		pointerActive = true;
	}

	function toolTipOff() {
		pointerActive = false;
	}
</script>

<div class="chart-container">
	<svg
		bind:this={chartSVG}
		viewBox={`0 0 ${width} ${height}`}
		on:mouseout={toolTipOff}
		on:blur={toolTipOff}
	>
		<LinearAxes
			{margin}
			{plotHeight}
			{plotWidth}
			xScale={timeScale}
			yScale={valueScale}
			xFormat={dateFormat}
			yFormat={valueFormat}
			xTickCount={timeTickCount}
			yTickCount={valueTickCount}
		/>

		<g class="plot" transform={`translate(${margin.left},${margin.top})`}>
			{#each chartAreas as area}
				<path
					d={area.path}
					fill={area.fill}
					stroke="none"
					stroke-width={lineThickness}
					stroke-linejoin="round"
				/>
			{/each}
			{#each chartLines as line}
				<path
					d={line.path}
					stroke={line.stroke}
					fill="none"
					stroke-width={lineThickness}
					stroke-linejoin="round"
				/>
			{/each}
		</g>

		{#if interactive && pointerActive}
			<g class="graticule" transform={`translate(${margin.left},${margin.top})`}>
				<line
					x1={timeScale(timeAccessor(highlightData))}
					stroke="rgba(0,0,0,1)"
					y1={0}
					x2={timeScale(timeAccessor(highlightData))}
					y2={plotHeight}
				/>
			</g>
		{/if}

		{#if key}
			<Key
				orientation={keyOrientation ? keyOrientation : 'vertical'}
				x={keyPosition.x}
				y={keyPosition.y}
				items={lineProperties.map((d, i) => ({
					lable: d,
					colour: lineColors[i]
				}))}
			/>
		{/if}
		{#if interactive}
			<g class="interaction-pane" transform={`translate(${margin.left},${margin.top})`}>
				{#each data as datum, i}
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<rect
						x={timeScale(timeAccessor(datum))}
						y={0}
						width={data[i + 1]
							? timeScale(timeAccessor(data[i + 1])) - timeScale(timeAccessor(datum))
							: width - timeScale(timeAccessor(datum))}
						height={plotHeight}
						fill="rgba(0,0,0,0)"
						on:mousemove={(e) => mouseMove(e, datum)}
					/>
				{/each}
			</g>
		{/if}
	</svg>
	{#if interactive}
		<Tooltip x={pointerPos.x} y={pointerPos.y} visible={pointerActive}>
			<p class="tip">{dateFormat(timeAccessor(highlightData))}</p>
			<ul>
				{#each lineProperties as line, i}
					{#if !isNaN(highlightData[line])}
						<li>
							<span style="background-color:{lineColors[i]}" class="swatch" />{line}
							<span class="tip value">{valueFormat(highlightData[line])}</span>
						</li>
					{/if}
				{/each}
			</ul>
		</Tooltip>
	{/if}
</div>

<style>
	.swatch {
		display: inline-block;
		width: 0.8lh;
		height: 0.8lh;
		margin-right: 0.2lh;
		background-color: grey;
	}

	.chart-container {
		position: relative;
		overflow: visible;
		max-width: 500px;
	}

	ul {
		margin: 0;
		padding: 0;
	}
	li {
		font-family: var(--sans-serif-narrow);
		line-height: 1;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	p.tip {
		font-family: var(--sans-serif);
		font-weight: bold;
	}
	.tip.value {
		font-weight: bold;
		align-items: end;
		width: 100%;
	}
</style>
