<script>
	import fullLogo from '$lib/assets/cb-logo-full.svg';
	import fullLightLogo from '$lib/assets/cb-logo-full-light.svg';
	import fullMonoLogo from '$lib/assets/cb-logo-full-mono.svg';
	import fullMonoLightLogo from '$lib/assets/cb-logo-full-mono-light.svg';

	export let monochrome = false;
	export let light = false;

	let logoImage = fullLogo;
	if (monochrome) {
		if (light) {
			logoImage = fullMonoLightLogo;
		} else {
			logoImage = fullMonoLogo;
		}
	} else if (light) {
		logoImage = fullLightLogo;
	}
</script>

<div class="logo" style="background-image:url({logoImage})">
	<a href="https://www.carbonbrief.org" class="logo-link">
		<span class="screenreader-only">Carbon Brief</span>
	</a>
</div>

<style>
	.logo {
		background-size: contain;
		width: 100%;
		height: 2rem;
		background-repeat: no-repeat;
		opacity: 0.95;
	}

	.logo-link {
		display: inline-block;
		width: 100%;
		height: 100%;
	}

	.screenreader-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
	}
</style>
