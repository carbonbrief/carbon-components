<script>
	import { browser } from '$app/environment';
	import CarbonLogo from './Logo.svelte';
	export let shareTitle = 'Carbon Brief';
	export let shareLink = 'https://www.carbonbrief.com';
	export let shareText = 'Clear on climate';
	let webShareSupported = false;
	let copySupported = false;
	let copied = false;
	if (browser) {
		console.log(navigator);
		webShareSupported = navigator && typeof navigator.share !== 'undefined';
		copySupported = navigator && typeof navigator.clipboard !== 'undefined';
	}

	$: console.log('web share', webShareSupported);
	$: console.log('clipboard', copySupported);

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
	<CarbonLogo monochrome={true} light={true} />
	<div class="sharing">
		{#if webShareSupported}
			<button on:click={share}>Share</button>
		{:else if copySupported}
			<button on:click={copy}>{copied ? '✅ Copied' : 'Copy link'}</button>
		{/if}
	</div>
</header>

<style>
	header {
		height: 1.9lh;
		display: grid;
		grid-template-columns: 1fr 1fr;
		background-color: var(--ui-theme-background, #4c9fd5);
		color: var(--ui-theme-text, #ffffff);
		padding: 0.8em 1.6em;
		position: inherit;
		max-width: 100%;
		z-index: 1;
	}

	.sharing {
		display: flex;
		justify-content: end;
		flex-direction: row;
	}

	button {
		transition-property: background-color, color;
		transition-duration: 0.3s;
		background-color: var(--ui-theme-background, #4c9fd5);
		color: var(--ui-theme-text, #ffffff);
		font-family: var(--san-serif, 'PT Sans');
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
