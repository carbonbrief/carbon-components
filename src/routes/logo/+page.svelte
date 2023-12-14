<script>
  import Logo from "$lib/Logo.svelte";
</script>

<h1>Logo</h1>
<pre>{`<Logo></Logo>`}</pre>
<Logo></Logo>
<pre>{`<Logo monochrome={true}></Logo>`}</pre>
<Logo monochrome={true}></Logo>
<pre>{`<Logo light={true}></Logo>`}</pre>
<div class="dark">
  <Logo light={true}></Logo>
</div>
<pre>{`<Logo light={true} monochrome={true}></Logo>`}</pre>
<div class="dark">
  <Logo light={true} monochrome={true}></Logo>
</div>

<style>
  .dark{
    background-color: black;
  }
</style>