function showtime(){
    var d=new Date();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    var ses="am";

    if(h>12){
        ses="pm";
    }
    
    if(h>12){
        h=h-12;
    }

    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    
    var time=h + " : " +  m + " : " + s +" " + ses;
    document.getElementsByTagName('h1')[0].innerHTML=time;
    setTimeout(showtime,1000);

}  
