//exemplo de array 
familia = ['pedro', 'lucas', 'elena']

//exemplo objeto 
time = {
    banco: 'tiago',
    tecnico: 'melo',   
    zaga: 'toin'
}

//fuctions
corSite = 'red'
function resetaCor() {
    corSite = ''
    return 'a cor foi resetada'
}

//igualdade
//'1'==1 compara só tipo 
// '1'===1 compara tipo e valor

//desvio condicional
box1 = 10
box2 = 5
if (box1 >= box2) {
    // console.log('primeiro valor é maior')
}
else {
    // console.log('valores incorretos')
}

//switch
switch(box1){
    case 'comum':
        console.log('nome digitado é comum')
        break
    case 'gerente':
        console.log('nome digitado é gerente')
        break
    case 10:
        console.log('valor digitado foi 10')
        break
}

//estrutura repetição
for (i=0; i<5; i++) {
    console.log(i)
}