let screen = document.querySelector("#screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";

document.addEventListener('keypress', (e) => {

})


for (item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        // debugger;
        if (buttonText.toLowerCase() === "x") {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
            // screen.value += buttonText;
        }
        else if (buttonText.toLowerCase() === "c") {
            screenValue = '';
            screen.value = '';
        }

        else if (buttonText === "=") {
            screen.value = eval(screenValue);
            screenValue += `=${screen.value}`
        }

        else if (buttonText === "Back") {
            if (screenValue.includes('=')) {
                return
            }
            // buttonText = buttonText.slice(0, -1);
            screenValue = screenValue.slice(0, -1);
            // screenValue += buttonText;
            screen.value = screenValue;
        }

        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

        item.addEventListener('keypress', () => {
            let key = document.querySelectorAll()
        })
    })
}