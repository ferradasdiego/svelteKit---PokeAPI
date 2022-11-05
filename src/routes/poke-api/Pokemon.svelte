<script>
  export let pokemon

  const pokemonTypes= {
    "normal":"#DDCCAA",
    "fighting":"#FF6A6A",
    "flying":"#BAAAFF",
    "poison":"#CC88BB",
    "ground":"#DEB887",
    "rock":"#CD853F",
    "bug":"#99CC33",
    "ghost":"#778899",
    "steel":"#CCCCCC",
    "fire":"#FF7F00",
    "water":"#40b3ff",
    // "water":"#B0E2FF",
    "grass":"#99FF66",
    "electric":"#FFD700",
    "psychic":"#FFB5C5",
    "ice":"#ADD8E6",
    "dragon":"#AB82FF",
    "dark":"#A9A9A9",
    "fairy":"#FFB0FF"
  }

  function only1Type() {
    return pokemon?.types.length == 1
  };

  function changeStyles(pkm){
    return `background:linear-gradient(90deg, ${pokemonTypes[pkm.types[0].type.name]} 0%, ${only1Type() ? pokemonTypes[pkm.types[0].type.name] : pokemonTypes[pkm.types[1].type.name]} 100%)`
  }

  function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  
</script>

{#if pokemon && Object.keys(pokemon).length}
  <div id="pokemon" style={changeStyles(pokemon)}>
		<div id="pokemonImgs">
			<img class="pkmImg" src={pokemon.sprites?.front_default} alt="">
			<img class="pkmImg" src={pokemon.sprites?.back_default} alt="">
		</div>
		<div id="pokemonInfo">
			<p class="infoLabel">Id: {pokemon.id}</p>
			<p class="infoLabel">Name: {capitalize(pokemon.name)}</p>
			<p class="infoLabel">Height: {pokemon.height/10} m</p>
			<p class="infoLabel">Weight: {pokemon.weight/10} kg</p>
      {#each pokemon.types as type,i}
        <p class="infoLabel">Type {i+1}: {capitalize(type.type.name)} 
        <input class="colorType" type="color" value={pokemonTypes[pokemon.types[i].type.name]} disabled></p>	
      {/each}
		</div>
	</div>
{/if}

<style>
	#pokemonInfo{

	}

  .infoLabel{
    background-color:white;
    padding: 5px;
	}

	#pokemonImgs{
	  display:flex;
    background-color:#ffffff69;
	}

  #pokemon{
    /* background-color:red; */
    border: 1em solid;
	}

	.pkmImg{
		/* border: 1px solid red; */
	}

  .colorType{
    height: 30px;
    width: 30px;
  }

</style>