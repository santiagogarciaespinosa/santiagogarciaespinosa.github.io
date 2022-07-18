// Script of index
const yesBtn = document.querySelector('#yes');

yesBtn.addEventListener('click',function () {
    alert('Estaba claro que ivas a decir que si')
});

const no= document.querySelector('#no');

no.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    no.style.setProperty('top',randomY+'%');
    no.style.setProperty('left',randomX+'%');
    no.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
