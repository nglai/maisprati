AOS.init();

//Carrosel
$('.carrosel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

//Serviços
let servicos = document.getElementById("servicos")
async function getAllServices () {
    try {
        const response = await fetch('./json/servicos.json')

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json()
        console.log(data)
        data.map(service => {
    
            // <div class="col-md-4 div_principal_servicos">
            //     <div class="card">
            //         <img src="" class="card-img-top servicos_img">
            //     </div>
            //     <div class="card-body">
            //         <h4 class="card-title"></h4>
            //         <p class="card-text"></p>
            //     </div>
            // </div>
    
            const div_principal = document.createElement("div")
            const div_card = document.createElement("div")
            const image = document.createElement("img")
            const div_body = document.createElement("div")
            const title = document.createElement("h4")
            const desc = document.createElement("p")
    
            div_principal.classList.add("col-md-4")
            div_principal.classList.add("text-center")
            div_principal.classList.add("div_principal_servicos")
            div_card.classList.add("card")
            div_card.classList.add("h-100")
            image.classList.add("card-img-top")
            image.classList.add("servicos_img")
            div_body.classList.add("card-body")
            title.classList.add("card-title")
            desc.classList.add("card-text")
    
            image.src = service.imagem
            title.innerHTML = service.nome
            desc.innerHTML = service.descricao
    
            div_body.appendChild(title)
            div_body.appendChild(desc)
            div_card.appendChild(image)
            div_card.appendChild(div_body)
            div_principal.appendChild(div_card)
    
            servicos.appendChild(div_principal)
        })
    } catch (error) {
        console.error("Erro ao processar a api de serviços", error)
        testemunhos.textContent = "Erro ao carregar os serviços"
    }
}
getAllServices()

//Testemunhos
let testemunhos = document.getElementById("testemunhos")
async function getAllTestemunhos () {
    try {
        const response = await fetch('./json/testemunhos.json')

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json()
        data.map(testemunho => {
    
        {/* <div class="card mb-3" data-aos="fade-up" data-aos-duration="1000">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="..." class="img-fluid rounded-start comentario_img">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">Nome</h5>
                    <p class="card-text">Comentario.</p>
                    </div>
                </div>
                </div>
        </div> */}
    
        const card = document.createElement('div')
        card.classList.add('card', 'mb-3', "text-center", "card_comentario")
        card.dataset.aos = 'fade-up'
        card.dataset.aosDuration = 1000
    
        const row = document.createElement('div')
        row.classList.add('row', 'g-0')
    
        const leftColumn = document.createElement('div')
        leftColumn.classList.add('col-md-4')
        const image = document.createElement('img')
        image.classList.add('img-fluid', 'rounded-start', "comentario_img")
        image.src = testemunho.imagem
        leftColumn.appendChild(image)
    
        const rightColumn = document.createElement('div')
        rightColumn.classList.add('col-md-8')
        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')
        const title = document.createElement('h5')
        title.classList.add('card-title', "mb-4")
    
        title.textContent = testemunho.nome;
        const text = document.createElement('p')
        text.classList.add('card-text')
        text.textContent = testemunho.comentario
        cardBody.appendChild(title)
        cardBody.appendChild(text)
        rightColumn.appendChild(cardBody)
    
        row.appendChild(leftColumn)
        row.appendChild(rightColumn)
    
        card.appendChild(row)
    
        testemunhos.appendChild(card)
        })
    }catch (error){
        console.error("Erro ao processar a api de testemunhos", error)
        testemunhos.textContent = "Erro ao carregar os serviços"
    }
}
getAllTestemunhos()

// Contato
let newsEmail = document.getElementById("news_email")
let newsbtn = document.getElementById("news_btn")
let newsMessage = document.getElementById("news_message")

newsbtn.addEventListener("click", () =>{
    const email = newsEmail.value
    const isValid = validaEmail(email);
    if(!isValid){
        newsMessage.innerHTML = "Digite um email válido"
        newsMessage.style.color = "red"
    } else {
        newsMessage.innerHTML = "Email recebido!"
        newsMessage.style.color = "green"
    }
})

function validaEmail (email) {
    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/
    return regex.test(email)
}


//Formulario contato
function sendMail () {
    let params = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        mensagem: document.getElementById("mensagem").value
    }
    
    emailjs.send("service_ui3mcgm", "template_o2ezcrq", params)
    .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
    );
}