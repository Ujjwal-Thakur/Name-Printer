const input = document.getElementById("name");
const main = document.querySelectorAll(".flex_container"); 

const getName = () => {

    if(input.value==="")
    {
        return null;
    }

    const box = document.createElement("div");
    box.setAttribute("class","flex_item");
    box.innerText = `Hi, My name is ${input.value}.`;
    console.log("clicked");

    main[0].prepend(box);
    input.value="";
}