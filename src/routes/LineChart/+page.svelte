<script>
	import { LineChart } from '$lib';

	export let data;
</script>

<h1>LineChart</h1>
<pre>{`<LineChart
  width={500}
  height={300}
  data={data.temperatures}
  dateExtent={data.extent}
  dateFormat={d=>d.getFullYear()}
  interactive={false}
  keyOrientation={'vertical'}
  keyPosition={{ x: 40, y: 6 }}
  lineProperties={data.sources}
  lineThickness={2}
  margin={{ top: 6, left: 35, bottom: 33, right: 10 }}
  timeAccessor={(row) => new Date(row.year, 0, 1)}
  timeTickCount={6}
  valueTickCount={10} />`}</pre>
<div class="container">
	<LineChart
		width={500}
		height={300}
		data={data.temperatures}
		dateExtent={data.extent}
		dateFormat={(d) => d.getFullYear()}
		lineProperties={data.sources}
		timeAccessor={(row) => new Date(row.year, 0, 1)}
		margin={{ top: 6, left: 35, bottom: 33, right: 10 }}
		valueTickCount={10}
		timeTickCount={6}
		keyPosition={{ x: 40, y: 6 }}
		keyOrientation={'vertical'}
		interactive={false}
		lineThickness={2}
	/>
</div>

<pre>{`<LineChart
  width={500}
  height={300}
  data={data.temperatures}
  dateExtent={data.extent}
  dateFormat={d=>d.getFullYear()}
  interactive={true}
  keyOrientation={'vertical'}
  keyPosition={{ x: 40, y: 6 }}
  lineProperties={data.sources}
  lineThickness={2}
  margin={{ top: 6, left: 35, bottom: 33, right: 10 }}
  timeAccessor={(row) => new Date(row.year, 0, 1)}
  timeTickCount={6}
  valueTickCount={10} />`}</pre>
<div class="container">
	<LineChart
		width={500}
		height={300}
		data={data.temperatures}
		dateExtent={data.extent}
		dateFormat={(d) => d.getFullYear()}
		lineProperties={data.sources}
		timeAccessor={(row) => new Date(row.year, 0, 1)}
		margin={{ top: 6, left: 35, bottom: 33, right: 10 }}
		valueTickCount={10}
		timeTickCount={6}
		keyPosition={{ x: 40, y: 6 }}
		keyOrientation={'vertical'}
		interactive={true}
		lineThickness={2}
	/>
</div>

<style>
	div.container {
		max-height: 500px;
	}
	:global(svg) {
		box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
	}
</style>
