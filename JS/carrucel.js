//Loading pages
window.onload = function (){
    $('#onload').fadeOut();
    $('body').removeClass('hidden_body');
    $('nav').removeClass('loading_nav');
}

//Esconder los elementos del repositorio del proyecto

$(document).ready(function(){
    $('ul.tabs li a:first').addClass('active');
    $('.repositorio article').hide();
    $('.repositorio article:first').show();

    $('ul.tabs li a').click(function(){
	$('ul.tabs li a').removeClass('active');
	$(this).addClass('active');
	$('.repositorio article').hide();

	var actibeTab = $(this).attr('href');
	$(actibeTab).show();
	return false;
    });
});


// Temarios selector
document.querySelectorAll('#temario .lista a').forEach((elemento) => {
	elemento.addEventListener('click', () => {
		document.querySelector('#temario .activo').classList.remove('activo');
		elemento.parentElement.classList.add('activo');
	});
});

