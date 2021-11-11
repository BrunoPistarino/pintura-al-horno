const colors = [
    { name: "Blanco", color: "#EDF2F2", code: "200044/0" },
    { name: "Blanco texturado", color: "#EDF2F2", code: "210002/0" },
    { name: "Blanco ral", color: "#F3F1EA", code: "210002/0" },
    { name: "Blanco microtext.", color: "#F3F1EA", code: "210002/0" },
    { name: "Blanco nieve mate", color: "#DBE0DD", code: "210002/0" },
    { name: "Blanco nieve", color: "#DEE4E3", code: "210002/0" },
    { name: "Blanco", color: "#D3DEE6", code: "210002/0" },
    { name: "Amarillo verdoso", color: "#EEC94F", code: "201008/0" },
    { name: "Amarillo claro", color: "#EDB039", code: "201016/0" },
    { name: "Amarillo agro", color: "#F2A52A", code: "201002/0" },
    { name: "Amarillo huevo", color: "#EFA228", code: "201006/0" },
    { name: "Amarillo gas", color: "#F2952D", code: "201003/0" },
    { name: "Naranja", color: "#E0301D", code: "002009/0" },
    { name: "Naranja texturado", color: "#E0301D", code: "212009/0" },
    { name: "Naranja ral", color: "#DF342A", code: "2002/0" },
    { name: "Rosa", color: "#E2A2C2", code: "203011/0" },
    { name: "Rojo coca-cola", color: "#CA251C", code: "203003/0" },
    { name: "Rojo coca-cola texturado", color: "#C8281D", code: "213003/0" },
    { name: "Rojo cortadora", color: "#A3221C", code: "203006/0" },
    { name: "Bordó", color: "#76191F", code: "203012/0" },
    { name: "Azul ral", color: "#3E7AB0", code: "204012/0" },
    { name: "Violeta real", color: "#6A3758", code: "204008/0" },
    { name: "Violeta", color: "#5A528F", code: "204005/0" },
    { name: "Azul eléctrico", color: "#11539C", code: "204034/0" },
    { name: "Azul eléctrico texturado", color: "#105499", code: "214034/0" },
    { name: "Azul texturado", color: "#1B4976", code: "214036/0" },
    { name: "Azul royal", color: "#143D80", code: "204089/0" },
    { name: "Azul ral", color: "#143A6F", code: "204051/0" },
    { name: "Azul telefónica", color: "#16266E", code: "204079/0" },
    { name: "Azul ral", color: "#182563", code: "204002/0" },
    { name: "Azul marino", color: "#122254", code: "204001/0" },
    { name: "Azul noche", color: "#0A1324", code: "004090/0" },
    { name: "Verde telefónica", color: "#A5D34F", code: "205078/0" },
    { name: "Verde ral", color: "#59A445", code: "205018/0" },
    { name: "Verde claro", color: "#1B7648", code: "205047/0" },
    { name: "Verde esmeralda", color: "#1C5929", code: "205012/0" },
    { name: "Verde inglés", color: "#184031", code: "205021/0" },
    { name: "Verde inglés texturado", color: "#184031", code: "215021/0" },
    { name: "Verde oscuro", color: "#112019", code: "205020/0" },
    { name: "Verde microtex. marmolado", color: "#3E6165", code: "228052/0" },
    { name: "Gris ral", color: "#C5C7C2", code: "206035/0" },
    { name: "Gris ral texturado", color: "#C5C7C2", code: "216035/0" },
    { name: "Gris perla texturado", color: "#989D9E", code: "216055/0" },
    { name: "Gris perla", color: "#989D9E", code: "20618/0" },
    { name: "Gris medio", color: "#848685", code: "206029/0" },
    { name: "Gris oscuro", color: "#545A5D", code: "206007/0" },
    { name: "Gris iveco", color: "#202527", code: "206061/0" },
    { name: "Gris grafito semi-mate", color: "#0B100E", code: "206042/1" },
    { name: "Gris húmedo texturado", color: "#313336", code: "216048/0" },
    { name: "Gris ral texturado", color: "#2E3539", code: "206076/1" },
    { name: "Marfíl", color: "#F0EAD0", code: "207047/0" },
    { name: "Crema", color: "#CEC2A8", code: "20207006/0" },
    { name: "Beige claro", color: "#C8B7A3", code: "207032/0" },
    { name: "Beige", color: "#B79F86", code: "207033/0" },
    { name: "Beige texturado", color: "#BAB09C", code: "217015/0" },
    { name: "Beige ral", color: "#9E988B", code: "207070/0" },
    { name: "Beige ral texturado", color: "#A9A8A1", code: "217055/0" },
    { name: "Marrón africano", color: "#3A2D28", code: "20207009/0" },
    { name: "Marrón", color: "#391A14", code: "207014/0" },
    { name: "Marrón texturado", color: "#3D1D16", code: "217014/0" },
    { name: "Plata microtexturado", color: "#B8C1C5", code: "228000/1" },
    { name: "Aluminio cromo", color: "#8B8E8F", code: "208002/0" },
    { name: "Dry bonded", color: "#7E7D87", code: "208035/0" },
    { name: "Aluminio claro", color: "#8D8F93", code: "208001/0" },
    { name: "Aluminio oscuro", color: "#919693", code: "208004/0" },
    { name: "Peltre", color: "#848484", code: "228056/1" },
    { name: "Bronce metalizado", color: "#413B38", code: "208043/0" },
    { name: "Plata vieja", color: "#ACACB1", code: "208061/0" },
    { name: "Oro viejo", color: "#A6814B", code: "208060/0" },
    { name: "Cobre viejo", color: "#6A4B37", code: "208062/0" },
    { name: "Transparente amarillo", color: "#DEC724", code: "208089/0" },
    { name: "Transparente rojo", color: "#C13531", code: "208090/0" },
    { name: "Transparente obispo", color: "#C11C46", code: "208084/0" },
    { name: "Transparente azul", color: "#0B6C8F", code: "208082/0" },
    { name: "Negro mate", color: "#1A1B20", code: "000054/2" },
    { name: "Negro microtexturado", color: "#2B282A", code: "220054/1" },
    { name: "Negro texturado semi-mate", color: "#101214", code: "210054/1" },
    { name: "Negro semi-mate", color: "#101214", code: "200054/1" },
    { name: "Negro brillante", color: "#000000", code: "200055/1" },
    { name: "Negro texturado brillante", color: "#0C100E", code: "210055/0" },
]

const optionsBoxes = document.querySelector('.optionsBoxes')
const selectedText = document.querySelector('.selectedText')
const selectedTextCode = document.querySelector('.selectedTextCode')
const selectedColor = document.querySelector('.selectedColor')

function loadColors() {
    colors.forEach(color => {
        console.log(color)
        const colorCont = document.createElement('div')
        colorCont.innerText = color.name
        colorCont.style.backgroundColor = color.color
        colorCont.style.color = invertColor(color.color, true)
        optionsBoxes.appendChild(colorCont)
        colorCont.addEventListener('mouseenter', () => selectColor(color))
    })
}

function selectColor(color) {
    selectedText.innerText = color.name
    selectedTextCode.innerText = color.code
    selectedColor.style.backgroundColor = color.color

    selectedText.style.color = invertColor(color.color, true)
    selectedTextCode.style.webkitTextStrokeColor = invertColor(color.color, true)

    if (color.name === "Plata vieja" || color.name === "Oro viejo" || color.name === "Cobre viejo") {
        selectedColor.classList.add("old");
    } else {
        selectedColor.classList.remove("old");
    }
}

loadColors()




function invertColor(hex, bw) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
            ? '#000000'
            : '#FFFFFF';
    }
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    return "#" + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}