// fetch kullanarak projede yer alan json dosyasındaki verileri ekrana konsola verdik.

const btnCek=document.querySelector("#get-ftc");
btnCek.addEventListener("click",function(){
    fetch('./vericek.json') 
        .then(cevap => cevap.json()) 
        .then(veri => console.log(veri));
});