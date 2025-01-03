<script>
	import { BROWSER } from 'esm-env';
	import CarbonLogo from '$lib/Logo.svelte';
	export let shareActive = false;
	export let shareTitle = 'Carbon Brief';
	export let shareLink = 'https://www.carbonbrief.com';
	export let shareText = 'Clear on climate';
	let webShareSupported = false;
	let copySupported = false;
	let copied = false;
	if (BROWSER) {
		webShareSupported = navigator && typeof navigator.share !== 'undefined';
		copySupported = navigator && typeof navigator.clipboard !== 'undefined';
	}

	function share() {
		navigator
			.share({
				title: shareTitle,
				text: shareText,
				url: shareLink
			})
			.then(
				() => {
					console.log('share success');
				},
				() => {
					console.log('share failed');
				}
			);
	}

	function copy() {
		navigator.clipboard.writeText(shareLink).then(
			() => {
				console.log('copy success');
				copied = true;
				setTimeout(() => {
					copied = false;
				}, 2000);
			},
			() => {
				console.log('copy failed');
			}
		);
	}
</script>

<header class="box" id="top">
	<a href="https://www.carbonbrief.org"><CarbonLogo monochrome={false} light={true} /></a>
	{#if shareActive}
		<div class="sharing">
			{#if webShareSupported}
				<button on:click={share}>Share</button>
			{:else if copySupported}
				<button on:click={copy}>{copied ? '✅ Copied' : 'Copy link'}</button>
			{/if}
		</div>
	{/if}
</header>

<style>
	header {
		display: grid;
		grid-template-columns: 1fr 1fr;
		background-color: var(--ui-theme-header, #4c9fd5);
		color: var(--ui-theme-text, #ffffff);
		padding: 0.8em;
		padding-bottom: 0.5em;
		padding-left: 1.2em;
		position: inherit;
		max-width: 100%;
		z-index: 1;
	}

	a:hover {
		background-color: var(--ui-theme-header, #4c9fd5);
	}
	.sharing {
		display: flex;
		justify-content: end;
		flex-direction: row;
	}

	button {
		transition-property: background-color, color;
		transition-duration: 0.3s;
		background-color: var(--ui-theme-header, #4c9fd5);
		color: var(--ui-theme-header-text, #ffffff);
		font-family: var(--sans-serif, 'PT Sans', Helvetica, sans-serif);
		font-weight: bold;
		font-size: 0.9rem;
		padding: 0.3lh 0.8lh;
		border-radius: 10px;
		border: 0.1lh solid white;
		display: inline-flex;
		align-items: center;
		cursor: pointer;
		justify-content: center;
	}
	button:hover {
		background-color: var(--ui-theme-dark, #0b4572);
	}
	button:active,
	button:target {
		color: var(--ui-theme-dark, #0b4572);
		background-color: var(--ui-theme-hint, #c5e8ff);
	}
</style>
