<script>
	import Pokemon from "./Pokemon.svelte"
	import {persistentPokemon} from "$lib/stores.js"
	import {onMount} from "svelte" 
	let inputNumberValue="";
	let inputNameValue="";
	let pokemon;

	async function getPkmByNumber(){
		let request = await fetch ("/poke-api?pkmNumber="+inputNumberValue);
		pokemon = await request.json();
		persistentPokemon.set(pokemon);

		console.log(pokemon);
		fillImputs();
	}

	async function getPkmByName(){
		let request = await fetch ("/poke-api?pkmNumber="+inputNameValue);
		pokemon = await request.json();
		persistentPokemon.set(pokemon);
		fillImputs();
	}

	function fillImputs(){
		inputNumberValue=$persistentPokemon?.id;
		inputNameValue=$persistentPokemon?.name;
	}

	onMount(()=>{
		fillImputs()
	})

</script>

<svelte:head>
	<title>Poke-api</title>
	<meta name="PokeApi" content="Consultas pokeapi" />
</svelte:head>

<div id="container">
	<Pokemon pokemon={$persistentPokemon}/>

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

	#inputsContainer{

	}
</style>

