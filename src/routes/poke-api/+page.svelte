<script>
	let inputNumberValue="";
	let inputNameValue="";
	let pokemon;

	async function getPkmByNumber(){
		let request = await fetch ("/poke-api?pkmNumber="+inputNumberValue);
		pokemon = await request.json();
		fillImputs();
	}

	async function getPkmByName(){
		let request = await fetch ("/poke-api?pkmNumber="+inputNameValue);
		pokemon = await request.json();
		fillImputs();
	}

	function fillImputs(){
		inputNumberValue=pokemon.id;
		inputNameValue=pokemon.name;
	}
</script>

<svelte:head>
	<title>Poke-api</title>
	<meta name="PokeApi" content="Consultas pokeapi" />
</svelte:head>

<div id="container">
{#if pokemon?.sprites}
	<div id="pokemon">
		<div id="pokemonImgs">
			<img class="pkmImg" src={pokemon?.sprites?.front_default} alt="">
			<img class="pkmImg" src={pokemon?.sprites?.back_default} alt="">
		</div>
		<div id="pokemonInfo">
			<p class="infoLabel">Id: {pokemon.id}</p>
			<p class="infoLabel">Name: {pokemon.name}</p>
			<p class="infoLabel">Height: {pokemon.height}</p>
			<p class="infoLabel">Weight: {pokemon.weight}</p>			
		</div>
	</div>
	{/if}

	<div id="inputsContainer">
		<div>
			<input type="number" bind:value={inputNumberValue}>
			<button on:click={getPkmByNumber}>Get pokemon by number</button>
		</div>

		<div>
			<input type="text" bind:value={inputNameValue}>
			<button on:click={getPkmByName}>Get pokemon by name</button>
		</div>
	</div>
</div>


<style>
	#container{
		display: flex;
    justify-content: space-around;
    align-items: center;
	}

	#pokemon{
		background-color:red;
		border: 1em solid red;
	}

	.pkmImg{
		border: 1px solid red;
	}

	#inputsContainer{

	}

	#pokemonImgs{
		background-color:white;
	}

	#pokemonInfo{

	}

	#pokemonImgs{
		display:flex;
	}

	.infoLabel{
		background-color:white;
		padding: 5px;
	}
</style>

