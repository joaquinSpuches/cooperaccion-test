

const button = document.getElementById('ulDespues')
const liDespues = document.getElementsByClassName('liDespues') 




const liObjetivo = document.getElementById('liObjetivo')
const liParticipantes = document.getElementById('liParticipantes')
const liInicio = document.getElementById('liInicio')
const liDinamica = document.getElementById('liDinamica')
const liAyudas = document.getElementById('liAyudas')
const liElCandado = document.getElementById('liElCandado')
const liElPremio = document.getElementById("liElpremio")
const objetivo = document.getElementById('objetivo')
const participantes = document.getElementById('participantes')
const inicio = document.getElementById('inicio')
const dinamica = document.getElementById('dinamica')
const ayuda = document.getElementById('ayudas')
const elCandado = document.getElementById('el-candado')
const elPremio = document.getElementById('el-premio')
const arrayTxt = [objetivo,participantes,inicio,dinamica,ayuda,elCandado,elPremio]
const arrayJuego = [liObjetivo,liParticipantes,liInicio,liDinamica,liAyudas,liElCandado,liElPremio]

const liComoJugamos = document.getElementById('liComoJugamos')
const liAprendimos = document.getElementById('liAprendimos')
const liIntro = document.getElementById('liIntro')
const liAporta = document.getElementById('liAporta')
const intro = document.getElementById('intro')
const comoJugamos = document.getElementById('comoJugamos')
const aprendimos = document.getElementById('aprendimos')
const aporta = document.getElementById('aporta')

const nav = document.querySelector('.nav')
const arrayDespues = [comoJugamos,aprendimos,aporta, intro]
const arrayOpciones = [liComoJugamos,liAprendimos,liAporta,liIntro]


for (let i = 0; i < arrayJuego.length; i++) {
    const pestaña = arrayJuego[i];
    pestaña.addEventListener('click', (e)=>{
    
        e.preventDefault()
        for (let i = 0; i < arrayTxt.length; i++) {
            const element = arrayTxt[i];
            if(element.classList.contains('hide') === false){
                element.classList.add('hide')
            }   
        }
        
        arrayTxt[i].classList.toggle('hide')
        
    })
    
    
}
for (let i = 0; i < arrayJuego.length; i++) {
    const pestaña = arrayJuego[i];
    pestaña.addEventListener('click', (e)=>{
    
        e.preventDefault()
        for (let i = 0; i < arrayJuego.length; i++) {
            const element = arrayJuego[i];
            if(element.classList.contains('notSelected') === false){
                element.classList.add('notSelected')
                element.classList.remove('selected')

                
            }   
        }
        
        arrayJuego[i].classList.add('selected')
        arrayJuego[i].classList.remove('notSelected')
        
    })
    
    
}
for (let i = 0; i < arrayOpciones.length; i++) {
    const pestaña = arrayOpciones[i];
    pestaña.addEventListener('click', (e)=>{
        console.log('gola');
        e.preventDefault()
        for (let i = 0; i < arrayDespues.length; i++) {
            const element = arrayDespues[i];
            if(element.classList.contains('hide') === false){
                element.classList.add('hide')
            }   
        }
        
        arrayDespues[i].classList.toggle('hide')
        
    })
    
    

}

let lastScrollY = window.scrollY



window.addEventListener('scroll', () =>{

    if (window.scrollY < 2125 && window.scrollY > 2120){   
        nav.classList.remove('nav-hide')
        
    }else if(lastScrollY < window.scrollY){
        console.log(window.scrollY)
        nav.classList.add('nav-hide')
    }else{
        console.log('scrool up');
        nav.classList.remove('nav-hide')
    }
    lastScrollY = window.scrollY
})


