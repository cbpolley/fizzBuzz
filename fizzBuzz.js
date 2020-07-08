let startButtonScr = document.getElementById('startButton');
let inputNumber = document.getElementById('inputNumber');
let fizzBuzzContainer = document.getElementById('fizzBuzzContainer');
let compTxt = document.getElementById('compTxt');

let wordMenuFirst = document.getElementById("wordMenuFirst"); 
let wordMenuSecond = document.getElementById("wordMenuSecond"); 

let firstMultiple = document.getElementById("firstMultiple"); 
let secondMultiple = document.getElementById("secondMultiple"); 

let fizzTxt = wordMenuFirst.parentElement.children[0].innerText;
let buzzTxt = wordMenuSecond.parentElement.children[0].innerText;

let next = 0;
let firstNum = 3;
let secondNum = 5;
let multiplyNum = firstNum * secondNum;

let stopTrig = 0;

document.onload = reset();

function reset(){
    inputNumber.value = '';
    inputNumber.focus();
    inputNumber.select();

    next = 0;
    firstNum = 3;
    secondNum = 5;
    firstMultiple.value = firstNum;
    secondMultiple.value = secondNum;
    multiplyNum = firstNum * secondNum;
    chat('intro');
    setTimeout(function() {
        chat('moreInfo');
    }, 7000);
}

inputNumber.oninput = () => {
    document.getElementById('startButton').classList.add('show');
    stopTrig = 1;
    document.getElementById("compTxt").classList.remove("intro");

}

// function unhide(){

// }


wordMenuFirst.onclick = function(){
    getTargetInfo();
    fizzTxt = wordMenuFirst.parentElement.children[0].innerText
};
wordMenuSecond.onclick = function(){
    getTargetInfo();
    buzzTxt = wordMenuSecond.parentElement.children[0].innerText;
};

function getTargetInfo(event) {

    var target = getEventTarget(event);
    target.parentElement.parentElement.children[0].innerText = target.innerText;
}

function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}

startButtonScr.addEventListener('click', function() { 
    
    let inputNumberValue = sterilise(inputNumber.value);
    firstNum = sterilise(firstMultiple.value);
    secondNum = sterilise(secondMultiple.value);
    inputNumber.value = inputNumberValue;
    firstMultiple.value = firstNum;
    secondMultiple.value = secondNum;
    
    if (isNaN(inputNumberValue) || isNaN(firstNum) || isNaN(secondNum) || inputNumberValue == 0){
        chat('noNumber');
    }
    else{   

        multiplyNum = firstNum * secondNum;
        chat('goAhead'); 
        fizzBuzzContainer.classList.add('fall');
        
        setTimeout(function() {
            fizzBuzzContainer.classList.remove("animate");
        
        while (fizzBuzzContainer.firstChild){
            fizzBuzzContainer.removeChild(fizzBuzzContainer.firstChild);
        }
        // let inputNumberValue = inputNumber.value;
        
        for (i = 1; i <= inputNumberValue; i++){
            let fizzBuzzDiv = document.createElement('li');
            fizzBuzzDiv.id = 'fizzBuzzDiv' + i
            fizzBuzzDiv.className = 'eachBox'
            let fizzBuzzDivInner = document.createElement('div');
            let fizzBuzzDivInnerText = document.createElement('div');
            if (i % firstNum == 0){
                if (i % secondNum == 0){
                    fizzBuzzDivInnerText.innerHTML = fizzTxt + '</br>' + buzzTxt;
                    fizzBuzzDivInner.classList.add('fizzBuzzBoxInner');
                    fizzBuzzDiv.classList.add('fizzBuzzBox');
                }else{
                    fizzBuzzDivInnerText.innerHTML = fizzTxt;
                    fizzBuzzDivInner.classList.add('fizzBuzzBoxInner');
                    fizzBuzzDiv.classList.add('fizzBox');
                }
            }
            else if (i % secondNum == 0){
                fizzBuzzDivInnerText.innerHTML = buzzTxt;
                fizzBuzzDivInner.classList.add('fizzBuzzBoxInner');
                fizzBuzzDiv.classList.add('buzzBox');
            }else{
                fizzBuzzDivInnerText.innerHTML = i;
                fizzBuzzDivInner.classList.add('fizzBuzzBoxInner');
                fizzBuzzDiv.classList.add('noStyleBox');
            }
            fizzBuzzContainer.append(fizzBuzzDiv);
            fizzBuzzDiv.append(fizzBuzzDivInner);
            fizzBuzzDivInner.append(fizzBuzzDivInnerText);
        }
    }, 1001);
        setTimeout(function() {
            fizzBuzzContainer.classList.remove("fall");
        }, 1010);
        setTimeout(function() {
            fizzBuzzContainer.classList.add("animate");
        }, 2020);
    }

}, false);



function chat(trigger){
    if (trigger == 'noNumber'){
        document.getElementById("compTxt").classList.remove("intro");
        setTimeout(function() {
            document.getElementById("compTxt").classList.add("intro");
        }, 10);
        document.getElementById("compTxt").innerText = 'Uh oh, you didn\'t enter a number :(';
    }else if (trigger == 'intro'){
        document.getElementById("compTxt").innerText = 'hello there';
        document.getElementById("compTxt").classList.add("intro");
    }else if (trigger == 'goAhead'){
        if (next == 0){
        next = 1;
        document.getElementById("compTxt").classList.remove("intro");
        setTimeout(function() {
            document.getElementById("compTxt").classList.add("intro");
        }, 10);
        document.getElementById("compTxt").innerText = fizzTxt + buzzTxt + ' puts a ' + fizzTxt + ' in place of a multiple of ' + firstNum + ', or a ' + buzzTxt + ' in place of a multiple of ' + secondNum + '.';
        }else if (next == 1){
            next = 2;
            document.getElementById("compTxt").classList.remove("intro");
            setTimeout(function() {
                document.getElementById("compTxt").classList.add("intro");
            }, 10);
            document.getElementById("compTxt").innerText = 'Or, if the number is a multiple of both ' + fizzTxt + ' and ' + buzzTxt + ', we combine the two words and get a ' + fizzTxt + buzzTxt;
        }
        else if (next == 2){
            next = 3;
            document.getElementById("compTxt").classList.remove("intro");
            setTimeout(function() {
                document.getElementById("compTxt").classList.add("intro");
            }, 10);
            document.getElementById("compTxt").innerText = 'If you like, you can change the values of Fizz and Buzz in the top right. Play around and have fun :)';
        }else if (next == 3){
            if (inputNumber.value > 100){
                document.getElementById("compTxt").classList.remove("intro");
                setTimeout(function() {
                    document.getElementById("compTxt").classList.add("intro");
                }, 10);
                document.getElementById("compTxt").innerText = 'Oooh, that\'s a big one.';
            }else{
                document.getElementById("compTxt").classList.remove("intro");
                setTimeout(function() {
                    document.getElementById("compTxt").classList.add("intro");
                }, 10);
                document.getElementById("compTxt").innerText = '';
            }
        }
    }else if (trigger == 'moreInfo' && stopTrig == 0){
        document.getElementById("compTxt").classList.remove("intro");
        setTimeout(function() {
            document.getElementById("compTxt").classList.add("intro");
        }, 10);
        document.getElementById("compTxt").innerText = 'Try entering a number in the box, above.';
    
    }
}

function sterilise(numberToSterilise){
    numberOut = numberToSterilise.replace(/[^0-9]+|\s+/gmi, "");
    numberOut = numberOut * 1;
    numberOut = Math.round(numberOut);
    
    return numberOut;
}
