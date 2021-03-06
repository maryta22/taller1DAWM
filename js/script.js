/*
  1. Realice una petición asincrónica al unir las constantes URL y POKEMON

  2. Extraiga y reemplace las plantillas por los valores correspondientes del JSON:

  {{type}} por types[0] > type > name
  {{name}} por name
  {{hp}} por abilities[0] > ability > name
  {{attack}} por abilities[1] > ability > name

  Utilice como referencia el sitio https://pokeapi.co/ para identificar mejor el anidamiento de las claves.

  3. Agregue el nuevo valor al final del elemento div con identificador "cards"
 */

const URL = 'https://pokeapi.co/api/v2/pokemon/'
const POKEMON = "umbreon"



fetch(URL + POKEMON)
	.then(response => response.json())
	.then(data => {
		let typeR = ""
		var nameR = ""
		var hpR = ""
		var attackR = ""

		typeR = data.types[0].type.name
		nameR = data.name
		hpR = data.abilities[0].ability.name
		attackR = data.abilities[1].ability.name

		console.log(typeR)
		console.log(nameR)
		console.log(hpR)
		console.log(attackR)

		let plantilla = `
			<figure class="card card--${typeR}">
						<div class="card__image-container">
							<img src="https://cdn2.bulbagarden.net/upload/thumb/3/3d/197Umbreon.png/375px-197Umbreon.png" alt="${nameR}" class="card__image">   
						</div>
						
						<figcaption class="card__caption">
							<h1 class="card__name">${nameR}</h1>

							<h3 class="card__type">
								${typeR}
							</h3>

							<table class="card__stats">
								<tr>
									<th>HP</th>
									<td>${hpR}</td>
								</tr>
								<tr>
									<th>Attack</th>
									<td>${attackR}</td>
								</tr>
								
								<tr>
									<th>Defense</th>
									<td>110</td>
								</tr>

								<tr>
									<th>Special Attack</th>
									<td>60</td>
								</tr>
								<tr>
									<th>Special Defense</th>
									<td>130</td>
								</tr>
								<tr>
									<th>Speed</th>  
									<td>65</td>
								</tr>
							</table>
							
							<div class="card__abilities">
								<h4 class="card__ability">
									<span class="card__label">Ability</span>
									Synchronize
								</h4>
								<h4 class="card__ability">
									<span class="card__label">Hidden Ability</span>
									Inner Focus
								</h4>
							</div>
						</figcaption>
					</figure>
				`

		document.getElementsByClassName('cards').innerHTML = plantilla
	});



