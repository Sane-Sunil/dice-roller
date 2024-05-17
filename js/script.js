document.getElementById("jscheck").innerHTML = `<br>`;
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("rollb").addEventListener("click", function(){ 
        let numinput = document.getElementById("numinput").value;
        let valdis = document.getElementById("valdis");
        let imgdis = document.getElementById("imgdis");
        let values = [];
        let images = [];
        numinput = parseInt(numinput);
        for(let i = 0; i < numinput; i++){
            let rand = Math.ceil(Math.random() * 6);
            values.push(rand);
            images.push(`<img src="images/${rand}.svg" alt="dice ${rand}">`)
        }
        valdis.innerHTML = `Values: ${values.join(", ")}`;
        imgdis.innerHTML = images.join("");
    });
});
