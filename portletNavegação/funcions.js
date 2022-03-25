var baseUrl = "https://web06dev3.ufscar.br";

//DETERMINA O ENDEREÇO DAS PASTAS QUE SERÃO AVALIADAS PARA MARCAR O LINK NO PORTLET NAVEGAÇÃO
var locations = ["/pt-br/programa", "/pt-br/alunos"];

//ESCONDE O CONTENT DA PÁGINA INICIALEM CASO DE SITES SEM CONTEÚDO ESCRITO
if (window.location.href == baseUrl + "/pt-br" || window.location.href == baseUrl + "/pt-br?set_language=pt-br") {
    $("#content").hide();
}

//ADICIONA A CLASSE navTreeCurrentNode NO ITEM D LINK DO PORTLET NAVEGAÇÃO
for (let location of locations) {
    if (window.location.href == baseUrl + location) {
        $(".portletNavigationTree .portletContent .navTreeItem .contenttype-link").addClass("navTreeCurrentNode");
        break;
    }
}

//UTILIZADO QUANDO DENTRO DO PORTLET EXISTEM NAVEGAÇÕES EM SUBNÍVEIS UTILIZANDO PASTAS
//IMPORTANTE: É NECESSÁRIO CRIAR NOVOS PORTLETS NAS PASTAS E BLOQUEAR OS DE NÍVEIS ANTERIORES
// VER WWW.PPGEQ.UFSCAR.BR (PRIMEIRO QUE FIZ EM 24/03/2022)
//CONTEM SELETORES CSS DE CLASSE PARA CADA UMA DAS SEÇÕES ESPECÍFICAS DEFINIDAS PELO PLONE PARA PASTAS NO PORTLET NAVEGAÇÃO
const folderNodes = [".section-disciplinas",".section-conselho-de-pos-graduacao-eq"];
    
//SELETOR CSS COMPLETO PARA ITENS DE PASTA NO PORTLET NAVEGAÇÃO
var portletSubItens = "#portal-column-one .portletNavigationTree .portletContent .navTreeFolderish";

for(let folderNode of folderNodes){

    //ADICIONA A CLASSE CSS navTreeCurrentNode PARA A PASTA NO PORTLET NAVEGAÇÃO QUANDO NA NAVEGAÇÃO INTERNA E OCULTA AS SUBPÁGINAS
    if(jQuery(portletSubItens+folderNode+ "> ul > li").hasClass("navTreeCurrentNode")){
        jQuery(portletSubItens+folderNode+"> a").addClass("navTreeCurrentNode");
        jQuery(portletSubItens+folderNode+ "> ul").hide();
    }
    
    //OCULTA AS SUBPÁGINAS QUANDO ESTIVER NA VISÃO PADRÃO DE UMA DAS PASTAS DO PORTLET NAVEGAÇÃO
    if(jQuery(portletSubItens).hasClass("navTreeCurrentNode")){
        jQuery(portletSubItens+folderNode+ "> ul").hide();
    }
}