function validerEpost(epost) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(epost);
}

function validerTelefon(telefonnr) {
    const re = /^[1-9]\d{7}$/;
    return re.test(telefonnr);
}

$("#kjopBillett").click(function(){
    let validTicket = true;
    let film = $("#filmOption").val();
    let antall = $("#antall").val();
    let fornavn = $("#fornavn").val();
    let etternavn = $("#etternavn").val();
    let telefonnr = $("#telefonnr").val();
    let epost = $("#epost").val();

    if (film === "-1") {
        validTicket = false;
        let filmError = $("#filmError");
        filmError.html("Må velge en film");
        //filmError.style.color = "red";

    } else {
        $("#filmError").html("");
    }

    if (antall < 1 || antall === "" || antall % 1 !== 0) {
        validTicket = false;
        let antallError = $("#antallError");
        antallError.html("Må velge et antall");
        //antallError.style.color = "red";
    } else {
        $("#antallError").html("");
    }

    if (fornavn === "") {
        validTicket = false;
        let fornavnError = $("#fornavnError");
        fornavnError.html("Må skrive noe inn i fornavnet") ;
        //fornavnError.style.color = "red";
    } else {
        $("#fornavnError").html("");
    }

    if (etternavn === "") {
        validTicket = false;
        let etternavnError = $("#etternavnError");
        etternavnError.html("Må skrive noe inn i etternavnet");
        //etternavnError.style.color = "red";
    } else {
        $("#etternavnError").html("");
    }


    if (telefonnr === "") {
        validTicket = false;
        let telefonnrError = $("#telefonnrError");
        telefonnrError.html("Må skrive noe inn i telefonnr");
        //telefonnrError.style.color = "red";
    } else if (!validerTelefon(telefonnr)) {
        validTicket = false;
        let telefonnrError = $("#telefonnrError");
        telefonnrError.html("Må skrive et gyldig norsk telefonnr");
       // telefonnrError.style.color = "red";
    } else {
        $("#telefonnrError").html("");
    }

    if (epost === "") {
        validTicket = false;
        let epostError = $("#epostError");
        epostError.html("Må skrive noe inn i epost");
       // epostError.style.color = "red";
    } else if (!validerEpost(epost)) {
        validTicket = false;
        let epostError = $("epostError");
        //epostError.html("Må skrive en gyldig e-post");
    } else {
        $("#epostError").html("");
    }



    if(validTicket) {
        const billetter = {
            film: $("#filmOption").val(),
            antall: $("#antall").val(),
            fornavn: $("#fornavn").val(),
            etternavn: $("#etternavn").val(),
            telefonnr: $("#telefonnr").val(),
            epost: $("#epost").val()
        }

        $.post("/lagre", billetter, function () {
            hentAlle();
        })

        $("#filmOption").val("");
        $("#antall").val("");
        $("#fornavn").val("");
        $("#etternavn").val("");
        $("#telefonnr").val("");
        $("#epost").val("");
    }
})


function hentAlle(){
    $.get("/hentAlle", function(data){
        formaterData(data);
    })
}

$("#slettAlle").click(function(){
    $.post("/slettAlle", function(){
        hentAlle();
    })
})

function formaterData(billetter){
    let ut="<table><tr><th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th>"+
        "<th>Telefonnr</th><th>Epost</th></tr>";
    for (const billett of billetter){
        ut+="<tr><td>"+billett.film+"</td><td>"+billett.antall+"</td><td>"+billett.fornavn+
            "</td><td>"+billett.etternavn+"</td><td>"+billett.telefonnr+"</td><td>"+billett.epost+"</td></tr>";
    }
    ut+="</table>";
    $("#alleBilletter").html(ut);
}