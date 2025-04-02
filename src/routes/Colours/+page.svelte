<script>
  import * as colours from "$lib/colours.js";
  function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ] : null;
  }
</script>
<h1>Colours</h1>
<h2>Primary blue</h2>
<div class="swatch-grid">
  {@render colourArray('blue')}
</div>
<h2>Secondary red</h2>
{@render colourArray('red')}
<h2>Secondary grey</h2>
{@render colourArray('grey')}
<h2>Tertiary yellow</h2>
{@render colourArray('yellow')}
<h2>Tertiary purple</h2>
{@render colourArray('purple')}
<h2>Tertiary orange</h2>
{@render colourArray('orange')}
<h2>Tertiary green</h2>
{@render colourArray('green')}

{#snippet swatch(colourHex, name)}
  <div class="swatch">
    <h3>{name}</h3>
    <pre>
{colourHex}
rgb({hexToRgb(colourHex).join(', ')})</pre>
    <svg width={50} height={50}>
      <rect x={0} y={0} width={50} height={50} fill={colourHex}></rect>
    </svg>
  </div>
{/snippet }

{#snippet colourArray(colour)}
<div class="swatch-grid">
  {#each colours[colour] as hex, i}
    {@render swatch(hex, `colours.${colour}[${i}]`)}
  {/each}
</div>
{/snippet}

<style>
  .swatch-grid{
    display: flex;
    max-width: 100%;
    overflow-x: auto;
  }
  .swatch{
    margin-right: 1rem;
  }
  .swatch h3{
    font-family: monospace;
    margin-bottom: 0;
    font-size: 0.8rem;
  }
  .swatch pre{
    font-size: 0.8rem;
    margin-bottom: 2px;
  }
  h2{
    margin-bottom: 0rem;
  }
</style>