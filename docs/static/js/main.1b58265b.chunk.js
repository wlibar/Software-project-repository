(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{11:function(e,a,o){},12:function(e,a,o){"use strict";o.r(a);var n=o(1),r=o(4),t=o.n(r),i=o(2),s=o(0),c=function(e){var a=e.setFiltro,o=Object(n.useState)(""),r=Object(i.a)(o,2),t=r[0],c=r[1];return Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault(),a((function(e){return t})),c("")},children:Object(s.jsx)("input",{className:"form-control mr-sm-2",type:"text",value:t,placeholder:"Busque por periodo (Ej. 2021.1), arquitecturas, tecnolog\xedas y presione ENTER",onChange:function(e){c(e.target.value)}})})},l=o(5),u=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("div",{className:"card animate__animated animate__backInDown",children:Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsxs)("h5",{className:"card-title text-center",children:["Id: ",e.id," \xa0",e.winner&&Object(s.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAYAAAAxFw7TAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5QoTDw0cKLKlfgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAOzSURBVDjLrZRLaFxVGMd/37mPSeaRybSDpmltySJRoQ8LiiD4qEgj2Ggrio9FQUFx5U5ciBtB6dLXRncuCqXFiDatBKvShSAWSaBYS7WG1jQhpjXNZF537r3nc3GnN840rQg9q3u+853f/Z//950jqkr3UD3Xe+mnj8Zs+PeYDebudnu3jIAxUfPCWccfOCN+eWLjvW8cFbOp0b1XuoGXTr3+WlSdedcG0+u4yTCZbYtufvjtjfd98MmawMrs4fzyhWNHopXvHk+VRkAoqG0nG8BTxE234/XtniwOjT1T2PBUFcAFiFu/9FydGT8e13548BpIawKRdFrRhqirSE4RVwkrk6NXzzeP5crbdxtvKDAA81OfHrgGswHosrkO1jEiQZcNcbM9rZ58aG7q4wMAcuWPQyOV8x/+qtFFo5Ggy9eDJJdo01rnmlWFgsXNCOLc3uobeXOrqc1/+7JGF02yYS33QTKKZBRM15IIYaX9s3jBr8+deMnY8PJjaQGuHVMAV5EMSN4mcwHJK2Q0cb6damJD1EqgNm6NuUacbRY6PJOCRbzVMqRxT9O4hqAVg+sZgmYL13cRDYaNtaF/XWOvGDS8cU00FHTFrJZeEzHWNjJGxMwn2rWjP7Ri0HgNWAxakVR8GMY4rrSdyswZcbI/JsdZ9SU94lqd0xULwhi/N1Fr/P6fjZMdOpQm9mhHdTGJWtsQtJGoErMKjSKLybZjgOkpf2YGd75yxMnefxbA9Cq4unrsmmCXDNQFrSffWk9ocazUwhb59ck9dHIPnB3cvn/cIJvVL+7cj1nXQMD0KerZBNiUzkIraENoNmLqcYv+QT+xxbmt4ffd+SLOiBqAgR1vnVpaePj9uGVAwOkDm4sJJSYIY4IgptmMqDVCqmGAW1KKGzzEgG05VGaG3xvY8c5U+jgA6G8D0bmpPjY/VyVXjnB7BLenvWYTkxOvnFRwY9Fj+XCR/tOzf/FqEkuBRpXCdA9/Trt4Tzcp3xNQHIhBbGp60myG6oJDdTqL92WeEi7yr9K73V2Rx0XH8yx83suFdTHe9givpORxiZcETntkr3qUxGGtrnK5QatlxSG75MDJ5CKVnMwq4CYvm+EWj1sOdP8zY6BUc8qlCSKFoLWXi5cz/xsod5QDyWYn/K0j40OPjo6Xn3ykCbAy8X12/psT++yZ3/dJoznG7BX/hkAnlwvMXZu/Yn3p4Kbnn/16y97Rle7kwp5d9cKeXQeBgwtfTBaWjh5/gvnFF7xiPn2X/gGHhotjrhQ4TQAAAABJRU5ErkJggg==",alt:"Ganador",title:"Proyecto ganador"})]}),Object(s.jsxs)("p",{className:"card-text",children:[Object(s.jsx)("strong",{children:"Proyecto:"})," ",e.titulo,". ",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{class:"btn btn-light",type:"button","data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample",children:"Ver estudiantes"}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{class:"collapse",id:"collapseExample",children:Object(s.jsx)("div",{class:"card card-body",children:e.estudiantes.map((function(e){return e.nombres+"; "}))})}),Object(s.jsx)("strong",{children:"Profesores:"})," ",e.docentes.map((function(e){return e.nombres+"; "}))," ",Object(s.jsx)("br",{}),Object(s.jsx)("strong",{children:"Asigntura:"})," ",e.asignatura," ",Object(s.jsx)("br",{}),Object(s.jsx)("strong",{children:"Arquitecturas:"})," ",e.arquitecturas," ",Object(s.jsx)("br",{}),Object(s.jsx)("strong",{children:"Tecnolog\xedas:"})," ",e.tecnologias," ",Object(s.jsx)("br",{}),Object(s.jsx)("strong",{children:"Per\xedodo:"})," ",e.periodo,". \xa0",Object(s.jsx)("a",{href:e.link,className:"btn btn-primary",target:"_blank",rel:"noreferrer",children:"Visitar "})]})]})})})},d=function(e){var a=e.filtro,o=function(e){var a=Object(n.useState)({data:[],loading:!0}),o=Object(i.a)(a,2),r=o[0],t=o[1];return Object(n.useEffect)((function(){var a=function(e){var a=[{id:"1",periodo:"2020.1",docentes:[{nombres:"W. Libardo Pantoja Y."}],asignatura:"Lab. de Ing. de Software II",estudiantes:[{nombres:"Santiago Acu\xf1a Obando"},{nombres:"Julian Alejandro Rodriguez Ceron"},{nombres:"Maria Teresa Trujillo Camachon"},{nombres:"Sebastian Camilo Otaya Bravo"},{nombres:"Magda Ximena Gallego Sanchez "}],titulo:"Restaurante online",arquitecturas:"Hexagonal, Microservicios",tecnologias:"JavaEE",link:"https://github.com/lordimpi/OnlineRestaurantSecondIteration.git"},{id:"2",periodo:"2020.1",docentes:[{nombres:"W. Libardo Pantoja Y."}],asignatura:"Lab. de Ing. de Software II",estudiantes:[{nombres:"Jhonny Mateo Rosero Cortes"},{nombres:"Juan Camilo Gonzales Mulato"},{nombres:"Jhonfer Ruiz Figueroa"},{nombres:"Edynson Mu\xf1oz Jimenez"},{nombres:"James Felipe Silva Berm\xfadez"}],titulo:"Restaurante online",arquitecturas:"Microkernel",tecnologias:"Java",link:"https://github.com/mateok13/Restaurant_HEX.git"},{id:"3",winner:!0,periodo:"2020.1",docentes:[{nombres:"W. Libardo Pantoja Y."}],asignatura:"Lab. de Ing. de Software II",estudiantes:[{nombres:"Kevin Alarc\xf3n"},{nombres:"Santiago Mu\xf1oz"},{nombres:"Santiago C\xf3rdoba"},{nombres:"Daniel Mu\xf1oz"},{nombres:"Juan Jos\xe9 L\xf3pez"}],titulo:"Restaurante online",arquitecturas:"Microservicios",tecnologias:"React, Node.js",link:"https://github.com/josmanm/JUSTEAT-SERVER"},{id:"4",periodo:"2020.1",docentes:[{nombres:"W. Libardo Pantoja Y."}],asignatura:"Lab. de Ing. de Software II",estudiantes:[{nombres:"Alejandro Latorre Pab\xf3n"},{nombres:"Carlos Alberto Salamanca Quijano"},{nombres:"Christian David Tobar Mosquera"},{nombres:"Juliana Mora L\xf3pez"},{nombres:"Yeferson Benavides"}],titulo:"Restaurante online",arquitecturas:"Microservicios",tecnologias:"Spring-Boot",link:"https://github.com/Carlos-Salamanca/EatToGo-Tercera-Iteracion"},{id:"5",periodo:"2020.1",docentes:[{nombres:"W. Libardo Pantoja Y."}],asignatura:"Proyecto I",estudiantes:[{nombres:"Ivets Johel Solis"},{nombres:"Johan Camilo Paz"},{nombres:"Juan Sebastian Parra"},{nombres:"Bladimir Astudillo Perez"},{nombres:"Brayan Alexis Perez"}],titulo:"Restaurante online",arquitecturas:"Microservicios. Hexagonal",tecnologias:"Laravel PHP",link:"https://github.com/Johel-Solis/BonAPetit.git"},{id:"6",winner:!0,periodo:"2020.1",docentes:[{nombres:"W. Libardo Pantoja Y."}],asignatura:"Proyecto I",estudiantes:[{nombres:"Tomas Escobar"},{nombres:"Lino Alejandro Mu\xf1oz"},{nombres:"Isabella Pe\xf1a"},{nombres:"David Calle"},{nombres:"Edward Cuasapud"},{nombres:"Juan Felipe Mu\xf1oz"}],titulo:"Restaurante online",arquitecturas:"Monolito en capas",tecnologias:"Django, React, Android Studio, aplicaci\xf3n web, aplicaci\xf3n m\xf3vil.",link:"https://github.com/elbajo001/project_domi_foods"},{id:"7",periodo:"2020.1",docentes:[{nombres:"W. Libardo Pantoja Y."}],asignatura:"Proyecto I",estudiantes:[{nombres:"Daniel Dorado"},{nombres:"Brayan Garc\xeda"},{nombres:"Rene Jalvin"},{nombres:"Yeison Mosquera"},{nombres:"Carlos Rendon"}],titulo:"Restaurante online",arquitecturas:"Monolito en capas, Hexagonal",tecnologias:"Angular, Laravel PHP",link:"https://gitlab.com/thebar70/restaurant"},{id:"8",periodo:"2020.1",docentes:[{nombres:"W. Libardo Pantoja Y."}],asignatura:"Proyecto I",estudiantes:[{nombres:"Mayra Castillo"},{nombres:"Cristian Lopez"},{nombres:"Rub\xe9n Dorado"},{nombres:"H\xe9ctor Meneses"}],titulo:"Restaurante online",arquitecturas:"Microservicios",tecnologias:"React, SpringBoot",link:"https://github.com/dario10101/backend-PRO"},{id:"9",periodo:"2021.1",docentes:[{nombres:"Julio Ariel Hurtado A."},{nombres:"Santiago Hyun"},{nombres:"W. Libardo Pantoja Y."}],asignatura:"Ingenier\xeda de Software II y Laboratorio",estudiantes:[{nombres:"Astrid Carolina Cruz Trochez"},{nombres:"Braian Alexis Bastidas D\xedaz"},{nombres:"Juan Jos\xe9 Rengifo"},{nombres:"Juan Sebasti\xe1n Zuleta"},{nombres:"Juan Manuel Rivera"}],titulo:"Restaurante online",arquitecturas:"Cliente-Servidor, Microkernel, Hexagonal",tecnologias:"Java",link:"https://github.com/brabadi/Restaurante-SoftwareFood-3"},{id:"10",periodo:"2021.1",docentes:[{nombres:"Julio Ariel Hurtado A."},{nombres:"Santiago Hyun"},{nombres:"W. Libardo Pantoja Y."}],asignatura:"Ingenier\xeda de Software II y Laboratorio",estudiantes:[{nombres:"Carlos Enrique Hoyos Joiro"},{nombres:"Daniel Alejandro Navia Cruz"},{nombres:"Eliana Andrea Camayo Ante"},{nombres:"Jesus Edwin Andrada Ruiz"},{nombres:"Luis Manuel Arroyo Lopez"}],titulo:"Restaurante online",arquitecturas:"Cliente-Servidor, Microkernel, Hexagonal",tecnologias:"Java",link:"https://github.com/ElianaAC28/RestauranteOnlineHexagonal"},{id:"11",periodo:"2021.1",docentes:[{nombres:"Julio Ariel Hurtado A."},{nombres:"Santiago Hyun"},{nombres:"W. Libardo Pantoja Y."}],asignatura:"Ingenier\xeda de Software II y Laboratorio",estudiantes:[{nombres:"Juan David Beca Pillimue"},{nombres:"Nelly Yohana Bambague Dorado"}],titulo:"Restaurante online",arquitecturas:"Microservicios",tecnologias:"Spring-Boot, Swing",link:"https://github.com/juanbep/juanbep-ResturanteOnline-Spint3"},{id:"12",winner:!0,periodo:"2021.1",docentes:[{nombres:"Julio Ariel Hurtado A."},{nombres:"Santiago Hyun"},{nombres:"W. Libardo Pantoja Y."}],asignatura:"Ingenier\xeda de Software II y Laboratorio",estudiantes:[{nombres:"Kevith Felipe Bastidas"},{nombres:"Yeison Andres Ordo\xf1ez"},{nombres:"Whalen Stiven Caicedo"},{nombres:"Juan David Mu\xf1oz Pasquel"}],titulo:"Restaurante online",arquitecturas:"Microservicios",tecnologias:"Spring-Boot, Docker, Swing",link:"https://github.com/kfbastidas/Domicilio-Restaurante-3Spring"},{id:"13",periodo:"2021.1",docentes:[{nombres:"Julio Ariel Hurtado A."},{nombres:"Santiago Hyun"},{nombres:"W. Libardo Pantoja Y."}],asignatura:"Ingenier\xeda de Software II y Laboratorio",estudiantes:[{nombres:"Cristian Camilo Perafan"},{nombres:"Sergio Eduardo Erazo Ortega"},{nombres:"Luis Manuel Arango"},{nombres:"Tatiana Toquica Perdomo"},{nombres:"Juan Jos\xe9 Vasquez"}],titulo:"Restaurante online",arquitecturas:"Cliente-Servidor, Microkernel, Hexagonal",tecnologias:"Java, Swing",link:"https://github.com/TatianaToquica/restaurantHexagonal.git"}],o=[];if(0===e.length)o=a;else for(var n=0;n<a.length;n++)a[n].periodo!==e&&-1===a[n].arquitecturas.toLowerCase().indexOf(e.toLowerCase())&&-1===a[n].tecnologias.toLowerCase().indexOf(e.toLowerCase())||o.push(a[n]);return o}(e);t({data:a,loading:!1})}),[e]),r}(a),r=o.data,t=o.loading;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{className:"animate__pulse",children:a}),t&&Object(s.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(s.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(s.jsx)(u,Object(l.a)({},e),e.id)}))})]})},b=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),o=a[0],r=a[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"B\xfasqueda"}),Object(s.jsx)(c,{setFiltro:r}),Object(s.jsx)("hr",{}),Object(s.jsx)("ol",{children:Object(s.jsx)(d,{filtro:o},o)})]})};o(11);t.a.render(Object(s.jsx)(b,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.1b58265b.chunk.js.map