let mainTitle=document.getElementById("MainTitle")
let footer=document.getElementById("footer")
mainTitle.innerHTML="Renaud, le Renaudant!"
let userInput=parseInt(prompt("Tapez 1 si vous êtes un homme, ou 2 si vous êtes une femme."))
if(userInput==1)
{
     mainTitle.innerHTML="Bonjour monsieur."
}
else if(userInput==2)
{
    mainTitle.innerHTML="Bonjour madame."
}
else
{
 alert("Désolé, la valeur introduite ne correspond pas à ce qui est demandé.")
}
setTimeout(() =>
{
    mainTitle.innerHTML="Renaud, le Renaudant!"
 }, 10000);
 let userName=prompt("Quel est votre prénom?")
 footer.innerHTML="Au revoir "+userName+"."

 let MyButton=document.getElementById("MonBouton")
 MyButton.addEventListener("click",function()
 {
    alert("Merci de votre visite!")
 }
 )
 MyButton.addEventListener("mouseover",function(){alert("Mais qui est le nol qui a demandé une alerte pour le passage de la souris, sachant que les aveugles n'en ont rien à b...attre? lol")})