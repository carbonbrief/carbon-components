<script>
	export let x = 0;
	export let y = 0;
	export let visible = false;
</script>

<div class="tooltip" class:invisible={!visible} style="--x:{x}px; --y:{y}px">
	<slot />
</div>

<style>
	.tooltip {
		padding: 0.2lh;
		position: absolute;
		top: min(calc(100dvh - 270px), var(--y));
		left: min(calc(100dvw - 250px), var(--x));
		border: 1px solid black;
		background-color: rgba(255, 255, 255, 0.8);
		transition-property: opacity;
		transition-duration: 200ms;
		pointer-events: none;
	}

	.tooltip.invisible {
		opacity: 0;
	}
</style>
