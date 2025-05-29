<script>
  import {Colours} from "$lib";
  function hexToRgb(hex) {
    return Object.values(Colours.hexToRgb(hex)).join(', ')
  }
  console.log('C', Colours)
</script>
<h1>Colours</h1>
<h2>Colours.hexToRgb(hexCode)</h2>
<p>Convert hex codes to RGB values</p>
<pre class="js">
import {'{Colours}'} from '@carbon-brief/carbon';

let rgbValues = Colours.hexToRgb('#FF0000');
</pre>
<p>Result: <span class="mono">rgbValues = {`{r:255, g:0, b:0}`}</span></p>
<hr>
<h2>Primary blue</h2>
<div class="swatch-grid">
  {@render colourArray('blue')}
</div>
<p>Note: <strong>blue[5]</strong> is for use instead of <strong>blue[4]</strong> in the case of lines or small areas</p>
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
<h2>Categorical areas</h2>
{@render colourArray('categoricalAreas')}
<h2>Categorical lines</h2>
{@render colourArray('categoricalLines')}
<h2>Theme gender</h2>
{@render colourObject('gender')}


{#snippet swatch(colourHex, name)}
  <div class="swatch">
    <h3>{name}</h3>
    <pre>
{colourHex}
rgb({hexToRgb(colourHex)})</pre>
    <svg width={100} height={50}>
      <rect x={0} y={0} width={100} height={50} fill={colourHex}></rect>
    </svg>
  </div>
{/snippet }

{#snippet colourArray(a)}
<div class="swatch-grid">
  {#each Colours[a] as hex, i}
    {@render swatch(hex, `Colours.${a}[${i}]`)}
  {/each}
</div>
{/snippet}

{#snippet colourObject(o)}
<div class="swatch-grid">
  {#each Object.entries(Colours[o]) as [key, hex], i}
    {@render swatch(hex, `Colours.${o}[${key}]`)}
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
  .mono{
    font-family: monospace;
  }
  pre.js{
    padding-left: 1rem;
    border-left:1px dotted black
  }
</style>