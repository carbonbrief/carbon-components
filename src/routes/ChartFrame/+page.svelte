<script>
	import { ChartFrame } from '$lib';
	import PropertyList from '$lib/docs/PropertyList.svelte';
	let props = {
		title: { default: 'CHART TITLE', description: '' },
		subtitle: { default: 'chart subtitle', description: '' },
		source: { default: 'Carbon Brief', description: '' },
		footerAdjust: { default: '0em', description: '' },
		lightLogo: { default: false, description: '' },
		variant: { default: undefined, description: 'can be set to "social"'}
	};
</script>

<h1>ChartFrame</h1>
<pre>
{`<ChartFrame title="Chart title" subtitle="Chart subtitle (including units)">
	<img src="/830x500.png" alt="placeholder image 800 by 500 pixels" width="800" height="500" />
</ChartFrame>`}
</pre>
<ChartFrame title="Chart title" subtitle="Chart subtitle (including units)">
	<img src="/830x500.png" alt="placeholder image 800 by 500 pixels" width="800" height="500" />
</ChartFrame>

<h2>Social variant</h2>
<pre>
{`<ChartFrame variant="social" title="Social variant" subtitle="Chart subtitle (including units)">
	<img src="/830x500.png" alt="placeholder image 800 by 500 pixels" width="800" height="500" />
</ChartFrame>`}
</pre>
<ChartFrame variant="social" title="Social variant" subtitle="Chart subtitle (including units)">
	<img src="/830x500.png" alt="placeholder image 800 by 500 pixels" width="800" height="500" />
</ChartFrame>

<h2>Properties</h2>
<PropertyList {props} />
