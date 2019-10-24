function toHTML(owca) {
	return `
	  <tr>
			<td>${owca.name}</td>
			<td>${owca.colors}</td>
			<td>${owca.age}</td>
			<td>${owca.canSweam}</td>
			<td>${owca.isHappy}</td>
			<td>${owca.maxSpeed}</td>
			<td>${owca.numberOfLegs}</td>
	  </tr>
 	`;
}



const tabela = document.querySelector("#owce");
const imię = document.querySelector("#sheep-name");
const szczescie = document.querySelector("#sheep-happy");
const plywalnosc = document.querySelector("#sheep-canswim");

function check( owca ){
	const wpisaneImię = imię.value.trim();
	const wpisaneSzczescie = szczescie.checked;
	const wpisanaPlywalnosc = plywalnosc.checked;
	if(wpisaneImię !== "" && !(owca.name.startsWith( wpisaneImię ))) return false;
	if(wpisanaPlywalnosc && (!owca.canSweam)) return false;
	if(wpisaneSzczescie && (!owca.isHappy)) return false;
	return true;
	
}

function refresh(){
	const przefiltrowane_owce = randomSheeps.filter( check );
	const html_owce = przefiltrowane_owce.map(toHTML);
	tabela.innerHTML = html_owce.join("");
}

refresh();


const szukaj = document.querySelector("#szukaj");
szukaj.addEventListener("click", refresh);
