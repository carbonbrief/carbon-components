<script>
  import { scaleLinear, scaleBand, max } from 'd3';

  export let width = 720;
  export let height = 500;
  export let data = [];
  export let margin = { top:20, left:20, bottom:20, right:20 };
  export let paddingInner = 0.1;
  export let paddingOuter = 0;
  export let valueAccessor = (d)=>d;
  export let labelAccessor = (d,i)=>`${i}`;
  export let fillAccessor = (d)=>'#629DD0';
  export let valueFormatter = (d)=>d;
  export let showValues = true;
  let textSpacing = 5;

  let plotWidth = width - (margin.left + margin.right);
  let plotHeight = height - (margin.top + margin.bottom);

  let valueScale = scaleLinear()
    .domain([0, max(data, valueAccessor)])
    .range([0, plotWidth]);

  let categoryScale = scaleBand()
    .domain(data.map(labelAccessor))
    .range([0, plotHeight])
    .paddingInner(paddingInner)
    .paddingOuter(paddingOuter);

  let bars = [];

  //layout method
  $: {
    bars = data.map((d)=>{
      return {
        x: 0,
        y: categoryScale( labelAccessor(d) ),
        width: valueScale( valueAccessor(d) ),
        height: categoryScale.bandwidth(),
        fill: fillAccessor(d),
        label: labelAccessor(d),
        value: valueFormatter(valueAccessor(d))
      }
    })
  }
  
</script>
<svg viewBox={`0 0 ${width} ${height}`}>
  <g class="plot" transform={`translate(${margin.left},${margin.top})`}>
    {#each bars as bar}
      <rect x={bar.x} y={bar.y} width={bar.width} height={bar.height} fill={bar.fill}></rect>
      {#if showValues}
        <text 
          x={bar.width + textSpacing}
          y={bar.y+bar.height/2}
          dominant-baseline="central"
          text-anchor={"start"}
          class="value-label">
          {bar.value}
        </text>
      {/if}
    {/each}
  </g>
  <g class="labels" transform={`translate(${margin.left},${margin.top})`}>
    {#each bars as bar}
    <text dx={bar.x - textSpacing} dy={bar.y+bar.height/2} text-anchor="end" dominant-baseline="central">{bar.label}</text>
    {/each}
  </g>
  <g class="v-axis" transform={`translate(${margin.left},${margin.top})`}>
    <line x1={0} y1={0} x2={0} y2={plotHeight} stroke="#333333" stroke-width="2"></line>
  </g>
</svg>