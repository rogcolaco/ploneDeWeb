//TOOGLE
jQuery(".content").hide();
jQuery(".heading").click(function(){
    jQuery(this).toggleClass('expanded');
    jQuery(this).next(".content").slideToggle(500);
});


//TOOGLE LABORATORIOS
//SELECIONAR ITEM PELA URL
if(window.location.href == "https://web06dev5.ufscar.br/pt-br/laboratorios"){
    $(".content").addClass("labs");
}

//SELECIONAR PÁGINA PELO CONTEÚDO DO TÍTULO DA PÁGINA
if($(".documentFirstHeading").text().trim()=="Laboratórios"){
    $(".content").addClass("labs");
}