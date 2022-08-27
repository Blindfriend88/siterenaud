let mainTitle=document.getElementById("MainTitle")
let footer=document.getElementById("footer")
// Élément 1 = Fonction Flag (utile pour écrans publicitaires par exemple):
// function Ads(_flag)
// {
//     if(_flag==0)
//     {
//         mainTitle.innerHTML="renaud"
//         _flag=1
//     }
//     else
//     {
//         mainTitle.innerHTML="Bonjour monsieur."
//         _flag=0
//     }
//     setTimeout(() => Ads(_flag), timeout=10000);
// }
// Ads(1)
// Élément 2 = Modif du titre dans le html + changement de titre selon un délai demandé:
// mainTitle.innerHTML="Renaud"
// let userInput=parseInt(prompt("Tapez 1 si vous êtes un homme, ou 2 si vous êtes une femme."))
// if(userInput==1)
// {
//     mainTitle.innerHTML="Bonjour monsieur."
// }
// else
// {
//     mainTitle.innerHTML="Bonjour madame."
// }
// setTimeout(() =>
// {
//     mainTitle.innerHTML="Renaud"
//  }, 10000);

// Exercice: Mix des deux éléments + passage d'une couleur à l'autre:
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
 MyButton.addEventListener("mouseover",function(){alert("Bonnes vacances!")})