var navmenu=document.querySelectorAll('.nav-menu a');
console.log(navmenu);
for(var i=0;i<navmenu.length();i++)
{
    navmenu[i].addEventListener('click',function(event)
    {
        event.preventDefault();
        var targetsectionID=this.textContent.trim().toLowerCase();
        var targetsection=document.getElementById(targetsectionID);
        var targetSectionCo=targetsection.getBoundingClientRect();
        var interval=setInterval(function(){
            // var targetsectionco=targetsection.get
            var targetSectionCo=targetsection.getBoundingClientRect();
            if(targetSectionCo.top<=0)
            {
                clearInterval(interval);
                return;
            }
            window.scroll(0,50);


        },50);


        

    });
}