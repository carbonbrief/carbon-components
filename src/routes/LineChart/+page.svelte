<script>
	import { LineChart } from '$lib';

	export let data;
	console.log(data);
</script>

<h1>LineChart</h1>
<pre>{`<LineChart
  width={500}
  height={500}
  data={data.temperatures}
  dateExtent={data.extent}
  dateFormat={d=>d.getFullYear()}
  lineProperties={data.sources}
  timeAccessor={(row) => new Date(row.year, 0, 1)}
  margin={{ top: 6, left: 35, bottom: 33, right: 10 }}
  valueTickCount={10}
  timeTickCount={6}
  keyPosition={{ x: 40, y: 6 }}
  keyOrientation={'vertical'}
  interactive={false}
/>`}</pre>
<div class="container">
	<LineChart
		width={500}
		height={500}
		data={data.temperatures}
		dateExtent={data.extent}
    dateFormat={d=>d.getFullYear()}
    lineProperties={data.sources}
		timeAccessor={(row) => new Date(row.year, 0, 1)}
		margin={{ top: 6, left: 35, bottom: 33, right: 10 }}
		valueTickCount={10}
		timeTickCount={6}
		keyPosition={{ x: 40, y: 6 }}
		keyOrientation={'vertical'}
		interactive={false}
	/>
</div>

<style>
	div.container {
		max-height: 500px;
	}
</style>
