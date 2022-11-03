export async function GET({ url }) {
	let pkmNumber = new URLSearchParams(url.search).get('pkmNumber');
	let pkmName = new URLSearchParams(url.search).get('pkmName');
	// console.log('pkmNumber', pkmNumber);

	try {
		if (pkmNumber) {
			// console.log('pkmNumber', pkmNumber);
			var request = await fetch('https://pokeapi.co/api/v2/pokemon/' + pkmNumber);
		} else if (pkmName) {
			// console.log('pkmName', pkmName);
			var request = await fetch('https://pokeapi.co/api/v2/pokemon/' + pkmName);
		} else {
			return new Response('{}');
		}

		let pokemon = await request.json();

		// console.log('pokemon', pokemon);
		return new Response(JSON.stringify(pokemon));
	} catch (e) {
		// console.log('error', e);
		return new Response('{}');
	}
}
