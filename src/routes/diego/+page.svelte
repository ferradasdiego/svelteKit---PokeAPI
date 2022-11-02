<script>
	// export let data;
	// console.log("data",data);

	let inputNumberValue="";
	let inputNameValue="";
	let pokemon;

	async function getPkmByNumber(){
		let request = await fetch ("/api?pkmNumber="+inputNumberValue);
		pokemon = await request.json();
	}

	async function getPkmByName(){
		let request = await fetch ("/api?pkmNumber="+inputNameValue);
		pokemon = await request.json();
	}
</script>

<svelte:head>
	<title>Diego</title>
	<meta name="diego" content="Sobre diego" />
</svelte:head>

<div class="pokemon">
	{#if pokemon?.sprites}
		<img src={pokemon?.sprites?.front_default} alt="">
	{/if}

	<input type="number" bind:value={inputNumberValue}>
	<button on:click={getPkmByNumber}>Get pokemon by number</button>

	<input type="text" bind:value={inputNameValue}>
	<button on:click={getPkmByName}>Get pokemon by name</button>
</div>

<style>
	.pokemon{
		text-align:center;
	}
</style>

