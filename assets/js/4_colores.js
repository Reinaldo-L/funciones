const una = document.getElementById("box1");
const dos = document.getElementById("box2");
const tres = document.getElementById("box3");
const cuatro = document.getElementById("box4");

const caja = document.getElementById("key"); //variable para el otro punto

const darcolor =(caja) => (caja.style.backgroundColor = "black")

una.addEventListener("click",() =>darcolor(una));
dos.addEventListener("click",() =>darcolor(dos));
tres.addEventListener("click",() =>darcolor(tres));
cuatro.addEventListener("click",() =>darcolor(cuatro));

//otra seccion del bloque blanco

function wbox(caja) {
    const spawn = document.createElement("div");
    spawn.style.width = "200px";
    spawn.style.height = "200px";
    spawn.style.margin = "10px";
    spawn.style.backgroundColor = caja;

    document.body.appendChild(spawn);
}

document.addEventListener("keydown", function (modify) {
    if(modify.key ==="a") {caja.style.backgroundColor = "pink";
    } 
    else if (modify.key === "s") {caja.style.backgroundColor = "orange";
    }
    else if (modify.key === "d") {caja.style.backgroundColor = "lightblue";
    }
    else if (modify.key === "q") {wbox("purple");
    }
    else if (modify.key === "w") {wbox("grey");
    }
    else if (modify.key === "e") {wbox("brown");
    }

}) ;