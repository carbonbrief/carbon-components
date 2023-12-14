<script>
  import ChartFrame from "$lib/ChartFrame.svelte";
  import ChartFrameSocial from "$lib/ChartFrameSocial.svelte";
  import Footer from "$lib/Footer.svelte";
  import Header from "$lib/Header.svelte";
  import Logo from "$lib/Logo.svelte";

</script>
<h1>Carbon components</h1>
<h2>ChartFrame</h2>
<ChartFrame></ChartFrame>
<h2>ChartFrameSocial</h2>
<ChartFrameSocial></ChartFrameSocial>
<h2>Footer</h2>
<Footer></Footer>
<h2>Header</h2>
<Header></Header>
<h2>Logo</h2>
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