# Página Template
Tema
    - Na raiz do tema criar uma pasta chamada tinymce-templates
    - Criar um arquivo html com o template (Nesse caso está sendo utilizado o arquivo docentes.html)

    - incluir o LESS correspondente ao modelo escolhido no ufscar.less

    -Desativar e reativar tema.

Tinymce
    - Clicar em "Plugins e Barra de ferramentas";
    - No campo "Templates" incluir
        [ {"title": "Docentes", "url": "++theme++zip-ufscar/tinymce-templates/docentes.html"} ]
        
        **  VERIFICAR O NOME DO ARQUIVO INCLUIDO NO TEMA
        **  INCLUIR UMA CHAVE PARA CADA TEMPLATE 
    
    - No campo "Plugins personalizados" incluir
        template|+plone+static/components/tinymce-builded/js/tinymce/plugins/template

## Lembrar de subir a imagem genérica para o docente e arrumar o código no template