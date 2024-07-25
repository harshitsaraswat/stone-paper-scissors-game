let you = 0;
let comp= 0;

let choice= document.querySelectorAll('.choice');
let userscore=document.querySelector('#userscore')
let compscore=document.querySelector('#compscore')



// compuet ka jo game ayega uska lye function 

let gencomputerchoice=()=>{
    let options = ["rock","paper","scissor"]
     let randomidx=Math.floor(Math.random()*3);
     return options[randomidx];



}
// game play
let showwinner=(userwin,userchoice,compchoice) =>{
if(userwin){
    console.log('you win!')
    msg.innerText=`you win!  ${userchoice} beats ${compchoice}`;
    you++;
    userscore.innerText=you;


    
    

}else{
    console.log('you loss!')
    msg.innerText=`you loss!  ${compchoice} beats ${userchoice}`;
    comp++;
    compscore.innerText=comp;


}
}

let playgame=(userchoice)=>{
    console.log( ' user choice is',userchoice);
    let compchoice=gencomputerchoice();
    console.log( '  computer choice is',compchoice);
    if( userchoice===compchoice){
        console.log("it is a draw")
        msg.innerText="it is a draw"
    }else{
        let userwin= true;
        if(userchoice=== 'rock'){
            userwin= compchoice=== 'paper'? false : true
            
        }else if(userchoice=== 'paper' ){
            userwin= compchoice=== 'scissor'? false : true

        }else{ userwin= compchoice=== 'rock'? false : true
        }
        showwinner(userwin,userchoice,compchoice);
    }




}




// function to take player choice
choice.forEach((choice)=>{
   

    choice.addEventListener('click', ()=>{
        let userchoice= choice.getAttribute('id');
        
        playgame(userchoice);

        


    });
});
