function revealtospan(){
document.querySelectorAll(".reveal")
.forEach(function(elem){
     //create two span
     let parent = document.createElement("span");
     let child = document.createElement("span");
     //parent and child both sets their respective classes
     parent.classList.add("parent");
     child.classList.add("child");
    //spna parent get child and child get elem details
    child.innerHTML=elem.innerHTML;
    parent.appendChild(child);

     //elem replaces its value with parent span
     elem.innerHTML="";
     elem.appendChild(parent);
    
});
}

function loaderAnimation(){
var tl = gsap.timeline();
tl
.from(".child span",{
    x :100,
    stagger:.2,
    delay:0.5,
    duration:.9,
    ease: Power3.easeInOut
})
.to(".parent .child",{
    y:"-100%",
    duration:1,
    ease:Circ.easeInOut

})
.to("#loader",{
    height:0,
    duration:1,
    ease:Circ.easeInOut
}) 
.to("#green",{
    height:"100%",
    top:0,
    duration:.9,
    delay:-.9,
    ease:Circ.easeInOut
}) 
.to("#green",{
    height:0,
    duration:1,
    delay:-.4,
    ease:Circ.easeInOut
})
.to("#home #nav ul li",{
    top:0,
    stagger:.1,
    delay:-.3,
    ease:Circ.easeInOut
}) 
.to("#content-one h1",{
    left:0,
    duration:1,
    stagger:1,
    delay:-.7,
    ease:Circ.easeInOut
}) 
.to("#content-two h1",{
    right:0,
    duration:1,
    stagger:.1,
    delay:-.5,
    ease:Circ.easeInOut
}) 
.to(".content h5",{
    opacity:.7,
    stagger:.2,
    delay:-.7,
    ease:Circ.easeInOut
}) 


}

function locoInitialize(){

        const scroll = new LocomotiveScroll({
            el: document.querySelector('#main'),
            smooth: true
});
}
function imageHovercntn(){
    document.querySelectorAll(".skillpart img")
    .forEach(function(cnt){
        cnt.addEventListener("mousemove", function(){
            cnt.style.filter = "grayscale(0.9)";
            cnt.style.cursor ="pointer"
        })
        cnt.addEventListener("mouseleave", function(){
            cnt.style.filter = "grayscale(0)";
        })

    })
}

revealtospan();
loaderAnimation()
locoInitialize()
imageHovercntn()
