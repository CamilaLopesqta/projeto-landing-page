
const receberFormulario = (event) => {
    event.preventDefault()
    
    console.log(document.getElementById("email").value);
     if ("email" !== 0){
            alert(`Obrigado por se cadastrar, entraremos em contato através do endereço ${(document.getElementById("email").value)}`)
     }else {
            alert("Por favor, digite um endereço de e-mail válido")   
}
}
const botaoComprar = () => {
    alert("Obrigado por comprar na 4Food, volte sempre!")
}

const botaoEscolherCardapio = () => {
    const comprar = confirm("Gostaria de escolher o seu cardápio agora?")
    if (comprar === true){
       alert("Obrigado pela compra, volte sempre, é um prazer atendê-lo!")
    }else{
        alert("Obrigado por visitar o site da 4Food!!!")
}
}
const sobre = ()=>{
    alert("Somos uma empresa confiável, há mais de 10 anos no ramo de alimetação.")
}

const servico = ()=>{
    alert("Produtos de supermercado, você compra sem sair de casa e também vendemos marmitas, você escolhe seu cardápio semanal e entregamos diariamente para você.")
}

const trabalhe = ()=>{
    alert("Seja nosso colaborador(a), trabalhe conosco.")
}

const local = ()=>{
    alert("Estamos localizados no centro da cidade de Quatá.")
}

const contato = ()=> {
    alert(Number(1833660000))
}