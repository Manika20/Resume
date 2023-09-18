var progressbar = document.querySelectorAll('.skill-outer > div');
var skillContainer = document.getElementById('skill-container');
window.addEventListener('scroll',checkscroll)

function initialiseBars()
{
    for(let bar of progressbar)
    {
        bar.style.width = 0 +'%';
    }
}
initialiseBars();
function fillbar(bar)
{
   let counter=0;
   let target = bar.getAttribute('data-bar-width');
   let clear = setInterval(function()
   {
           if(counter>target)
           {
               clearInterval(clear);
               return;
           }
           counter++;
           //console.log(counter);
           bar.style.width = counter + '%';
           

   },5)
}
function checkscroll()
{

    for(let bar of progressbar)
    {
        
        let cordinates = bar.getBoundingClientRect();
        //console.log(bar);
        let animationNotdone = bar.getAttribute('data-animation');
        //console.log(animationNotdone);
        //console.log(!animationNotdone);
        if(animationNotdone=='false' && cordinates.top<=window.innerHeight)
        {          
                  console.log("visible"); 
                  fillbar(bar);
                  bar.setAttribute('data-animation','true');
                  
        }
        else if(cordinates.top>window.innerHeight)
        {
            bar.setAttribute('data-animation','false');
        }
    }
}
/*function fillbars()
{
    for(let i=0;i<progressbar.length;i++)
    {           
        let counter=0;
        let target = progressbar[i].getAttribute('data-bar-width');
        console.log(target);
        let clear = setInterval(function()
        {
                if(counter>target)
                {
                    clearInterval(clear);
                    return;
                }
                counter++;
                //console.log(counter);
                progressbar[i].style.width = counter + '%';
                

        },5)
    }
}
function checkscroll()
{
    var cordinates = skillContainer.getBoundingClientRect();
     if(! animationNotdone && cordinates.top<=window.innerHeight)
     {
        console.log("hii");
        fillbars();
        animationNotdone=true;
        
     }
     else if(cordinates.top>window.innerHeight)
     {
        animationNotdone = false;
     }
}

*/

















//console.log("hello");
//var tags = document.querySelectorAll('.scroll a');
//console.log(tags);
/*for(var i=0;i<tags.length;i++)
{
    tags[i].addEventListener('click',function(event)
    {
        event.preventDefault();
        var sectionName = this.textContent.trim().toLowerCase();
        //console.log(sectionName);
        if(sectionName == "home")
        {
            sectionName='intro';
        }
         var section = document.getElementById(sectionName);
         //console.log(section);
         var interval = setInterval(function()
         {
             var cordinates = section.getBoundingClientRect();
             if(cordinates.top<=0)
             {
                clearInterval(interval);
                return;
             }
             window.scrollBy(0,100)
         },100);

    })
} */