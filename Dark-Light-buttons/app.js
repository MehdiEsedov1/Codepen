const first_button = document.querySelector(".first-button");
const second_box_inner_container = document.querySelector(".second-box-inner-container");
const thrid_button_1 = document.querySelector(".thrid-1-button");
const thrid_button_2 = document.querySelector(".thrid-2-button");
const fourth_button_1 = document.querySelector(".fourth-1-button");
const fourth_button_2 = document.querySelector(".fourth-2-button");
const fiveth_box_container = document.querySelector(".fiveth-box-container");
const first_box = document.querySelector(".first-box");
const second_box = document.querySelector(".second-box");
const thrid_box = document.querySelector(".thrid-box");
const fourth_box = document.querySelector(".fourth-box");

let x1, x2, x3, x4, x5;

first_button.addEventListener("click", transform1);
second_box.addEventListener("click", transform2);
thrid_box.addEventListener("click", transform3);
fourth_box.addEventListener("click", transform4);
fiveth_box_container.addEventListener("click", transform5);

function transform1() {
    if (x1 == 1) {
        first_button.setAttribute("style", "transform: translateX(-2px);transition:1s");
        first_box.setAttribute("style", "background-color:white;color:black;transition:1.5s");
        x1 = 0;
    }
    else {
        first_button.setAttribute("style", "transform: translateX(4rem);transition:1s");
        first_box.setAttribute("style", "background-color:black;color:white;border-color:black;transition:1.5s");
        x1 = 1;
    }
}


function transform2() {
    if (x2 == 1) {
        second_box_inner_container.setAttribute("style", "transform: translateX(-6.5rem);transition:1s;");
        second_box.setAttribute("style", "background-color:white;color:black;transition:0.4s");
        x2 = 0;
    }
    else {
        second_box_inner_container.setAttribute("style", "transform: translateX(4rem);transition:1s");
        second_box.setAttribute("style", ";background-color:black;color:white;transition:0.4s");
        x2 = 1;
    }
}


function transform3() {
    if (x3 == 1) {
        thrid_button_1.setAttribute("style", "transform: translateY(0px);transition:0.4s");
        thrid_button_2.setAttribute("style", "transform: translateY(-30px);transition:0.4s");
        thrid_box.setAttribute("style", "background-color:white;color:black;");
        x3 = 0;
    }
    else {
        thrid_button_1.setAttribute("style", "transform: translateY(-30px);transition:0.4s");
        thrid_button_2.setAttribute("style", "transform: translateY(0px);transition:0.4s");
        thrid_box.setAttribute("style", "background-color:black;color:white;");
        x3 = 1;
    }
}


function transform4() {
    if (x4 == 1) {
        fourth_button_1.setAttribute("style", "transform: translateX(0px);transition:0.4s");
        fourth_button_2.setAttribute("style", "transform: translateX(40px);transition:0.4s");
        fourth_box.setAttribute("style", "background-color:white;color:black;");
        x4 = 0;
    }
    else {
        fourth_button_1.setAttribute("style", "transform: translateX(-40px);transition:0.4s");
        fourth_button_2.setAttribute("style", "transform: translateX(0px);transition:0.4s");
        fourth_box.setAttribute("style", "background-color:black;color:white;");
        x4 = 1;
    }
}


function transform5() {
    if (x5 == 1) {
        fiveth_box_container.setAttribute("style", "transform:translateY(0px);transition:0.4s");
        x5 = 0;
    }
    else {
        fiveth_box_container.setAttribute("style", "transform:translateY(-50px);transition:0.4s");
        x5 = 1;
    }
}