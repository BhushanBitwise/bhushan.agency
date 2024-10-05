function locomotiveanimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function lodder(){

    var tm=gsap.timeline();

    tm.from(".line h1",{
        y:100,
        stagger:0.25,
        duration:0.6,
        delay:0.5,
    })
    tm.from("#line_part1",{
        opacity:0,
        onStart:function(){
            var h5=document.querySelector("#line_part1 h5")
                var grow=0;
                var t=setInterval(function(){
                h5.innerHTML=grow;
                if(grow>=100)
                    clearInterval(t);
                grow++;
            },33)
        },
    })
    tm.to(".line h2",{
        animationName:"anime",
        opacity:1
    })
    tm.to("#loder",{
        opacity:0,
        duration:0.2,
        delay:4,
    })
    
    tm.from("#page1",{
        delay:0.2,
        y:1600,
        opacity:0,
        duration:0.6,
        ease:Power4
    })
    tm.to("#loder",{
        display:"none",
    })
    tm.from("#nav",{
       opacity:0
    })
    tm.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
        y:120,
        stagger:0.2,
    })
    tm.from("#page1 #p1h2,#page2",{
       opacity:0,
    },"-=1")
    
    // document.querySelector("#footer h1").addEventListener("mouseover",function(){
    //     gsap.to("#footer h1",{
    //         y:20,
    //         // rotate:"360deg",
    //         stagger:0.2,
            
    //     })
    // })
    // document.querySelector("#footer h1").addEventListener("mouseleave",function(){
    //     gsap.to("#footer h1",{
    //         y:0,
    //         // rotate:"-360deg",
    //         stagger:0.2,
    //     })
    // })
}
function curser_anime(){
//     document.addEventListener("mousemove",function(des){
//         gsap.to("#crsr",{
//             left:des.x,
//             top:des.y
//         })
// })
        Shery.mouseFollower({
            skew:true,
            ease:"cubic-bezier(0.23,1,0.320,1)",
            duration:1,
        });

Shery.makeMagnet("#nav_part2 a");

    var video_container=document.querySelector("#video_container");
    var video=document.querySelector("#video_container video")
    video_container.addEventListener("mouseenter",function(){
        video_container.addEventListener("mousemove",function(dets){
                gsap.to(".mouseFollower",{
                    opacity:0,
                })
                gsap.to("#video_curser",{
                    left:dets.x - 470,
                    y:dets.y - 250
                })
        })
    })
    video_container.addEventListener("mouseleave",function(){
        gsap.to(".mouseFollower",{
            opacity:0,

        })
        gsap.to("#video_curser",{
            top: "-10",
            left: "80%"  
        })
    })

    var flag=0;

    video_container.addEventListener("click",function(){
        if(flag==0)
        {
            video.play()
            video.style.opacity=1

            document.querySelector("#video_curser").innerHTML=`<i class="ri-pause-circle-line"></i>`
            gsap.to("#video_curser",{
                scale:0.5
            })
            flag=1;
        }else{
            video.pause()
            video.style.opacity=0

            document.querySelector("#video_curser").innerHTML=`<i class="ri-play-fill"></i>`
            gsap.to("#video_curser",{
                scale:1
            })
            flag=0;
        }
    })    
}
function shery_animation(){

    Shery.imageEffect("#image_div",{
        style:5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7666558424631754},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.37,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.34,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.4,"range":[0,2]},"noise_scale":{"value":9.16,"range":[0,100]}},
        gooey:true,
    })
    Shery.imageEffect("#image_div1",{
        style:5,
        // debug:true,
        config:{"a":{"value":1.6,"range":[0,30]},"b":{"value":-0.91,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8571428571428571},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.26,"range":[0,2]},"discard_threshold":{"value":0.66,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":9.16,"range":[0,100]}},
        gooey:true,
    })
    Shery.imageEffect("#image_div2",{
        style:5,
        // debug:true,
        config:{"a":{"value":0.69,"range":[0,30]},"b":{"value":-0.54,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8157793540169074},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.69,"range":[0,10]},"metaball":{"value":0.55,"range":[0,2]},"discard_threshold":{"value":0.73,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.18,"range":[0,2]},"noise_scale":{"value":9.16,"range":[0,100]}},
        gooey:true,
    })
    Shery.imageEffect("#image_div3",{
        style:5,
        // debug:true,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8124921022640573},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.55,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.84,"range":[0,2]},"discard_threshold":{"value":0.73,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.18,"range":[0,2]},"noise_scale":{"value":0,"range":[0,100]}},
        gooey:true,
    })
    Shery.imageEffect("#image_div4",{
        style:5,
        // debug:true,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.36,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6841992822410082},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.6,"range":[0,2]},"discard_threshold":{"value":0.38,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.56,"range":[0,2]},"noise_scale":{"value":91.6,"range":[0,100]}},
        gooey:true,
    })

}
function flag1(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#flag",{
            x:dets.x,
            y:dets.y
        })
    })
    document.querySelector("#hero3").addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            opacity:1
        })
    })
    document.querySelector("#hero3").addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            opacity:0
        })
    })
}

lodder()
curser_anime()
locomotiveanimation()
shery_animation()
flag1()

