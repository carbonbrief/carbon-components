<script>
	export let items = [];
	export let x = 0;
	export let y = 0;
	export let orientation = 'vertical';
</script>

<g class="key" transform="translate({x}, {y})">
	{#if (orientation = 'vertical')}
		{#each items as item, i}
			<g class="key-item" transform="translate(0,{i * 15})">
				<rect fill={item.colour} x="0" y="0" width="10" height="10" /><text dx={15} dy={10}
					>{item.lable}</text
				>
			</g>
		{/each}
	{/if}
</g>

<style>
	.key {
		font-family: var(--sans-serif-narrow, 'PT Sans Narrow', Helvetica, sans-serif);
		line-height: 1;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	text {
		pointer-events: none;
	}
</style>
