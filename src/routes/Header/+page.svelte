<script>
	import { Header } from '$lib';
	import PropertyList from '$lib/docs/PropertyList.svelte';

	let props = {
		title: { default: 'CHART TITLE', description: '' },
		shareTitle: { default: 'Carbon Brief', description: '' },
		shareLink: { default: 'https://www.carbonbrief.com', description: '' },
		shareText: { default: 'Clear on climate', description: '' }
	};
</script>

<h1>Header</h1>
<pre>
  {`<Header></Header>`}
</pre>
<Header />
<h2 clss="docs">Styling</h2>
<p>To provide styling options the componented uses the following custom css properties</p>
<pre>
  var(--ui-theme-background, #4c9fd5) /* button and header background */
  var(--ui-theme-dark, #0b4572) /* button hover state */
  var(--ui-theme-hint, #c5e8ff) /* button active state */
  var(--ui-theme-text, #ffffff); /* button text */
</pre>
<h2 class="docs" id="properties">Properties</h2>
<PropertyList {props} />
