 //criação de uma timeline do GSAP COM ANIMAÇÕES  sincronizadas com scroll
 

var tl = gsap.timeline({
    scrollTrigger:  {
        trigger: '.two',
        start: '0% 95%', 
        end: '70% 50%',
        scrub: true,
        markers: true, //depuração
    },
});

tl.to (
    '#fanta',
    {
        top:'120%', // move o elemento com id fanta para 120% do topo 
        left: '0%', 
    },
    'orange'

); //nomeando esse trecho de animação como orange para sincronização 

tl.to (
    '#laranja-cortada',
    {
        top:'160%', // move o elemento orange cut para 160% do topo 
        left: '23%', //move o elemento 23% para esquerda
    },
    'orange'

); //sincronizando com a animação nomeada 'orange'

tl.to(
    '#laranja',
    {
        width: '15%',
        top: '163%', 
        righth: '10%',
    },
    'orange'
);

tl.to (
    '#folha',
    {
        top: '110%',
        rotate: '400deg',
        left: '70%',
    }, 
    'orange'
);

tl.to (
    '#folha2',
    {
        top: '110%',
        rotate: '400deg',
        left: '0%',
    }, 
    'orange'
);

//criando outra timeline

var tl2 = gsap.timeline({
    scrollTrigger:  {
        trigger: '.three',
        start: '0% 95%', 
        end: '20% 50%',
        scrub: true,
        markers: true, //depuração
    },
});

tl2.from (
    '.lemon1',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);

tl2.from (
    '#cocacola',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);

tl2.from (
    '.lemon2',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
       
    },
    'ca'
);

tl2.from (
    '#pepsi',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.to (
    '#laranja-cortada',
    {
        width: '18%',
        left: '41%',
        top: '201%', 
    },
    'ca'
);

tl2.to (
    '#fanta',
    {
        width: '32%',
        left: '34%',
        top: '210%', 
    },
    'ca'
);

