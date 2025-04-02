<script>
	import {Colours} from '$lib';
	let darkGrey = Colours.grey[0];

	export let plotHeight = 500;
	export let plotWidth = 1000;
	export let margin = { top: 0, left: 0, bottom: 0, right: 0 };
	export let yScale = (d) => d;
	export let xScale = (d) => d;
	export let yFormat = (d) => d;
	export let xFormat = (d) => d;
	export let yTickCount = 10;
	export let xTickCount = 10;
</script>

<g class="axes" transform={`translate(${margin.left},${margin.top})`}>
	<line x1={0} y1={0} x2={0} y2={plotHeight} stroke-width={2} stroke={darkGrey} />
	<line x1={0} y1={plotHeight} x2={plotWidth} y2={plotHeight} stroke-width={2} stroke={darkGrey} />
	{#if yScale.ticks}
		{#each yScale.ticks(yTickCount) as tick}
			<line x1={0} y1={yScale(tick)} x2={-5} y2={yScale(tick)} stroke-width={2} stroke={darkGrey} />
			<text class="y-tick" text-anchor="end" x={-10} y={yScale(tick) + 7}>{yFormat(tick)}</text>
		{/each}
	{/if}
	{#if xScale.ticks}
		{#each xScale.ticks(xTickCount) as tick}
			<line
				x1={xScale(tick)}
				y1={plotHeight}
				x2={xScale(tick)}
				y2={plotHeight + 5}
				stroke-width={2}
				stroke={darkGrey}
			/>
			<text class="x-tick" text-anchor="middle" x={xScale(tick)} y={plotHeight + 25}
				>{xFormat(tick)}</text
			>
		{/each}
	{/if}
</g>

<style>
	text {
		font-family: var(--sans-serif-narrow, sans-serif);
		pointer-events: none;
	}

	.x-tick {
		alignment-baseline: central;
	}

	.axes line {
		stroke-width: 1;
	}
</style>
