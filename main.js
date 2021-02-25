const panels = document.querySelectorAll(".panel");


// function toggleOpen

function toggleOpen() {
    this.classList.toggle("open");
    console.log("hello");

    let childrenArr = [this.children[0], this.children[1], this.children[2]];
        console.log(childrenArr)

    if (this.classList.contains("open")) {
        console.log("isOpen");
        
        childrenArr.forEach(child => {
            child.setAttribute("class", "vanishPara");
        });
    }
    else {
        console.log("isClose");

        childrenArr.forEach(child => {
            child.setAttribute("class", "showPara");
        });
    }

};


panels.forEach(panel => {
    panel.addEventListener("click", toggleOpen);

});

