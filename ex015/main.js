function verificar(){
    var agora = new Date()
    var ano = agora.getFullYear()
    var txtAnoDeNas = document.querySelector('#txtAno')
    var numAnoDeNas = Number(txtAnoDeNas.value)
    var res = document.getElementById('res')

    if (numAnoDeNas > ano || numAnoDeNas == 0){
        alert('[Erro!] verifique os dados e tente novamente.')
        
    } else {
        var sexo = document.getElementsByName('radSexo')
        var idade = ano - numAnoDeNas
        var img = document.createElement('img')
        img.setAttribute('id', 'imagem')

        if (sexo[0].checked){
            var genero = 'homem'

            if (idade < 14){
                //kid
                img.setAttribute('src', './imgs/menino.jpeg')
            } else if (idade < 30){
                //young
                img.setAttribute('src', './imgs/homem-jovem.jpeg')
            } else if (idade < 55){
                //man
                img.setAttribute('src', './imgs/senhor.jpeg')
            } else {
                //old
                img.setAttribute('src', './imgs/velho.jpeg')
            }

        } else if (sexo[1].checked){
            var genero = 'mulher'

            if (idade < 14){
                //kid
                img.setAttribute('src', './imgs/menina.jpeg')
            } else if (idade < 30){
                //young
                img.setAttribute('src', './imgs/mulher-jovem.jpeg')
            } else if (idade < 55){
                //woman
                img.setAttribute('src', './imgs/senhora.jpeg')
            } else {
                //old
                img.setAttribute('src', './imgs/velha.jpeg')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} e tem ${idade} anos.`
        res.appendChild(img)
    }
}
