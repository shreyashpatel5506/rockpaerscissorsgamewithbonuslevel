let user=0
let computer=0
let userscore=document.querySelector("#user")
let computerscore=document.querySelector("#comp")
let playagain=document.querySelector("#playagain")
let msg=document.querySelector("#displaymsg")
const itmes=document.querySelectorAll(".itmes")
const bonus=document.querySelectorAll(".bonusitmes")
const computerchoice = ()=>{
    const options=["rock","paper","scissors"]
    const random= Math.floor(Math.random()*3)
    
    return options[random]
}
const bonuscomputerchoice = ()=>{
    const bonusoptions=["brock","bpaper","bscissors","blizard","bspock"]
    const brandom=Math.floor(Math.random()*5)
    return bonusoptions[brandom]
}
const playgame = (userchoice) =>{
    const compchoice=computerchoice();
    showwinner(userchoice,compchoice)
    players(userchoice,compchoice)
}
const bonusplaygame = (userchoice) =>{
    const bonuscompchoice=bonuscomputerchoice();
    bonusshowwinner(userchoice,bonuscompchoice)
    bonusplayers(userchoice,bonuscompchoice)
}

itmes.forEach((itme)=>{
    itme.addEventListener("click",()=>{
        const userchoice=itme.getAttribute("id")
        playgame(userchoice)
        userscore.innerText=user;
        computerscore.innerText=computer;
        if(user>10){
            setTimeout(()=>{
                document.querySelector(".container").style.display="none"
            document.querySelector(".container1").style.display="flex"
            document.querySelector(".container12").style.display="block"
            check()
            },1500)
        }
    })
})  
const check=()=>{
bonus.forEach((bo)=>{
    bo.addEventListener("click",()=>{
        const userchoice=bo.getAttribute("id")
        bonusplaygame(userchoice)
        userscore.innerText=user;
        computerscore.innerText=computer;
        if(user>25 || computer>25){
            setTimeout(()=>{
                document.querySelector(".container").style.display="none"
            document.querySelector(".container12").style.display="none"
            document.querySelector("#finalwinner").style.display="flex"
            },2000)
           if(user>25){
              setTimeout(()=>{ document.querySelector("#text").innerHTML="You are final winner"},1500)
           }
           else{
               setTimeout(() => {
                document.querySelector('#text').innerHTML="Oops!Better luck next time"
               },1500 );
           }
       }
    })
})
}
const showwinner= (userchoice,compchoice)=>{
    if(userchoice=="paper"){
       
        if(compchoice=="rock"){
            console.log("you win")
            user++
            msg.innerHTML="Wow!You win"
        }
        else if(compchoice=="paper"){
            console.log("match draw")
             msg.innerHTML="Ohh!Draw"
        }
        else{
            console.log("computer win")
            computer++
             msg.innerHTML="Oops!computer win"
        }

    }
    else if(userchoice=="rock"){
        if(compchoice=="rock"){
            console.log("match draw")
            msg.innerHTML="Ohh!Draw"
        }
        else if(compchoice=="scissors"){
            console.log("you win")
            user++
             msg.innerHTML="Wow!You win"
        }
        else{
            console.log("computer win")
            computer++
             msg.innerHTML="Oops!computer win"
        }
    }
    else{
        if(compchoice=="paper"){
            console.log("you win")
            user++
             msg.innerHTML="Wow!You win"
        }
        else if(compchoice=="scissors"){
            console.log("match draw")
            msg.innerHTML="Ohh!Draw"
        }
        else{
            console.log("computer win")
            computer++
             msg.innerHTML="Oops!computer win"
        }
    }
}

const players=(userchoice,compchoice)=>{
    document.querySelector("main").style.display="none"
    document.querySelector("footer").style.display="block"
    
    document.getElementById("border"+compchoice + "wu").style.display = "block"
    document.getElementById("border"+userchoice + "w").style.display = "block"
    document.getElementById(userchoice+"w").classList.add("win")
    document.getElementById(compchoice+"wu").classList.add("win")
    setTimeout(()=>{
    document.getElementById(userchoice+"w").classList.remove("win")
    document.getElementById(compchoice+"wu").classList.remove("win")
     document.getElementById("border"+compchoice + "wu").style.display = "none"
    document.getElementById("border"+userchoice + "w").style.display = "none"
    again()},1500)
}
const again=()=>{
    document.querySelector("main").style.display = "flex";
    document.querySelector("footer").style.display = "none";
};
const bonusshowwinner= (userchoice,bonuscompchoice)=>{
    if(userchoice=="bpaper"){
        if(bonuscompchoice=="brock"){
            console.log("you win")
            user+=2
             msg.innerHTML="Wow!You win"
        }
        else if(bonuscompchoice=="bpaper"){
            console.log("match draw")
            msg.innerHTML="Ohh!Draw"
        }
        else if(bonuscompchoice=="bspock"){
            console.log("you win")
            user +=2
             msg.innerHTML="Wow!You win"
        }
        else{
            console.log("computer win")
            computer+=1
             msg.innerHTML="Oops!computer win"
        }

    }
    else if(userchoice=="brock"){
        if(bonuscompchoice=="brock"){
            console.log("match draw")
            msg.innerHTML="Ohh!Draw"
        }
        else if(bonuscompchoice=="bscissors"){
            console.log("you win")
            user+=2
             msg.innerHTML="Wow!You win"
        }
        else if(bonuscompchoice=="blizard"){
            console.log("you win")
            user+=2
             msg.innerHTML="Wow!You win"
        }
        else{
            console.log("computer win")
            computer++
             msg.innerHTML="Oops!computer win"
        }
    }
    else if(userchoice=="blizard"){
        if(bonuscompchoice=="blizard"){
            console.log("match draw")
            msg.innerHTML="Ohh!Draw"
        }
        else if(bonuscompchoice=="paper"){
            user +=2
             msg.innerHTML="Wow!You win"
        }
        else if(bonuscompchoice=="bspock"){
            user+=2
             msg.innerHTML="Wow!You win"
        }
        else{
            computer++
             msg.innerHTML="Oops!computer win"
        }
    }
    else if(userchoice=="bspock"){
        if(bonuscompchoice=="bspock"){
            console.log("match draw")
            msg.innerHTML="Ohh!Draw"
        }
        else if(bonuscompchoice=="bscissors"){
            user+=2
             msg.innerHTML="Wow!You win"
        }
        else if(bonuscompchoice=="brock"){
            user +=2
             msg.innerHTML="Wow!You win"
        }
        else{
            computer++
             msg.innerHTML="Oops!computer win"
        }
    }
    else{
        if(bonuscompchoice=="bpaper"){
            console.log("you win")
            user+=2
             msg.innerHTML="Wow!You win"
        }
        else if(bonuscompchoice=="bscissors"){
            console.log("match draw")
            msg.innerHTML="Ohh!Draw"
        }
    
        else if(bonuscompchoice=="blizard"){
            user+=2
             msg.innerHTML="Wow!You win"
        }
        else{
            console.log("computer win")
            computer++
             msg.innerHTML="Oops!computer win"
        }
    }
}
function bonusplayers(userchoice, bonuscompchoice) {
    document.querySelector(".container1").style.display = "none";
    document.querySelector(".footer").style.display = "flex";
    document.getElementById(userchoice + "w").classList.add("bwin");
    document.getElementById(bonuscompchoice + "wu").classList.add("bwin");
    document.getElementById("border"+bonuscompchoice + "wu").style.display="block";
    document.getElementById("border"+userchoice + "w").style.display="block";
    setTimeout(() => {
       document.getElementById(userchoice + "w").classList.remove("bwin");
        document.getElementById(bonuscompchoice + "wu").classList.remove("bwin");
           document.getElementById("border"+bonuscompchoice + "wu").style.display = "none"
    document.getElementById("border"+userchoice + "w").style.display = "none"
        bagain();
    }, 1500);
}


const bagain = () => {
 document.querySelector(".container1").style.display="flex"
    document.querySelector(".footer").style.display="none"
}


const playagian=()=>{
location.reload()
}

playagain.addEventListener("click",()=>{
    playagian();
})