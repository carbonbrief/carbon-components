<script>
	import { Header } from '$lib';
	import PropertyList from '$lib/docs/PropertyList.svelte';

	let props = {
		shareActive: { default: false, description: 'display share button' },
		shareTitle: { default: 'Carbon Brief', description: '' },
		shareLink: { default: 'https://www.carbonbrief.com', description: '' },
		shareText: { default: 'Clear on climate', description: '' },
		monoLogo: { default: 'false', description: '' },
		lightLogo: { default: 'true', description: '' }
	};
</script>

<h1>Header</h1>
<pre>
  {`<Header></Header>`}
</pre>
<Header />
<h2 clss="docs">Styling</h2>
<p>To provide styling options the component uses the following custom css properties</p>
<pre>
  var(--ui-theme-header, #4c9fd5) /* button and header background */
  var(--ui-theme-header-text, #ffffff); /* button text */
  var(--ui-theme-dark, #0b4572) /* button hover state */
  var(--ui-theme-hint, #c5e8ff) /* button active state */
  font-family: var(--sans-serif, "PT Sans" , Helvetica, sans-serif); /* button text */
</pre>
<h2 class="docs" id="properties">Properties</h2>
<PropertyList {props} />
