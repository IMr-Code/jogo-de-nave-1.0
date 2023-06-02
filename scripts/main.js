/*
  Nome: Caleb Marcelino
  Idade: 17 anos
  Id: Cientista de Computação Junior
  Id: Pentester
  Id: Desenvolvedor
  Facebook: Caleb Marcelino
  Email: calebmarcelino2@gmail.com
  Página: Ft Cursos t.i

README: Olá, seja bem vindo, meu nome é Caleb Marcelino, este aqui é o código do meu jogo, logo a baixo tem o código javascript do jogo que eu tinha criado, levei 1 dia e meio para escrever todo esse código, eu vou deixar alguns comentários para voces entenderem a arquitetura deste código, sei que pode parecer complicado e muito complexo de entender, mas eu vou tentar explicar da maneira mais simples possivel, voces podem mudar esse código do jeito que voces quiserem, esse daqui é o Javascript completo do jogo.


*/

var register_p = false; //Esta variavel é responsavel por guardar o valor do personagem do jogo que a pessoa vai escolher.

var cor_do_canvas = 'gray';  //Esta variavel guarda o valor da cor do fundo do jogo, por padrão eu coloquei gray que significa sinzento.
var cor_quadros = 'black';
var cor_arena = 'black'  
var cor_textos = 'red';

document.body.style.position = 'relative'; //Aqui eu defino o corpo da nossa página HTML com position relative, porque eu vou usar elementos HTML para textos etc...

function animacoes_da_tela_inicial(){ 
    
//Esta é a primeira função era para adicionar novas funcionalidades ao jogo, caso voce queira adicionar novas funcionalidades ao jogo, voce poderia aproveitar essa função.
    

    console.log('animar'); //Aqui dou um log na variavel animar.

}


const conteiner = document.createElement('section'); document.body.appendChild(conteiner); 

const titulo = document.createElement('span'); titulo.style.fontSize = '50px'; titulo.style.position = 'absolute'; titulo.textContent = 'A Nave Perdida' // Aqui eu crio uma constante chamada de titulo, ela é responsavel por mostrar o titulo do jogo, que neste caso é A Nave Perdida, voce pode mudar e ver o efeito.

const centro = document.createElement('center'); //Nesta etapa eu criei um elemente center do HTML, ele elemento servira para poder centralizar o botão do jogo.

document.body.appendChild(centro); //Depois de criar o elemento center eu dei um appendChild ou seja coloquei ele dentro do HTML.

conteiner.appendChild(titulo); // Nesta etapa eu simplesmente coloquei o valor do titulo dentro do nosso conteiner que já está no HTML.


const botao = document.createElement('button'); //Nesta etapa eu criei uma variavel chamada botao, essa varivel sera a responsavel pelo potão INICIAR JOGO, esse botao é que permitira que o usuario comece o jogo.

botao.textContent = 'INICIAR JOGO '; //Nesta etapa eu crio o valor do botao, neste caso o te


centro.appendChild(botao); //Depois de criar o valor do botao, eu acabo colocando o botao dentro do nosso elemento center que haviamos criados, depois de ela estar dentro do elemento center ela sera centralizado.


botao.style.marginTop = 300; botao.style.height = 60; //Agora configuramos o margin top e  o margin height do nosso botao.

botao.style.width = 400; botao.style.fontFamily = 'monospace'; // Nesta area eu configuro a largura do botao para 400px e o tipo de letra para 'Monospace'.


const css = document.createElement('style');
css.textContent = `body{ background-image: url('./img/player/menu.jpg'); 
`; //Nesta etapa eu crio um elemento Style, este Elemento servira para podermos criar os estilos dos nossos elementos HTML.

document.head.appendChild(css); //Nesta simples etapa eu coloco o elemento Css dentro do elemento head, para que todas as configurações de Css possam funcionar de maneira correcta.

animacoes_da_tela_inicial(); //Aqui eu chamo a função animacoes_de_tela_inicial(), essa função serve para chamar as animações que eu havia criado.

botao.addEventListener('click',iniciar_sessao); //Nessa etapa eu adiciono um evento de click ao nosso botão, quando o usuario clicar sobre este botão, sera chamada a função iniciar_sessão, que basicamente é a sessão de escolha de personagens do jogo.

const source_img = ['./img/player/22.png','./img/player/23.png','./img/player/9.png','./img/player/13.png','./img/player/27.png','./img/player/24.png','./img/player/18.png','./img/player/14.png','./img/player/16.png','./img/player/25.png','./img/player/3.png','./img/player/5.png','./img/player/2.png','./img/player/7.png','./img/player/10.png','./img/player/4.png']; //Este vetor de dados armazena o caminho das imagens do jogo, este array é muito importante, caso seja mudado aldo dentro do array podera afetar a funcionalidade do jogo, por isso tenha atenção quando desejar mudar o caminho das imagens para um de sua preferencia, a forma mais correta seria voce mudar o nome da sua imagem e depois subituir para que possa ser randerizado de forma correcta.


const avatares = ['Caleb Marcelino','Mauro Monteiro','Vidal XM','Claryson Daudet','Alex Bliss','Aitch Umai','Teresa Dito','--Fatima--','Clara Maria','Sebastian Luqueba','Junior Manuel','Angelo ND','Matilson Mendes','Manuel Da Rosa','Nandinha Gomes','Michel']
 //Este vetor armazena o nome dos personagens, aqui voces podem mudar os nomes do jeito que voces quiserem, eu coloquei o meu nome e o nome dos meus amigos e colegas, eles são os personagens do meu jogo, mas de certa forma depende do jeito que voces quiserem colocar os nomes dos personagens, boa sorte aí para voces... kkk


//console.log('avar: ',avatares.length)

function iniciar_sessao(){ 
    
//Esta função é responsavel por iniciar o jogo, tenham muito cuidado aqui nesta area, pois se voces mudarem algo de forma incorreta pode danificar completamente o jogo, por isso tenha cuidado aqui nesta função de iniciar sessão, é ela que trata de  toda dinamica do jogo....

//Esta comando limpa todo o body do nosso HTML e adiciona novos elementos que são: article, span, img, section, etc, também a que tomar cuidado na mudança da estrutura, uma mudança incorreta pode danificar a interface do jogo.
    
document.body.innerHTML = `
<article>
<span id='escolha'>Escolha seu Avatar<span>
</article>
<section>
<div>
<img src="./img/player/22.png" onclick="v_escolha('ps1');"/> <img src='./img/player/23.png' onclick="v_escolha('ps2');" /> <img src='./img/player/9.png' onclick="v_escolha('ps3');" /> <img src='./img/player/13.png' onclick="v_escolha('ps4');" />
<br>
<img src='./img/player/27.png' onclick="v_escolha('ps5');" /> <img src='./img/player/24.png' onclick="v_escolha('ps6');" /> <img src='./img/player/18.png' onclick="v_escolha('ps7');" /> <img src='./img/player/14.png' onclick="v_escolha('ps8');" /> 
<br>
<img src='./img/player/16.png' onclick="v_escolha('ps9');" /> <img src='./img/player/25.png' onclick="v_escolha('ps10');" /> <img src='./img/player/3.png' onclick="v_escolha('ps11');" /> <img src='./img/player/5.png' onclick="v_escolha('ps12');"/>  
<br>
<img src='./img/player/2.png' onclick="v_escolha('ps13');" /> <img src='./img/player/7.png' onclick="v_escolha('ps14');" /> <img src='./img/player/10.png' onclick="v_escolha('ps15');"/> <img src='./img/player/4.png' onclick="v_escolha('ps16');" id='mrf'>  
<br>
<br>
<div>
<button id='avatares'><nome id='n_avatar'>Nenhum Avatar Escolhido</nome></button>
</div>
<br>
<button id='continuar' onclick="iniciar_jogo();">Continuar</button>
</div>
`;  
    
}  


var avatar_escolhido = undefined; // Esta variavel começa com undefined, é a variavel responsavel por armazenar a escolha do usuario, concernente ao avatar.

function v_escolha(ps){ //Esta função eh chamada com o parametro ps, que armazena o codigo de cada personagem, o código varia de acordo com com a escolha do usuario, ps1, ps2, ps3, etc..
    
var cor_selector = '#00ff00'; //Esta variavel simplesmente armazena o código do Selector.
    
  if(ps == 'ps1'){ // Verificamos se o valor do parametro é igual a ps1, caso for, esse bloco é executado.
     
           register_p = 0;
           console.log(register_p);
      
           document.getElementById('n_avatar').innerHTML = avatares[0];
           avatar_escolhido = avatares[0];
           console.log('Avatar Escolhido: ',avatar_escolhido);
           document.getElementsByTagName('img')[0].style.borderColor = cor_selector; 
           document.getElementsByTagName('img')[1].style.borderColor = 'black';
           document.getElementsByTagName('img')[2].style.borderColor = 'black';
           document.getElementsByTagName('img')[3].style.borderColor = 'black';
           document.getElementsByTagName('img')[4].style.borderColor = 'black';
           document.getElementsByTagName('img')[5].style.borderColor = 'black';
           document.getElementsByTagName('img')[6].style.borderColor = 'black';
           document.getElementsByTagName('img')[7].style.borderColor = 'black';
           document.getElementsByTagName('img')[8].style.borderColor = 'black';
           document.getElementsByTagName('img')[9].style.borderColor = 'black';
           document.getElementsByTagName('img')[10].style.borderColor = 'black';
           document.getElementsByTagName('img')[11].style.borderColor = 'black';
           document.getElementsByTagName('img')[12].style.borderColor = 'black';
           document.getElementsByTagName('img')[13].style.borderColor = 'black';
           document.getElementsByTagName('img')[14].style.borderColor = 'black';
           document.getElementsByTagName('img')[15].style.borderColor = 'black';
           document.getElementById('mrf').style.borderColor = 'black';
               
      
      
  }else if(ps == 'ps2'){
      
           register_p = 1;
           document.getElementById('n_avatar').innerHTML = avatares[1];
           avatar_escolhido = avatares[1];
           document.getElementsByTagName('img')[0].style.borderColor = 'black';
           document.getElementsByTagName('img')[1].style.borderColor = cor_selector; 
           document.getElementsByTagName('img')[2].style.borderColor = 'black';
           document.getElementsByTagName('img')[3].style.borderColor = 'black';
           document.getElementsByTagName('img')[4].style.borderColor = 'black';
           document.getElementsByTagName('img')[5].style.borderColor = 'black';
           document.getElementsByTagName('img')[6].style.borderColor = 'black';
           document.getElementsByTagName('img')[7].style.borderColor = 'black';
           document.getElementsByTagName('img')[8].style.borderColor = 'black';
           document.getElementsByTagName('img')[9].style.borderColor = 'black';
           document.getElementsByTagName('img')[10].style.borderColor = 'black';
           document.getElementsByTagName('img')[11].style.borderColor = 'black';
           document.getElementsByTagName('img')[12].style.borderColor = 'black';
           document.getElementsByTagName('img')[13].style.borderColor = 'black';
           document.getElementsByTagName('img')[14].style.borderColor = 'black';
           document.getElementsByTagName('img')[15].style.borderColor = 'black';
           document.getElementById('mrf').style.borderColor = 'black';
         }else if(ps == 'ps3'){
             
           register_p = 2;
           document.getElementById('n_avatar').innerHTML = avatares[2];
           avatar_escolhido = avatares[2];
           document.getElementsByTagName('img')[0].style.borderColor = 'black';
           document.getElementsByTagName('img')[1].style.borderColor = 'black'; 
           document.getElementsByTagName('img')[2].style.borderColor = cor_selector;;
           document.getElementsByTagName('img')[3].style.borderColor = 'black';
           document.getElementsByTagName('img')[4].style.borderColor = 'black';
           document.getElementsByTagName('img')[5].style.borderColor = 'black';
           document.getElementsByTagName('img')[6].style.borderColor = 'black';
           document.getElementsByTagName('img')[7].style.borderColor = 'black';
           document.getElementsByTagName('img')[8].style.borderColor = 'black';
           document.getElementsByTagName('img')[9].style.borderColor = 'black';
           document.getElementsByTagName('img')[10].style.borderColor = 'black';
           document.getElementsByTagName('img')[11].style.borderColor = 'black';
           document.getElementsByTagName('img')[12].style.borderColor = 'black';
           document.getElementsByTagName('img')[13].style.borderColor = 'black';
           document.getElementsByTagName('img')[14].style.borderColor = 'black';
           document.getElementsByTagName('img')[15].style.borderColor = 'black';
           document.getElementById('mrf').style.borderColor = 'black';
         }else if(ps == 'ps4'){
             
           register_p = 3;
           document.getElementById('n_avatar').innerHTML = avatares[3];
           avatar_escolhido = avatares[3];
           document.getElementsByTagName('img')[0].style.borderColor = 'black';
           document.getElementsByTagName('img')[1].style.borderColor = 'black'; 
           document.getElementsByTagName('img')[2].style.borderColor = 'black';
           document.getElementsByTagName('img')[3].style.borderColor = cor_selector;
           document.getElementsByTagName('img')[4].style.borderColor = 'black';
           document.getElementsByTagName('img')[5].style.borderColor = 'black';
           document.getElementsByTagName('img')[6].style.borderColor = 'black';
           document.getElementsByTagName('img')[7].style.borderColor = 'black';
           document.getElementsByTagName('img')[8].style.borderColor = 'black';
           document.getElementsByTagName('img')[9].style.borderColor = 'black';
           document.getElementsByTagName('img')[10].style.borderColor = 'black';
           document.getElementsByTagName('img')[11].style.borderColor = 'black';
           document.getElementsByTagName('img')[12].style.borderColor = 'black';
           document.getElementsByTagName('img')[13].style.borderColor = 'black';
           document.getElementsByTagName('img')[14].style.borderColor = 'black';
           document.getElementsByTagName('img')[15].style.borderColor = 'black';
           document.getElementById('mrf').style.borderColor = 'black';
      
         }else if(ps == 'ps5'){
             
           register_p = 4;
           document.getElementById('n_avatar').innerHTML = avatares[4];
           avatar_escolhido = avatares[4];
           document.getElementsByTagName('img')[0].style.borderColor = 'black';
           document.getElementsByTagName('img')[1].style.borderColor = 'black'; 
           document.getElementsByTagName('img')[2].style.borderColor = 'black';
           document.getElementsByTagName('img')[3].style.borderColor = 'black'
           document.getElementsByTagName('img')[4].style.borderColor = cor_selector;;
           document.getElementsByTagName('img')[5].style.borderColor = 'black'
           document.getElementsByTagName('img')[6].style.borderColor = 'black';
           document.getElementsByTagName('img')[7].style.borderColor = 'black';
           document.getElementsByTagName('img')[8].style.borderColor = 'black';
           document.getElementsByTagName('img')[9].style.borderColor = 'black';
           document.getElementsByTagName('img')[10].style.borderColor = 'black';
           document.getElementsByTagName('img')[11].style.borderColor = 'black';
           document.getElementsByTagName('img')[12].style.borderColor = 'black';
           document.getElementsByTagName('img')[13].style.borderColor = 'black';
           document.getElementsByTagName('img')[14].style.borderColor = 'black';
           document.getElementsByTagName('img')[15].style.borderColor = 'black';
           document.getElementById('mrf').style.borderColor = 'black';
      
         }else if(ps == 'ps6'){
             
           register_p = 5;
           document.getElementById('n_avatar').innerHTML = avatares[5];
           avatar_escolhido = avatares[5];
           document.getElementsByTagName('img')[0].style.borderColor = 'black';
           document.getElementsByTagName('img')[1].style.borderColor = 'black'; 
           document.getElementsByTagName('img')[2].style.borderColor = 'black';
           document.getElementsByTagName('img')[3].style.borderColor = 'black';
           document.getElementsByTagName('img')[4].style.borderColor = 'black';
           document.getElementsByTagName('img')[5].style.borderColor = cor_selector;
           document.getElementsByTagName('img')[6].style.borderColor = 'black'
           document.getElementsByTagName('img')[7].style.borderColor = 'black';
           document.getElementsByTagName('img')[8].style.borderColor = 'black';
           document.getElementsByTagName('img')[9].style.borderColor = 'black';
           document.getElementsByTagName('img')[10].style.borderColor = 'black';
           document.getElementsByTagName('img')[11].style.borderColor = 'black';
           document.getElementsByTagName('img')[12].style.borderColor = 'black';
           document.getElementsByTagName('img')[13].style.borderColor = 'black';
           document.getElementsByTagName('img')[14].style.borderColor = 'black';
           document.getElementsByTagName('img')[15].style.borderColor = 'black';
           document.getElementById('mrf').style.borderColor = 'black';
      
         }else if(ps == 'ps7'){
           
           register_p = 6;
           document.getElementById('n_avatar').innerHTML = avatares[6];
           avatar_escolhido = avatares[6];
           document.getElementsByTagName('img')[0].style.borderColor = 'black';
           document.getElementsByTagName('img')[1].style.borderColor = 'black'; 
           document.getElementsByTagName('img')[2].style.borderColor = 'black';
           document.getElementsByTagName('img')[3].style.borderColor = 'black';
           document.getElementsByTagName('img')[4].style.borderColor = 'black';
           document.getElementsByTagName('img')[5].style.borderColor = 'black';
           document.getElementsByTagName('img')[6].style.borderColor = cor_selector;
           document.getElementsByTagName('img')[7].style.borderColor = 'black';
           document.getElementsByTagName('img')[8].style.borderColor = 'black';
           document.getElementsByTagName('img')[9].style.borderColor = 'black';
           document.getElementsByTagName('img')[10].style.borderColor = 'black';
           document.getElementsByTagName('img')[11].style.borderColor = 'black';
           document.getElementsByTagName('img')[12].style.borderColor = 'black';
           document.getElementsByTagName('img')[13].style.borderColor = 'black';
           document.getElementsByTagName('img')[14].style.borderColor = 'black';
           document.getElementsByTagName('img')[15].style.borderColor = 'black';
           document.getElementById('mrf').style.borderColor = 'black';
      
         }else if(ps == 'ps8'){
           
           register_p = 7;
           document.getElementById('n_avatar').innerHTML = avatares[7];
           avatar_escolhido = avatares[7];
           document.getElementsByTagName('img')[0].style.borderColor = 'black';
           document.getElementsByTagName('img')[1].style.borderColor = 'black'; 
           document.getElementsByTagName('img')[2].style.borderColor = 'black';
           document.getElementsByTagName('img')[3].style.borderColor = 'black';
           document.getElementsByTagName('img')[4].style.borderColor = 'black';
           document.getElementsByTagName('img')[5].style.borderColor = 'black';
           document.getElementsByTagName('img')[6].style.borderColor = 'black';
           document.getElementsByTagName('img')[7].style.borderColor = cor_selector;
           document.getElementsByTagName('img')[8].style.borderColor = 'black'
           document.getElementsByTagName('img')[9].style.borderColor = 'black';
           document.getElementsByTagName('img')[10].style.borderColor = 'black';
           document.getElementsByTagName('img')[11].style.borderColor = 'black';
           document.getElementsByTagName('img')[12].style.borderColor = 'black';
           document.getElementsByTagName('img')[13].style.borderColor = 'black';
           document.getElementsByTagName('img')[14].style.borderColor = 'black';
           document.getElementsByTagName('img')[15].style.borderColor = 'black';
           document.getElementById('mrf').style.borderColor = 'black';
      
         }else if(ps == 'ps9'){
             
           register_p = 8;  
           document.getElementById('n_avatar').innerHTML = avatares[8];
           avatar_escolhido = avatares[8];
           document.getElementsByTagName('img')[0].style.borderColor = 'black';
           document.getElementsByTagName('img')[1].style.borderColor = 'black'; 
           document.getElementsByTagName('img')[2].style.borderColor = 'black';
           document.getElementsByTagName('img')[3].style.borderColor = 'black';
           document.getElementsByTagName('img')[4].style.borderColor = 'black';
           document.getElementsByTagName('img')[5].style.borderColor = 'black';
           document.getElementsByTagName('img')[6].style.borderColor = 'black';
           document.getElementsByTagName('img')[7].style.borderColor = 'black';
           document.getElementsByTagName('img')[8].style.borderColor = cor_selector;
           document.getElementsByTagName('img')[9].style.borderColor = 'black';
           document.getElementsByTagName('img')[10].style.borderColor = 'black';
           document.getElementsByTagName('img')[11].style.borderColor = 'black';
           document.getElementsByTagName('img')[12].style.borderColor = 'black';
           document.getElementsByTagName('img')[13].style.borderColor = 'black';
           document.getElementsByTagName('img')[14].style.borderColor = 'black';
           document.getElementById('mrf').style.borderColor = 'black';
         }else if(ps == 'ps10'){
             
           register_p = 9;  
           document.getElementById('n_avatar').innerHTML = avatares[9];
           avatar_escolhido = avatares[9];
           document.getElementsByTagName('img')[0].style.borderColor = 'black';
           document.getElementsByTagName('img')[1].style.borderColor = 'black'; 
           document.getElementsByTagName('img')[2].style.borderColor = 'black';
           document.getElementsByTagName('img')[3].style.borderColor = 'black';
           document.getElementsByTagName('img')[4].style.borderColor = 'black';
           document.getElementsByTagName('img')[5].style.borderColor = 'black';
           document.getElementsByTagName('img')[6].style.borderColor = 'black';
           document.getElementsByTagName('img')[7].style.borderColor = 'black';
           document.getElementsByTagName('img')[8].style.borderColor = 'black';
           document.getElementsByTagName('img')[9].style.borderColor = cor_selector;
           document.getElementsByTagName('img')[10].style.borderColor = 'black';
           document.getElementsByTagName('img')[11].style.borderColor = 'black';
           document.getElementsByTagName('img')[12].style.borderColor = 'black';
           document.getElementsByTagName('img')[13].style.borderColor = 'black';
           document.getElementsByTagName('img')[14].style.borderColor = 'black';
           document.getElementsByTagName('img')[15].style.borderColor = 'black';
           document.getElementById('mrf').style.borderColor = 'black';
      
         }else if(ps == 'ps11'){
             
           register_p = 10; 
           document.getElementById('n_avatar').innerHTML = avatares[10];   
           avatar_escolhido = avatares[10];
             
           document.getElementsByTagName('img')[0].style.borderColor = 'black';
           document.getElementsByTagName('img')[1].style.borderColor = 'black'; 
           document.getElementsByTagName('img')[2].style.borderColor = 'black';
           document.getElementsByTagName('img')[3].style.borderColor = 'black';
           document.getElementsByTagName('img')[4].style.borderColor = 'black';
           document.getElementsByTagName('img')[5].style.borderColor = 'black';
           document.getElementsByTagName('img')[6].style.borderColor = 'black';
           document.getElementsByTagName('img')[7].style.borderColor = 'black';
           document.getElementsByTagName('img')[8].style.borderColor = 'black';
           document.getElementsByTagName('img')[9].style.borderColor = 'black';
           document.getElementsByTagName('img')[10].style.borderColor = cor_selector;
           document.getElementsByTagName('img')[11].style.borderColor = 'black';
           document.getElementsByTagName('img')[12].style.borderColor = 'black';
           document.getElementsByTagName('img')[13].style.borderColor = 'black';
           document.getElementsByTagName('img')[14].style.borderColor = 'black';
           document.getElementsByTagName('img')[15].style.borderColor = 'black';
           document.getElementById('mrf').style.borderColor = 'black';
      
         }else if(ps == 'ps12'){
           
           register_p = 11;  
             
           document.getElementById('n_avatar').innerHTML = avatares[11];
             
           avatar_escolhido = avatares[11];
             
           document.getElementsByTagName('img')[0].style.borderColor = 'black';
           document.getElementsByTagName('img')[1].style.borderColor = 'black'; 
           document.getElementsByTagName('img')[2].style.borderColor = 'black';
           document.getElementsByTagName('img')[3].style.borderColor = 'black';
           document.getElementsByTagName('img')[4].style.borderColor = 'black';
           document.getElementsByTagName('img')[5].style.borderColor = 'black';
           document.getElementsByTagName('img')[6].style.borderColor = 'black';
           document.getElementsByTagName('img')[7].style.borderColor = 'black';
           document.getElementsByTagName('img')[8].style.borderColor = 'black';
           document.getElementsByTagName('img')[9].style.borderColor = 'black';
           document.getElementsByTagName('img')[10].style.borderColor = 'black';
           document.getElementsByTagName('img')[11].style.borderColor = cor_selector;
           document.getElementsByTagName('img')[12].style.borderColor = 'black';
           document.getElementsByTagName('img')[13].style.borderColor = 'black';
           document.getElementsByTagName('img')[14].style.borderColor = 'black';
           document.getElementsByTagName('img')[15].style.borderColor = 'black';
           document.getElementById('mrf').style.borderColor = 'black';    
         }else if(ps == 'ps13'){
             
           register_p = 12;  
           document.getElementById('n_avatar').innerHTML = avatares[12];
             
           avatar_escolhido = avatares[12];
             
           document.getElementsByTagName('img')[0].style.borderColor = 'black';
           document.getElementsByTagName('img')[1].style.borderColor = 'black'; 
           document.getElementsByTagName('img')[2].style.borderColor = 'black';
           document.getElementsByTagName('img')[3].style.borderColor = 'black';
           document.getElementsByTagName('img')[4].style.borderColor = 'black';
           document.getElementsByTagName('img')[5].style.borderColor = 'black';
           document.getElementsByTagName('img')[6].style.borderColor = 'black';
           document.getElementsByTagName('img')[7].style.borderColor = 'black';
           document.getElementsByTagName('img')[8].style.borderColor = 'black';
           document.getElementsByTagName('img')[9].style.borderColor = 'black';
           document.getElementsByTagName('img')[10].style.borderColor = 'black';
           document.getElementsByTagName('img')[11].style.borderColor = 'black';
           document.getElementsByTagName('img')[12].style.borderColor = cor_selector;
           document.getElementsByTagName('img')[13].style.borderColor = 'black';
           document.getElementsByTagName('img')[14].style.borderColor = 'black';
           document.getElementsByTagName('img')[15].style.borderColor = 'black';
           document.getElementById('mrf').style.borderColor = 'black';
             
         }else if(ps == 'ps14'){
           
           register_p = 13;  
           document.getElementById('n_avatar').innerHTML = avatares[13];
           avatar_escolhido = avatares[13];
           document.getElementsByTagName('img')[0].style.borderColor = 'black';
           document.getElementsByTagName('img')[1].style.borderColor = 'black'; 
           document.getElementsByTagName('img')[2].style.borderColor = 'black';
           document.getElementsByTagName('img')[3].style.borderColor = 'black';
           document.getElementsByTagName('img')[4].style.borderColor = 'black';
           document.getElementsByTagName('img')[5].style.borderColor = 'black';
           document.getElementsByTagName('img')[6].style.borderColor = 'black';
           document.getElementsByTagName('img')[7].style.borderColor = 'black';
           document.getElementsByTagName('img')[8].style.borderColor = 'black';
           document.getElementsByTagName('img')[9].style.borderColor = 'black';
           document.getElementsByTagName('img')[10].style.borderColor = 'black';
           document.getElementsByTagName('img')[11].style.borderColor = 'black';
           document.getElementsByTagName('img')[12].style.borderColor = 'black';
           document.getElementsByTagName('img')[13].style.borderColor = cor_selector;
           document.getElementsByTagName('img')[14].style.borderColor = 'black';
           document.getElementsByTagName('img')[15].style.borderColor = 'black';
           document.getElementById('mrf').style.borderColor = 'black';
         }else if(ps == 'ps15'){
           
           register_p = 14;  
           document.getElementById('n_avatar').innerHTML = avatares[14];
           avatar_escolhido = avatares[14];
           document.getElementsByTagName('img')[0].style.borderColor = 'black';
           
           document.getElementsByTagName('img')[1].style.borderColor = 'black'; 
           document.getElementsByTagName('img')[2].style.borderColor = 'black';
           document.getElementsByTagName('img')[3].style.borderColor = 'black';
           document.getElementsByTagName('img')[4].style.borderColor = 'black';
           document.getElementsByTagName('img')[5].style.borderColor = 'black';
           document.getElementsByTagName('img')[6].style.borderColor = 'black';
           document.getElementsByTagName('img')[7].style.borderColor = 'black';
           document.getElementsByTagName('img')[8].style.borderColor = 'black';
           document.getElementsByTagName('img')[9].style.borderColor = 'black';
           document.getElementsByTagName('img')[10].style.borderColor = 'black';
           document.getElementsByTagName('img')[11].style.borderColor = 'black';
           document.getElementsByTagName('img')[12].style.borderColor = 'black';
           document.getElementsByTagName('img')[13].style.borderColor = 'black';
           document.getElementsByTagName('img')[14].style.borderColor = cor_selector;
           document.getElementsByTagName('img')[15].style.borderColor = 'black';
                document.getElementById('mrf').style.borderColor = 'black';
         }else if(ps == 'ps16'){
             
           register_p = 15;  
           document.getElementById('n_avatar').innerHTML = avatares[15];
           avatar_escolhido = avatares[15];
           document.getElementsByTagName('img')[0].style.borderColor = 'black';
           document.getElementsByTagName('img')[1].style.borderColor = 'black'; 
           document.getElementsByTagName('img')[2].style.borderColor = 'black';
           document.getElementsByTagName('img')[3].style.borderColor = 'black';
           document.getElementsByTagName('img')[4].style.borderColor = 'black';
           document.getElementsByTagName('img')[5].style.borderColor = 'black';
           document.getElementsByTagName('img')[6].style.borderColor = 'black';
           document.getElementsByTagName('img')[7].style.borderColor = 'black';
           document.getElementsByTagName('img')[8].style.borderColor = 'black';
           document.getElementsByTagName('img')[9].style.borderColor = 'black';
           document.getElementsByTagName('img')[10].style.borderColor = 'black';
           document.getElementsByTagName('img')[11].style.borderColor = 'black';
           document.getElementsByTagName('img')[12].style.borderColor = 'black';
           document.getElementsByTagName('img')[13].style.borderColor = 'black';
           document.getElementsByTagName('img')[14].style.borderColor = 'black';
           document.getElementById('mrf').style.borderColor =  cor_selector;
         }
    
}
//function processar_inicio_do_jogo(){ setTimeout(iniciar_jogo,200);  este codigo esta em uso na versao 2.0 deste jogo        

function iniciar_jogo(){

     var analizar_sessao = document.getElementById('n_avatar');
  
     if(analizar_sessao.textContent == 'Nenhum Avatar Escolhido'){
     
            console.log('Voce nao escolheu um avatar, o Jogo sera no modo indefinido!!');
     }
        document.body.innerHTML = '';
        document.body.style.background = 'black';
    
//document.body.removeChild(conteiner); document.body.removeChild(centro); este codigo esta em uso na versao 2.0 deste jogo... conteiner.removeChild(titulo);centro.removeChild(botao);document.head.removeChild(css); este codigo esta em uso na versao 2.0 deste jogo...  
    
const divv = document.createElement('div'); document.body.appendChild(divv);
//Criei um elemento Div que basicamente depois eu usarei para colocar a imagem.
    
const spann = document.createElement('span'); divv.appendChild(spann); //Aqui basicamente eu crio um span.

const quadro_da_imagem = document.createElement('section'); document.body.appendChild(quadro_da_imagem); quadro_da_imagem.style.position = 'relative'; //Aqui basicamente eu crio o quadro da imagem queuma section e depois eu configuro o position deste quadro para absolute.
    
    
const img_personagem = document.createElement('img'); img_personagem.src = source_img[register_p]; //Aqui eu crio um Elemento IMG, que é o elemento que usarei para randerizar a imagem que o usuario escolheu, depois eu passo a referencia desta imagem, que é armazenada pelo registrer_p, que o registrador dos personagens.

quadro_da_imagem.appendChild(img_personagem); //Hora viva, aqui a gente adiciona a nossa imagem dentro do nosso quadro de imagem.
    
    img_personagem.style.width = 100; img_personagem.height = 100; //Aqui eu configuro a largura e altura da imagem para 100px
    
    img_personagem.style.position = 'absolute'; //Configuro a imagem com um position absolute.
    
var placa_de_nome = document.createElement('button'); //Aqui eu crio um elemento button, mas esse elemento button não ira servir para assionar um evento, mas simplesmente para exibir o nome do personagem. 
    
placa_de_nome.style.position = 'absolute'; //Definimos a placa do nome com um position absolute.
    
quadro_da_imagem.appendChild(placa_de_nome); placa_de_nome.style.marginTop = 120; //Nesta etapa eu adiciono a placa do nome dentro do nosso quadro da imagem, e depois configuro o margin top da placa  da imagem para 120 px.
    
placa_de_nome.style.width = 104;  placa_de_nome.style.height = 20; 
    
placa_de_nome.textContent = avatares[register_p]; //Aqui a gente passa o nome do avatar dentro da nossa placa de nome.
    
const tag_canvas = document.createElement('canvas'); //Criei um elemento canvas
    
document.body.appendChild(tag_canvas); //Adicionei esse elemento canvas no body.   
    
    
const canvas = window.document.querySelector('body canvas');
    
canvas.style.border = '1px solid white'; canvas.style.display = 'flex';
    
    
const canvas_largura = (400 * 2); canvas.width = canvas_largura; 
    
canvas.style.margin = '0 auto'; canvas.style.backgroundColor = cor_do_canvas;
    
const canvas_altura = 600; canvas.height = canvas_altura; 
const display = window.document.querySelector('html body'); 
    
display.style.backgroundColor = cor_arena; 
display.style.color = cor_textos;

const ctx = canvas.getContext('2d');
const placar = document.querySelector('div span');
    
placar.style.fontSize = '26px';

var contar_pontos = false;
    
var pontos = 0;
    
const id_img = ['./img/player/Idle.png'];
    
const img = new Image(); img.src = id_img[0];
    
const obstaculo = {
    x: Math.floor(Math.random() * canvas_largura),
    y: 10,
    largura: 20,
    altura: 20,
    velocidade: 10,
    desenhar: function(){   
        ctx.fillStyle = cor_quadros;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        this.y+= this.velocidade;
        if(this.y > canvas_altura){
            this.y = -90;
            this.x = Math.floor(Math.random() * canvas_largura);
            pontos++;
            contar_pontos = pontos;
            console.log('pontos: ',contar_pontos);
            placar.innerHTML = `Pontos: ${pontos}`;
        }
    }
};

const obstaculo2 = {
    x: Math.floor(Math.random() * canvas_largura),
    y: 10,
    largura: 20,
    altura: 20,
    velocidade: 10,
    desenhar: function(){   
        ctx.fillStyle = cor_quadros;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        this.y+= this.velocidade;
        if(this.y > canvas_altura){
            this.y = -10;
            this.x = Math.floor(Math.random() * canvas_largura);           
        }
    }
}

window.document.addEventListener('keydown',controlo);
    
var player = {
    px: 0,
    py: 0,
    cx: 61,
    cy: 105,
    largura: 50,
    altura: 50,
    x: canvas_largura / 2,
    y: 480,   
    deslocamento: 35,
    desenhar: function(){
                  ctx.drawImage(img,this.px,this.py,this.cx,this.cy,this.x,this.y,50,50);        
},
    processamento: function(){
      
        player.desenhar();
    },
}

var vida = {
   barra: 110,
   desenhar: function(){     
       ctx.fillStyle = '#ffffff';
       ctx.fillRect(0,0,110,13);
       ctx.fillStyle = '#0000ff';
       ctx.fillRect(0,0,this.barra,13);
    },
};

const damage = ['./img/player/Damage.png','./img/player/Damage (1).png','./img/player/Damage (2).png','./img/player/Damage (3).png','./img/player/Damage (4).png','./img/player/Damage (5).png','./img/player/Damage (6).png'];
 
const destruido = ['./img/player/Destroyede.png','./img/player/Destroyede (1).png','./img/player/Destroyede (2).png','./img/player/Destroyede (3).png','./img/player/Destroyede (7).png'];
    
    
function colisao(){

    if (player.x < obstaculo.x + obstaculo.largura && player.x + player.largura > obstaculo.x && player.y < obstaculo.y + obstaculo.altura && player.y + player.altura > obstaculo.y) {
      console.log('Colidiu!!');
      vida.barra -= 6; 
      obstaculo.y = -10;
      obstaculo.x = Math.floor(Math.random() * canvas_largura); 
     img.src = damage[0];
    setTimeout(function(){ 
        img.src = damage[1];
    setTimeout(function(){ 
        img.src = damage[2];
    setTimeout(function(){ 
        img.src = damage[3];
    setTimeout(function(){ 
        img.src = damage[4];
    setTimeout(function(){ 
        img.src = damage[5];
    setTimeout(function(){ 
        img.src = damage[6];
    
      },100);   
      },100);     
      },100);   
      },100);   
      },100);
      },100);
        
}

else if (player.x < obstaculo2.x + obstaculo2.largura && player.x + player.largura > obstaculo2.x && player.y < obstaculo2.y + obstaculo2.altura && player.y + player.altura > obstaculo2.y) {   
    console.log('colidiu!!');
    vida.barra -= 6;
    obstaculo2.y = -10;
    obstaculo2.x = Math.floor(Math.random() * canvas_largura); 
    img.src = damage[0];
    setTimeout(function(){ 
        img.src = damage[1];
    setTimeout(function(){ 
         img.src = damage[2];
    setTimeout(function(){ 
        img.src = damage[3];
    setTimeout(function(){ 
        img.src = damage[4];
    setTimeout(function(){ 
        img.src = damage[5];
    setTimeout(function(){ 
        img.src = damage[6]; 
 
      },100);   
      },100);   
      },100);   
      },100);
      },100);  
      },100);
   }
}
    
    
function niveis(){
    
    if(contar_pontos > 50 && contar_pontos <= 100){
    
         canvas.style.backgroundColor = '#0055ff';
         
    }else if(contar_pontos >= 100 && contar_pontos <= 150){
    
         canvas.style.backgroundColor = '#005500';
    }else if(contar_pontos >= 150 && contar_pontos <= 200){
    
         canvas.style.backgroundColor = '#dd1144';
    
    }else{
    
          canvas.style.backgroundColor = '#44dd22'; 
    }
    
  }
      
function controlo(){
     
    let tecla = event.keyCode;
    
    if(tecla == 37 && player.x >= 50){ player.x -= player.deslocamento; 
                                        
        console.log('X: ',player.x);
                                     
}
    if(tecla == 39 && player.x <= 715){ player.x += player.deslocamento; 
     
        console.log('X: ',player.x); }
}
function actualizar(){
    niveis()
    limpar();
    colisao();
    player.processamento();
    obstaculo.desenhar();
    obstaculo2.desenhar();
    vida.desenhar();  
    
    if(vida.barra < 2){
    
        clearInterval(game);   
    
    }   
}
    
var limpar = function(){ ctx.clearRect(0,0,canvas_largura, canvas_altura)};

function loop(){
    
    actualizar();    
}
    
  var game = setInterval(loop,12);

}
