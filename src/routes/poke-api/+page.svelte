<script>
	let inputNumberValue="";
	let inputNameValue="";
	let pokemon;

	async function getPkmByNumber(){
		let request = await fetch ("/poke-api?pkmNumber="+inputNumberValue);
		pokemon = await request.json();
	}

	async function getPkmByName(){
		let request = await fetch ("/poke-api?pkmNumber="+inputNameValue);
		pokemon = await request.json();
	}
</script>

<svelte:head>
	<title>Poke-api</title>
	<meta name="PokeApi" content="Consultas pokeapi" />
</svelte:head>

<div class="pokemon">
	{#if pokemon?.sprites}
		<img src={pokemon?.sprites?.front_default} alt="">
		<img src={pokemon?.sprites?.back_default} alt="">
		<p>Id: {pokemon.id}</p>
		<p>Name: {pokemon.name}</p>
		<p>Height: {pokemon.height}</p>
		<p>Weight: {pokemon.weight}</p>
	{/if}
</div>

<div>
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

