
const d = document
const figoContainer = d.getElementById("figonacci")
const factContainer = d.getElementById("factorial")


const figoInp = d.createElement("input")
const figoButton = d.createElement("button")
const figoUl = d.createElement("ul")

const factInp = d.createElement("input")
const factButton = d.createElement("button")
const factP = d.createElement("p")

figoButton.setAttribute("id", "buttonA");
figoButton.innerHTML = "Calcular"
figoButton.style.backgroundColor = "#0099ff"
figoButton.style.borderRadius = "8px"

figoInp.setAttribute("id", "inputA");
figoInp.style.borderRadius = "5px"
figoInp.style.margin = "5px"

figoUl.setAttribute("id", "uiA");

figoContainer.appendChild(figoInp)
figoContainer.appendChild(figoButton)
figoContainer.appendChild(figoUl)

factButton.setAttribute("id", "buttonB");
factButton.innerHTML = "Calcular"
factButton.style.backgroundColor = "#0099ff"
factButton.style.borderRadius = "8px"

factInp.setAttribute("id", "inputB");
factInp.style.borderRadius = "5px"
factInp.style.margin = "5px"

factP.setAttribute("id", "factR");

factContainer.appendChild(factInp)
factContainer.appendChild(factButton)
factContainer.appendChild(factP)



figoButton.onclick = () => {
    let valueA = d.getElementById("inputA").value
    console.log(valueA)
    let arrFigo = [0, 1];
    for (let i = 0; arrFigo[arrFigo.length - 1] < parseInt(valueA); i++) {
        let a = arrFigo[arrFigo.length - 1];
        let b = arrFigo[arrFigo.length - 2];
        let lia = d.createElement("li")
        lia.innerHTML=a+b
        d.getElementById("uiA").appendChild(lia)
        arrFigo[arrFigo.length] = a + b;
    }
    console.log(arrFigo)

  
}


factButton.onclick = () => {
    let valueB = d.getElementById("inputB").value
    let result = 1
    for (let i = 1; i <= parseInt(valueB); i++) {
        result = result * i
    }
    console.log(result)
    d.getElementById("factR").innerHTML = result

}





