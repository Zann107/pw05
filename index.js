var p01 = document.querySelector("#one");
var p02 = document.querySelector("#two");
var p03 = document.querySelector("#trid");
var p04 = document.querySelector("#foor");
var p05 = document.querySelector("#five");
var p06 = document.querySelector("#six");
var infotxt = document.querySelector(".infotxt");



p01.addEventListener("mouseover",function(){infotxt.innerHTML ="<h1>La main</h1> La main (du latin : manus, « côté du corps1 ») est l’organe préhensile effecteur situé à l’extrémité de l’avant-bras et relié à ce dernier par le poignet. C'est un organe capable notamment de saisir et manipuler des objets. Chez l'homme, la main est un organe extrêmement développé et important, elle dispose d'une palette d'actions très large. Située à l'extrémité des deux membres supérieurs, chaque main possède cinq doigts qui apportent une contribution majeure au sens du toucher."});
p01.addEventListener("mouseout",function(){infotxt.innerHTML ="";});
p01.addEventListener("mouseover",function(event){event.target.style.backgroundColor = "red";});
p01.addEventListener("mouseout",function(event){event.target.style.backgroundColor = "";});

p02.addEventListener("mouseover",function(){infotxt.innerHTML ="<h1>Cheville</h1> La cheville ou cou-de-pied est l'articulation qui relie la jambe et le pied."});
p02.addEventListener("mouseout",function(){infotxt.innerHTML ="";});
p02.addEventListener("mouseover",function(event){event.target.style.backgroundColor = "red";});
p02.addEventListener("mouseout",function(event){event.target.style.backgroundColor = "";});


p03.addEventListener("mouseover",function(){infotxt.innerHTML ="<h1>Coude</h1> Le coude (ou articulation olécranienne) est la partie du membre supérieur située entre le bras et l'avant-bras. Cette articulation comprend en avant la région du « pli du coude » (ou fosse cubitale). C'est un complexe articulaire synovial du membre supérieur humain reliant le bras à l'avant-bras. Il unit ainsi trois os entre eux : le radius, l'ulna (cubitus) et l'humérus.Elle est la réunion de trois articulations : huméro-ulnaire, huméro-radiale et radio-ulnaire proximale (supérieure). Lorsque l\'avant-bras est tendu (extension complète), le bras et l\'avant-bras ne sont pas alignés dans le plan frontal. Les deux parties forment un angle ouvert en dehors, d'environ 170° chez l'homme, 160\° chez la femme \; c'est ce qui est appelé le valgus physiologique (on retrouve la même chose pour le genou)"});
p03.addEventListener("mouseout",function(){infotxt.innerHTML ="";});
p03.addEventListener("mouseover",function(event){event.target.style.backgroundColor = "red";});
p03.addEventListener("mouseout",function(event){event.target.style.backgroundColor = "";});


p04.addEventListener("mouseover",function(){infotxt.innerHTML ="<h1>Epaule</h1> L\'épaule (nom féminin) est la région morphologique se situant à la jonction du tronc avec le membre supérieur.Elle comporte plusieurs articulations qui concourent à en faire le complexe articulaire le plus mobile du corps humain. Elle permet d\'orienter le membre supérieur dans l\'espace, autorisant en particulier son extrémité effectrice, la main, à assurer ses rôles de préhension et de communication avec l\'environnement situé à sa portée "});
p04.addEventListener("mouseout",function(){infotxt.innerHTML ="";});
p04.addEventListener("mouseover",function(event){event.target.style.backgroundColor = "red";});
p04.addEventListener("mouseout",function(event){event.target.style.backgroundColor = "";});


p05.addEventListener("mouseover",function(){infotxt.innerHTML ="<h1>Hanche</h1> La hanche ou articulation coxo-fémorale est une articulation (énarthrose) qui permet de joindre la cuisse au bassin. Elle met en jeu deux os : l'os iliaque et le fémur."});
p05.addEventListener("mouseout",function(){infotxt.innerHTML ="";});
p05.addEventListener("mouseover",function(event){event.target.style.backgroundColor = "red";});
p05.addEventListener("mouseout",function(event){event.target.style.backgroundColor = "";});


p06.addEventListener("mouseover",function(){infotxt.innerHTML ="<h1>Genou</h1> Le genou est une articulation qui permet de joindre la jambe à la cuisse. Elle met en jeu trois os, le fémur, le tibia et la patella, par le biais de trois articulations, l'articulation fémoro-patellaire et la double articulation fémoro-tibiale. Le cartilage assure la fluidité des mouvements du genou. Le tissu élastique fin, le cartilage, protège l'os et fait en sorte que les surfaces de l'articulation glissent facilement les unes contre les autres. Le genou renferme deux types de cartilages articulaires: le cartilage fibreux (ménisque) et le cartilage hyalin. Le cartilage s'use non seulement au fil des ans, mais aussi en fonction de son utilisation. Le cartilage possède en outre une capacité de régénération limitée."});
p06.addEventListener("mouseout",function(){infotxt.innerHTML ="";});
p06.addEventListener("mouseover",function(event){event.target.style.backgroundColor = "red";});
p06.addEventListener("mouseout",function(event){event.target.style.backgroundColor = "";});

