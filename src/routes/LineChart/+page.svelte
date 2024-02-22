<script>
	import { LineChart } from '$lib';

	export let data;
	console.log(data);
</script>

<h1>LineChart</h1>
<pre>{`<LineChart></LineChart>`}</pre>
<div class="container">
	<LineChart
		width={500}
		height={500}
		data={data.temperatures}
		dateExtent={data.extent}
		timeAccessor={(row) => new Date(row.year, 0, 1)}
		margin={{ top: 6, left: 25, bottom: 30, right: 2 }}
		valueTickCount={10}
		timeTickCount={6}
		keyPosition={{ x: 35, y: 6 }}
		keyOrientation={'vertical'}
		interactive={false}
	/>
</div>

<style>
	div.container {
		max-height: 500px;
	}
</style>
