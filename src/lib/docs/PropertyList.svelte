<script>
  export let props = {};
  function alpha(a,b){
    console.log(a, b)
    if(a[0] > b[0]){
      return 1;
    }
    return -1;
  }
</script>

<section class="properties">
	<ul>
		{#each Object.entries(props).sort(alpha) as [property, value]}
		<li>{property} {#if value.description!=''}<p>{value.description}</p>{/if}<p>Default value <strong>{String(value.default)}</strong></p></li>
		{/each}
	</ul>
</section>