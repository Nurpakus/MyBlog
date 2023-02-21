const div = document.createElement ('div') //sozdat div
div.classList.add('clicker');
const telo = document.telo;
debugger;
telo.appendChild (div); //dobavit div
const header = document.createElement ('h1');
header.textContent = 'zagolovok';
div.insertAdjustElement ('beforebegin', header); // dobavili header pered divom
const ul = 
`<ul> 
<li></li> 
<li></li>
<li></li>
</ul>`; //sozdali spisok
div.innerHTML = ul; //pomestili spisok vnutr elementa div
const image = createElement ('img');
img.src = 'https://habrastorage.org/r/w1560/webt/hl/8x/lx/hl8xlx_fubycz-ivega_hinmhp0.png'
div.appendChild (img); //pomestil img v div
const elementHTML = `
<div class = 'pDiv'>
<p>Text</p>
<p>Text1</p>
</div>`;
const ulList = div.querrySelector ('ul'); // pomeshaet div do elementa ul
ulList.insertAdjustElement ('beforebegin', elementHTML);
const pDiv = document.querrySelector ('.pDiv'); //pDiv dolzhen byt v HTML!
pDiv.children[1].classList.classTexta ('text'); // dobavili class dlya <p> 
pDiv.firstElementChild.remove();

