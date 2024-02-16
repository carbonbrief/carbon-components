<script>
  import LinearAxes from "$lib/LinearAxes.svelte";
</script>
<h1>LinearAxes</h1>
<ul>
  <li>Axes for SVG charts.</li>
  <li>The component Must be the descendent of an SVG</li>
</ul>
<pre>
  {`<LinearAxes 
    plotHeight={250}
    plotWidth={250}
    margin={{top:25,left:25}}>
  </LinearAxes>`}
</pre>
<svg width="300" height="300">
  <LinearAxes 
    plotHeight={250}
    plotWidth={250}
    margin={{top:25,left:25}}>
  </LinearAxes>
</svg>

<style>
  svg{
    border: 1px solid blue;
  }
</style>