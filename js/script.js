// Seleção de elementos

const block = document.getElementById("main-block");
let colorGlobal
let distance = 0

// Funções

function collectValue(range_id, value_id){
    const Value = document.getElementById(range_id).value
    document.getElementById(value_id).innerHTML = Value

    return Value
}

function collectColorValue(range_id){
    const Value = document.getElementById(range_id)

    return Value
}

function BlurFunction(){
    document.getElementById("blur")
    
    Blur = collectValue("blur", "blur-value")

    if(!Blur){
        Blur = distance
    }

    block.style.boxShadow = 
    `${distance}px ${distance}px ${Blur}px`
}

function RadiusFunction(){
    radius = collectValue("radius", "radius-value")
    block.style.borderRadius = radius+"px";
}

function codeTextArea(){
    colorGlobal = collectColorValue("hex-code").value
    RadiusFunction()
    BlurFunction()

    document.getElementById("textbox").textContent = 
    `border-radius: ${radius}px;\nbackground-color: ${colorGlobal};\nbox-shadow: ${distance}px ${distance}px ${Blur}px`
}

document.getElementById("auto-color").oninput = function(){
    Color = collectColorValue("auto-color").value
    Hex = collectColorValue("hex-code")

    Hex.value = Color
    block.style.backgroundColor = Color
}

document.getElementById("hex-code").oninput = function(){
    Color = collectColorValue("auto-color")
    Hex = collectColorValue("hex-code").value

    if (/^#[0-9A-F]{6}$/i.test(Hex)) {
        Color.value = Hex

        block.style.backgroundColor = Hex
    }
}

document.getElementById("size").oninput = function(){
    size = collectValue("size", "size-value")
    
    block.style.width = size + "px";
    block.style.height = size + "px"
}

document.getElementById("radius").oninput = function(){
    BlurFunction()
    codeTextArea()
}

document.getElementById("distance").oninput = function(){
    distance = collectValue("distance", "distance-value")
    BlurFunction()
    codeTextArea()
}

document.getElementById("blur").oninput = function(){
    Blur = collectValue("blur", "blur-value")
    BlurFunction()
    codeTextArea()
}

document.getElementById("intansity").oninput = function(){
    instansity = collectValue("intansity", "intansity-value")
    BlurFunction()
    codeTextArea()
}


