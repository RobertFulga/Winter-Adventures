//** Preloader **//
const preloader = document.getElementById(`preloader`);

function init() {
    setTimeout(() =>{
        preloader.style.opacyty=0;
        preloader.style.display="none";
    },2000)
}
init()

//** Page header  **\\
const layer1 = document.getElementById(`layer1`)
scroll = window.pageYOffset;
    document.addEventListener('scroll',
    function (){
        let scroll = window.pageYOffset;
        layer1.style.width =(100 + scroll/5) + '%';
    });

const layer2 = document.getElementById(`layer2`)
scroll = window.pageYOffset;
document.addEventListener('scroll',
    function (){
        let scroll = window.pageYOffset;
        layer2.style.width =(100 + scroll/5) + '%';
        layer2.style.left =scroll/50 + '%';
    });

const text = document.getElementById(`text`)
scroll = window.pageYOffset;
document.addEventListener('scroll',
    function (){
        let scroll = window.pageYOffset;
        text.style.top = - scroll/7 + '%';
    });



