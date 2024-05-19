function carregar(){
    var msg = window.document.querySelector('.body__main__section__msg');
    var img = window.document.querySelector('.body__main__section__foto__img');
    var cumprimento = window.document.querySelector('.body__main__section__cumprimento');
    var data = new Date();
    var hr = data.getHours();

    hr == 1 ? msg.innerHTML = '<p>Agora é 1 hora.</p>' : msg.innerHTML = `<p>Agora são ${hr} horas.</p>`;

    if (hr < 12){
       img.src = './imgs/bom-dia-img.jpg' ;
       cumprimento.innerHTML = '<p>Bom dia!</p>'
       document.body.style.background = '#c37334'
    } else if (hr < 18){
        img.src = './imgs/boa-tarde-img.jpg' ;
        cumprimento.innerHTML = '<p>Boa tarde!</p>'
        document.body.style.background = '#C3CD78'
     } else if (hr <= 24) {
        img.src = './imgs/boa-noite-img.jpg' ;
        cumprimento.innerHTML = '<p>Boa noite!</p>'
        document.body.style.background = '#0C1630'
     }
}
