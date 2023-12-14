<script>
	import Logo from "$lib/Logo.svelte";

	export let title = 'CHART TITLE';
	export let subtitle = 'chart subtitle';
	export let source = 'Carbon Brief';
	export let footerAdjust = "0em";
	export let lightLogo = false;

</script>

<section class="chart-frame stack" style="--footer-offset:{footerAdjust?"-"+footerAdjust:"0em"}">
	<div>
		<h2 class="title">{@html title}</h2>
		{#if subtitle != ''}<p class="subtitle">{@html subtitle}</p>{/if}
	</div>
	<div class="graphic stack">
		<slot />
	</div>
	<div class="chartfooter" class:footerAdjust={footerAdjust}>
		<div class="footer-text source">
			<span class="source">Source:</span> {source}
		</div>
		<div class="logo-container"><Logo light={lightLogo}></Logo></div>
	</div>
	
</section>

<style>
  :root{
    --s-5: calc(var(--s-4) / var(--ratio));
    --s-4: calc(var(--s-3) / var(--ratio));
    --s-3: calc(var(--s-2) / var(--ratio));
    --s-2: calc(var(--s-1) / var(--ratio));
    --s-1: calc(var(--s0) / var(--ratio));
    --s0: 1rem;
    --s1: calc(var(--s0) * var(--ratio));
    --s2: calc(var(--s1) * var(--ratio));
    --s3: calc(var(--s2) * var(--ratio));
    --s4: calc(var(--s3) * var(--ratio));
    --s5: calc(var(--s4) * var(--ratio));
  }

  .chart-frame{
		font-family: var(--sans-serif, 'PT-sans', sans-serif);
    max-width: var(--readable-max-width, 800px);
  }

	.chart-frame.stack > * {
		margin-block: 0;
	}

	.chart-frame.stack > * + * {
		margin-block-start: var(--s0, 1.5rem);
	}

  .chart-frame.stack {
		display: inline-flex;
		flex-direction: column;
		justify-content: flex-start;
	}
	
	.chartfooter{
		display: flex;
		flex-direction: row;
		max-width: var(--readable-max-width, 800);
		justify-content: space-between;
	}
	.chartfooter.footerAdjust{
		background-color: var(--custom-bg, white);
		margin-top: var(--footer-offset);
	}
  
	.logo-container{
		display: flex;
		flex-direction: row;
		justify-content:end;
		width: 140px;
		text-align: right;
	}

	.footer-text{
		width:100%;
	}

	.chart-frame {
		margin:0;
		padding:1px;
		position: relative;
		max-width: var(--readable-max-width, 800);
		background-color: var(--custom-bg, white);
		color:var(--custom-colour, black);
	}

	.source {
		font-size: 0.8rem;
		color: var(--custom-colour, grey);
		line-height: var(--s1);
		white-space: normal;
	}

	span.source{
		font-weight:700;
	}

	.subtitle,
	h2,
	.source {
		font-weight: normal;
	}

	.subtitle{
		font-size: 1rem;
		color: #666666;
		color: var(--custom-colour, grey);
		line-height: normal;
		word-wrap: break-word;
    white-space: normal;
	}

	h2{
		font-size: 1.375rem;
		font-weight: 700;
		line-height: 1.25;
		word-wrap: break-word;
    white-space: normal;
	}

	@media only screen and (max-width: 620px) {
		.title{
			font-size: var(--s1);
			line-height: var(--s1);
		}
    .subtitle, .source{
			font-size: var(--s0);
			line-height: var(--s0);
		}
	}

	@media only screen and (max-width: 500px) {
    .subtitle{
			font-size: var(--s0);
			line-height: var(--s0);
			margin-top: var(--s-1);
		}
	}


</style>
