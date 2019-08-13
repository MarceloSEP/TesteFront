$(document).ready(function(){
    $(".botao-cargo").on("click", function(){
        var botaoClicado = $(this).attr("class");

        var classesSeparadas = botaoClicado.split(" ");

        var cargo = classesSeparadas[1].toUpperCase();

        var classeFormatada = '.' + classesSeparadas[0] + '.' + cargo

        if(cargo.endsWith('S')) {
            cargo = cargo.substring(0, cargo.length -1);

            if(cargo == 'SECRETARIO') {
                cargo = 'SECRETÁRIO';
            }
        }

        $(".botao-cargo").removeClass("ativo");

        $(classeFormatada).toggleClass("ativo");

        alternarCargo(cargo);
    });

    function alternarCargo(cargo) {
        $(".cargo").html(cargo);
        $(".cards-cargos .card .dados .nome").html("Nome do " + cargo)
        $(".cards-cargos .card .dados .funcao").html("Função do " + cargo)
    }

    var meses = ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO',
            'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'];

    $("#mes-anterior").on("click", function(){
        var mesAtual = $("#aniversariantes .calendario h3").text();

        mesAtual = mesAtual.trim();

        var indice = meses.indexOf(mesAtual);

        if(indice === 0) {
            indice = 12; 
        }

        $("#aniversariantes .calendario h3").html(meses[indice - 1])
        alternarAniversariantes(meses[indice - 1])
    });

    $("#mes-seguinte").on("click", function(){
        var mesAtual = $("#aniversariantes .calendario h3").text();

        mesAtual = mesAtual.trim();

        var indice = meses.indexOf(mesAtual);

        if(indice === 11) {
            indice = -1;
        }

        $("#aniversariantes .calendario h3").html(meses[indice + 1])
        alternarAniversariantes(meses[indice + 1])
    });

    function alternarAniversariantes(mes) {
        var dia = Math.floor(Math.random() * 28) + 1;
        console.log(mes); 
        $("#aniversariantes .dia-aniversario").html(dia);
        $("#aniversariantes .nome").html("Aniversariante de " + mes);
        $("#aniversariantes .funcao").html("Aniversário " + dia + " de " + mes);
    }
});
