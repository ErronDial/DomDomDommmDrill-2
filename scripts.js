document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement("button");
    button.innerText = "Add Square";
    document.body.appendChild(button);
    let flexContainer = document.createElement("div");
    flexContainer.classList.add("container");
    document.body.appendChild(flexContainer);
   
    let boxID= 1;

    button.addEventListener("click", function () {
        let addedBox = document.createElement("div");
        addedBox.classList.add("box");
        addedBox.id = boxID;
        addedBox.innerText = boxID;
        
        
        addedBox.addEventListener("click", function () {
            addedBox.style.backgroundColor = getRandomColor()
        });

        addedBox.addEventListener("dblclick", function () {
            if (addedBox.id % 2 === 0) {
                if(addedBox.nextSibling !== null) {
                    addedBox.nextSibling.remove();
                } else {
                    alert ("No Box");
                }
            } else {
                if (addedBox.previousSibling !== null) {
                    addedBox.previousSibling.remove();
                }else {
                    alert("No Box");
                }
            }
        });
        
        flexContainer.appendChild(addedBox);
        boxID++
    });

});
 function getRandomColor() {
     var letters = '0123456789ABCDEF';
     var color = '#';
     for (var i = 0; i< 6; i++) {
         color+= letters[Math.floor(Math.random()*16)];
     }
     return color;
 }


