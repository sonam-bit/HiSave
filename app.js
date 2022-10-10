photoGallery = [
   
   {
    src:"images/image1.jpg",
    val: "cat"
   },
   {
    src:"images/image2.jpg",
    val: "Polar-Bear"

   },
   {
    src:"images/image3.jpg",
    val: "panda"
   },
   {
    src:"images/image4.jpg",
    val: "dog"

   },
   {
    src:"images/image5.jpg",
    val: "horse"
   },
   {
    src:"images/image6.jpg",
    val: "fish"

   },
   {
    src:"images/image7.jpg",
    val: "crab"

   },
   {
    src:"images/image8.jpg",
    val: "butterfly"

   },
   {
    src:"images/image9.jpg",
    val: "fish"

   },
   {
    src:"images/image10.jpg",
    val: "horse"

   }
];

const questions = ["horse" , "butterfly", "fish", "Polar-bear", "crab", "dog", "cat", "panda"];


const photo = document.querySelectorAll(".gallery");
const imageSrc = document.querySelector("img");
const quesValue = document.querySelector(".keyword");
const ques = document.querySelector(".question");

photo.forEach(function(ph)
{
    ph.addEventListener("click",function(){

        // i= Math.floor (Math.random()*10); 
        let source = ph.children[0].children[0].src ;
        ph.classList.add("check");
        // console.log(source);
        let ind =source.indexOf("images");
        let sourceNew = source.slice(ind);
       
        
        for(let i=0; i<10;i++)
        {
            // console.log(i);
           
            if(photoGallery[i].src == sourceNew)
            {
                console.log(photoGallery[i].src);
                console.log(source);
                console.log(quesValue.innerHTML);
                console.log(photoGallery[i].val);
                if(quesValue.innerHTML== photoGallery[i].val)
                {
                    console.log(quesValue.innerHTML);
                    console.log("hii");
                    j= Math.floor(Math.random()*10);
                    photo.forEach(element => {
                        element.children[0].children[0].src = photoGallery[j].src;
                        j++;
                        j= j%10;
                    });
                     
                     z=Math.floor (Math.random()*8);
                     ques.children[1].innerHTML= questions[z];
                     break;
                }
                else
                {
                      console.log(quesValue.innerHTML);
                }
            }
        }
     
     });

});

const ref = document.querySelector(".refresh");

ref.addEventListener("click", refresh);

window.addEventListener('DOMContentLoaded', refresh);

function refresh()
{
    j= Math.floor(Math.random()*10);
    photo.forEach(element => {
        element.children[0].children[0].src = photoGallery[j].src;
        j++;
        j= j%10;
    });
    z=Math.floor (Math.random()*8);
    ques.children[1].innerHTML= questions[z];
}