#!/bin/bash
# No mac eh necessario a instalacao do pacote brew install ImageMagick
# No linux eh necessario a instalacao: sudo apt-get install imagemagick, para testar convert logo: logo.gif
#
# Este script espera a existencia de uma imagem na pasta corrente
# o nome da imagem esta definido na variavel image
# serao geradas as 7 imagens utilizadas no zip do plone 5
#
# para executar o script, execute o comando abaixo:
# ./resizer.sh

image="logo.png"

convert $image -resize 57x57 ufscar-apple-touch-icon.png
convert $image -resize 57x57 ufscar-apple-touch-icon-57x57-precomposed.png
convert $image -resize 72x72 ufscar-apple-touch-icon-72x72-precomposed.png
convert $image -resize 114x114 ufscar-apple-touch-icon-114x114-precomposed.png
convert $image -resize 144x144 ufscar-apple-touch-icon-144x144-precomposed.png
convert $image -resize 57x57 ufscar-apple-touch-icon-precomposed.png
convert $image -resize 32x32 ufscar-favicon.ico
