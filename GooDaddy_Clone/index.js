let btn=document.getElementById("bt1")

function btn1(){
    btn.innerHTML=`<iframe src="./iframe.html" frameborder="0" width="100%" height="400px" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"></iframe>`
}

let video1=document.getElementById("video1")
function vid1(){
    video1.innerHTML=`    <iframe width="1060" height="415" src="https://www.youtube.com/embed/p_p-oTCMmnc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
    video1.style.zIndex="1"
    video1.style.position="absolute"
}
let video2=document.getElementById("video1")
function vid2(){
    video2.innerHTML=`<iframe width="1060" height="415" src="https://www.youtube.com/embed/nhjiUpgoptw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
    video2.style.zIndex="1"
    video2.style.position="absolute"
}
let video3=document.getElementById("video1")
function vid3(){
    video3.innerHTML=`<iframe width="1060" height="415" src="https://www.youtube.com/embed/6kfaxkgqIfc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
    video3.style.zIndex="1"
    video3.style.position="absolute"
}

let clsr=document.getElementById("closer")
let clsr1= document.getElementById("clsr1")
let count=0

function right(x){
    
    if(x==1){
        count=count+1
    }
     if(count==1){
        clsr1.style.position="relative"
        clsr1.style.left="-2%"

        clsr1.style.background="red"
        clsr1.style.transition="all,2s"
    }
    else if(count==2){
        clsr1.style.position="relative"
        clsr1.style.left="-23%"
        clsr1.style.background="green"
        clsr1.style.transition="all,2s"
        
    }
    else if(count==3){
        clsr1.style.position="relative"
        clsr1.style.left="-50%"
        clsr1.style.background="yellow"
        clsr1.style.transition="all,2s"
        
    }
    else if(count==4){
        clsr1.style.position="relative"
        clsr1.style.left="-75%"
        clsr1.style.background="green"
        clsr1.style.transition="all,2s"
        count=0
    }
   
    
}
let count1=0
function left(x){
    
    if(x==1){
        count1=count1+1
    }
     if(count1==1){
        clsr1.style.position="relative"
        clsr1.style.left="-100%"
        clsr1.style.background="red"
        clsr1.style.transition="all,2s"
    }
    else if(count1==2){
        clsr1.style.position="relative"
        clsr1.style.left="-75%"
        clsr1.style.background="green"
        clsr1.style.transition="all,2s"
        
    }
    else if(count1==3){
        clsr1.style.position="relative"
        clsr1.style.left="-50%"
        clsr1.style.background="yellow"
        clsr1.style.transition="all,2s"
        
    }
    else if(count1==4){
        clsr1.style.position="relative"
        clsr1.style.left="-25%"
        clsr1.style.background="green"
        clsr1.style.transition="all,2s"
        
    }
    else if(count1==5){
        clsr1.style.position="relative"
        clsr1.style.left="0%"
        clsr1.style.background="green"
        clsr1.style.transition="all,2s"
        count1=0
    }
    
}
let tgl=document.getElementById("tgle")
let icon=document.getElementById("icon1")
let icon1=document.getElementById("icon2")
let icon2=document.getElementById("icon3")
let icon3=document.getElementById("icon4")
let icon4=document.getElementById("icon5")
let icon5=document.getElementById("icon6")
let icon6=document.getElementById("icon7")
let icon7=document.getElementById("icon8")

let count2=0
function togle(z){
        var z;
        if(z==1){count2=count2+1}
        if(count2==1){
            icon.style.transform="rotate(-180deg)"
            icon.style.transition=".5s"
        }
        if(count2==2){
            icon.style.transform="rotate(0deg)"
            icon.style.transition=".5s"
            count2=0
        }
}
function togle1(z){
    var z;
    if(z==1){count2=count2+1}
    if(count2==1){
        icon1.style.transform="rotate(-180deg)"
        icon1.style.transition=".5s"
    }
    if(count2==2){
        icon1.style.transform="rotate(0deg)"
        icon1.style.transition=".5s"
        count2=0
    }
}
function togle2(z){
    var z;
    if(z==1){count2=count2+1}
    if(count2==1){
        icon2.style.transform="rotate(-180deg)"
        icon2.style.transition=".5s"
    }
    if(count2==2){
        icon2.style.transform="rotate(0deg)"
        icon2.style.transition=".5s"
        count2=0
    }
}
function togle3(z){
    var z;
    if(z==1){count2=count2+1}
    if(count2==1){
        icon3.style.transform="rotate(-180deg)"
        icon3.style.transition=".5s"
    }
    if(count2==2){
        icon3.style.transform="rotate(0deg)"
        icon3.style.transition=".5s"
        count2=0
    }
}
function togle4(z){
    var z;
    if(z==1){count2=count2+1}
    if(count2==1){
        icon4.style.transform="rotate(-180deg)"
        icon4.style.transition=".5s"
    }
    if(count2==2){
        icon4.style.transform="rotate(0deg)"
        icon4.style.transition=".5s"
        count2=0
    }
}
function togle5(z){
    var z;
    if(z==1){count2=count2+1}
    if(count2==1){
        icon5.style.transform="rotate(-180deg)"
        icon5.style.transition=".5s"
    }
    if(count2==2){
        icon5.style.transform="rotate(0deg)"
        icon5.style.transition=".5s"
        count2=0
    }
}
function togle6(z){
    var z;
    if(z==1){count2=count2+1}
    if(count2==1){
        icon6.style.transform="rotate(-180deg)"
        icon6.style.transition=".5s"
    }
    if(count2==2){
        icon6.style.transform="rotate(0deg)"
        icon6.style.transition=".5s"
        count2=0
    }
}
function togle7(z){
    var z;
    if(z==1){count2=count2+1}
    if(count2==1){
        icon7.style.transform="rotate(-180deg)"
        icon7.style.transition=".5s"
    }
    if(count2==2){
        icon7.style.transform="rotate(0deg)"
        icon7.style.transition=".5s"
        count2=0
    }
}

// domain
let cnt=0
// let domian=document.getElementById("domin")
let domain1=document.getElementById("domain1")
// domain1.style.overflow="hidden"
function domains(d){
    var d;
    if(d==1){cnt=cnt+1}
    if(cnt==1){
        // domain1.style.display=""
        domain1.style.opacity=""
        domain1.style.zIndex=""
    }
    else if(cnt==2){
        domain1.style.opacity="1"
        domain1.style.zIndex="0"
        cnt=0
    }
}
// hosting part
let cn1=0
let hsting=document.getElementById("hosting1")

function hosting(hst){
        var hst;
        if(hst===1){cn1=cn1+1}
        if(cn1==1){
            hsting.style.opacity=""
            hsting.style.zIndex=""
            // hsting.style.background="red"
        }
        else if(cn1==2){
            hsting.style.opacity="1"
            hsting.style.zIndex="0"
            // hsting.style.background="green"
            cn1=0
        }
}
// security
let cn2=0
let security=document.getElementById("security")

function security1(scu){
        var scu;
        if(scu===1){cn2=cn2+1}
        if(cn2==1){
            security.style.zIndex=""
            security.style.opacity=""
            // hsting.style.background="red"
        }
        else if(cn2==2){
            security.style.opacity="1"
            security.style.zIndex="0"
            // hsting.style.background="green"
            cn2=0
        }
}
// email and marketing
let cn3=0
let emailandmarketing=document.getElementById("emailmarketing")

function emailmarketing1(emm){
        var emm;
        if(emm==1){cn3=cn3+1}
        if(cn3==1){
            emailandmarketing.style.zIndex=""
            emailandmarketing.style.opacity=""
            // hsting.style.background="red"
        }
        else if(cn3==2){
            emailandmarketing.style.opacity="1"
            emailandmarketing.style.zIndex="0"
            // hsting.style.background="green"
            cn3=0
        }
}
// for web
let cn4=0
let forwebs=document.getElementById("forweb")

function forweb1(fw){
        var fw;
        if(fw==1){cn4=cn4+1}
        if(cn4==1){
            forwebs.style.zIndex=""
            forwebs.style.opacity=""
            // hsting.style.background="red"
        }
        else if(cn4==2){
            forwebs.style.opacity="1"
            forwebs.style.zIndex="0"
            // hsting.style.background="green"
            cn4=0
        }
}

let cn5=0
let ndpd=document.getElementById("numberdropdown")

function ndpd1(nd){
        var nd;
        if(nd==1){cn5=cn5+1}
        if(cn5==1){
            ndpd.style.zIndex=""
            ndpd.style.opacity=""
            // hsting.style.background="red"
        }
        else if(cn5==2){
            ndpd.style.opacity="1"
            ndpd.style.zIndex="0"
            // hsting.style.background="green"
            cn5=0
        }
}
// let dom1=document.querySelector(".secDomain")
// document.body.addEventListener("click",()=>{
//     if(dom1.classList.contains('drop')){
//         dom1.classList.toggle("drop");
//     }
// })
// document.querySelector(".dmn1").addEventListener("click",(e)=>{
//     e.stopPropagation();
//     dom1.classList.toggle("drop")
// 