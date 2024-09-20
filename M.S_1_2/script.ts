const toogle_button=document.getElementById("toogle_button") as HTMLButtonElement
const skill=document.getElementById("SKILL") as HTMLElement
toogle_button.addEventListener("click", ()=>{
    if(skill.style.display==="none"){
        skill.style.display="block"}

        else{
            skill.style.display="none"
        }

}
    )  