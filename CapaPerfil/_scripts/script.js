var quantidade = $('div#imagens ul').length;
var limite = (quantidade * 550) * -1;
var largura = limite + 550;
var view_largura = $('section#corpo div#corpo-centro').width();

$('div#teste').html(limite);

$('div#imagens').css('width', limite * -1);

$('div#corpo-direito').click(function(){

    posicao_atual = $('div#imagens').position().left;
    nova_posicao = posicao_atual - view_largura;
    
    if( limite < posicao_atual - view_largura ){
        $('div#imagens').animate({left:nova_posicao}, 1000);
    }

    if (limite > (nova_posicao - view_largura)){
        $('div#corpo-direito ion-icon').css('opacity', 0.5);
        $('div#corpo-direito ion-icon').css('cursor', 'not-allowed');
    }

    $('div#corpo-esquerdo ion-icon').css('opacity', 1);
    $('div#corpo-esquerdo ion-icon').css('cursor', 'pointer');


});

$('div#corpo-esquerdo').click(function(){

    posicao_atual   = $('div#imagens').position().left;

    if ( posicao_atual + view_largura <= 0 ) {
        nova_posicao = posicao_atual + view_largura;
        $('div#imagens').animate({left:nova_posicao},1000);
    }

    if ( nova_posicao == 0 ) {
        $('div#corpo-esquerdo ion-icon').css('opacity',0.5);
        $('div#corpo-esquerdo ion-icon').css('cursor','not-allowed');        
    }

    $('div#corpo-direito ion-icon').css('opacity',1);
    $('div#corpo-direito ion-icon').css('cursor','pointer');

});

