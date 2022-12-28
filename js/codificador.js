const regras = /^[a-z\s]+$/ //Verificador das Regras de Letras Minusculas, sem acento e sem caracteres especiais

function codifica(){
	var txt = document.getElementById("txt-input").value;
	if (regras.test(txt) == true) {
		var resultcod = txt
			.replace(/a/g, "ai")
			.replace(/e/g, "enter")
			.replace(/i/g, "imes")
			.replace(/o/g, "ober")
			.replace(/u/g, "ufat")
	document.getElementById("txt-output").innerHTML = resultcod;
	document.getElementById("ttl-result").innerText = "Texto codificado:";
	blocbtn();
	} else{
		alerta();
	}
}

function descodifica(){
	var txt = document.getElementById("txt-input").value;
	if (regras.test(txt) == true) {
		var resultcod = txt
		.replace(/ai/g, "a")
		.replace(/enter/g, "e")
		.replace(/imes/g, "i")
		.replace(/ober/g, "o")
		.replace(/ufat/g, "u");
	document.getElementById("txt-output").innerHTML = resultcod;
	document.getElementById("ttl-result").innerText = "Texto decodificado:";
	blocbtn();
	} else{
		alerta();
	}
}

function alerta() {
	alert("Formato da Mensagem Incorreta, Por Favor, Respeite as regras!");
}

function alertaCopia() {
	document.getElementById("cop-alert").innerHTML="<b>Cópia efetuada com sucesso!</b>";
	setTimeout(
		function(){
			document.getElementById('cop-alert').innerHTML='';
			},3000);
}

function copresult() {
	var menscop = document.getElementById("txt-output").value;
	navigator.clipboard.writeText(menscop);
	document.getElementById("txt-input").value="";
	alertaCopia();
}

//bloqueia todos os botão ao carregar a pagina
	document.getElementById("cod-btn").disabled = true;
	document.getElementById("descod-btn").disabled = true;
	document.getElementById("cop-btn").disabled = true;
	document.getElementById("limp-btn").disabled = true;

	document.getElementById("cod-btn").style.pointerEvents = "none";
	document.getElementById("descod-btn").style.pointerEvents = "none";
	document.getElementById("cop-btn").style.pointerEvents = "none";
	document.getElementById("limp-btn").style.pointerEvents = "none";

//cria um event listener que escuta as mudanças do input
document.getElementById("txt-input").addEventListener("input", function(){
	//habilita os botões codificar e decodificar.
		document.getElementById("cod-btn").disabled = false;
		document.getElementById("descod-btn").disabled = false;
		document.getElementById("cod-btn").style.pointerEvents = "all";
		document.getElementById("descod-btn").style.pointerEvents = "all";
});

//bloqueia e habilita botão conforme conteúdo do output:
function blocbtn(){
	var conteudo = document.getElementById("txt-output").value;
	//valida conteudo do output 
	if (conteudo !== null && conteudo !== '') {
		//desabilita o botão --> output com valor
		document.getElementById("cod-btn").disabled = true;
		document.getElementById("descod-btn").disabled = true;
		document.getElementById("cop-btn").disabled = false;
		document.getElementById("limp-btn").disabled = false;
		document.getElementById("txt-input").disabled = true;
		document.getElementById("cod-btn").style.pointerEvents = "none";
		document.getElementById("descod-btn").style.pointerEvents = "none";
		document.getElementById("cop-btn").style.pointerEvents = "all";
		document.getElementById("limp-btn").style.pointerEvents = "all";
		
	} else {
		//habilita o botão --> output sem valor
		document.getElementById("cod-btn").disabled = true;
		document.getElementById("descod-btn").disabled = true;
		document.getElementById("cop-btn").disabled = true;
		document.getElementById("limp-btn").disabled = true;
		document.getElementById("txt-input").disabled = false;
		document.getElementById("cop-btn").style.pointerEvents = "none";
		document.getElementById("limp-btn").style.pointerEvents = "none";
	}
};

//limpa conteúdo do output:
function limpresult(){
	document.getElementById("txt-input").value='';
	document.getElementById("txt-output").value='';
	document.getElementById("ttl-result").innerText = "Texto codificado ou decodificado:";
	blocbtn();
};




