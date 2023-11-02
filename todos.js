function result() {
    let text = document.getElementById("input").value;
    let div = document.createElement("div");
    div.classList.add("div");
    let p = document.createElement("p");
    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.classList.add("check");
    check.onclick = (e) => {
        if(e.target.checked){
            p.innerHTML = " ";
            let s = document.createElement("s");
            s.innerHTML = text;
            p.append(s);
        } else {
             p.innerHTML = text;
        }
    }
    p.classList.add("para");
    div.appendChild(check);
    div.appendChild(p);
    p.innerHTML = text;
    let b1 = document.createElement("button");
    b1.classList.add("b2");
    b1.innerHTML = "remove";
    b1.onclick = () => {
        div.remove();
    }
    div.appendChild(b1);
    document.querySelector(".content").append(div);
}