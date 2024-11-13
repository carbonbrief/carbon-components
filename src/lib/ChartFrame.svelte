<script>
	import Logo from '$lib/Logo.svelte';

	export let variant;
	export let title = 'CHART TITLE';
	export let subtitle = 'chart subtitle';
	export let source = 'Carbon Brief';
	export let footerAdjust = '0em';
	export let lightLogo = false;
	export let textColour = '#000';
	export let bgColour = '#FFF';
	export let showLogo = true;
</script>

<section
	class="chart-frame stack {variant ? variant : ''}"
	style="--custom-colour:{textColour}; --custom-bg:{bgColour}; --footer-offset:{footerAdjust
		? '-' + footerAdjust
		: '0em'}"
>
	<div>
		<h2 class="title">{@html title}</h2>
		{#if subtitle != ''}<p class="subtitle">{@html subtitle}</p>{/if}
	</div>
	<div class="graphic stack">
		<slot />
	</div>
	<div class="chartfooter" class:footerAdjust>
		<div class="footer-text source">
			<span class="source">Source:</span>
			{source}
		</div>
		{#if showLogo}<div class="logo-container"><Logo light={lightLogo} /></div>{/if}
	</div>
</section>

<style>
	.chart-frame {
		font-family: var(--sans-serif, sans-serif);
		max-width: 800px;
		margin: 0;
		padding: 1px;
		position: relative;
		background-color: var(--custom-bg, white);
		color: var(--custom-colour, black);
	}

	.chart-frame.stack {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.chartfooter {
		display: flex;
		flex-direction: row;
		max-width: 800px;
		justify-content: space-between;
	}
	.chartfooter.footerAdjust {
		background-color: var(--custom-bg, white);
		margin-top: var(--footer-offset);
	}

	.logo-container {
		display: flex;
		flex-direction: row;
		justify-content: end;
		width: 140px;
		text-align: right;
	}

	.footer-text {
		width: 100%;
	}

	.source {
		font-size: 0.8rem;
		color: #888;
		line-height: 1rem;
		white-space: normal;
	}

	span.source {
		font-weight: 700;
	}

	.subtitle,
	h2,
	.source {
		font-weight: normal;
	}

	p.subtitle {
		font-family: var(--sans-serif);
		font-size: 1rem;
		color: #666666;
		color: var(--custom-colour, grey);
		line-height: normal;
		word-wrap: break-word;
		white-space: normal;
	}

	h2.title {
		font-family: var(--sans-serif);
		font-size: 1.375rem;
		line-height: 1.25;
		font-weight: bold;
		word-wrap: break-word;
		white-space: normal;
	}

	@media only screen and (max-width: 620px) {
		.title {
			font-size: var(--s1);
			line-height: var(--s1);
		}
		.subtitle,
		.source {
			font-size: var(--s0);
			line-height: var(--s0);
		}
	}

	@media only screen and (max-width: 500px) {
		.subtitle {
			font-size: var(--s0);
			line-height: var(--s0);
			margin-top: var(--s-1);
		}
	}

	.social .source {
	}

	.social p.subtitle {
		font-size: 1.25rem;
		line-height: 1.78rem;
		font-family: var(--sans-serif);
		font-weight: 400;
		margin-top: 0.2rem;
	}

	.social h2.title {
		line-height: 1.78rem;
		font-size: 1.875rem;
		font-family: var(--sans-serif-narrow);
		font-weight: 700;
		word-wrap: break-word;
		white-space: normal;
		margin: 0;
	}
</style>
