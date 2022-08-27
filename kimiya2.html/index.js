
 const heading=document.getElementsByTagName('h1')[0];

 heading.addEventListener("click" , function() {
                alert("something")
})

 const todotitle = document.getElementById("title")
 const tododesc = document.getElementById("desc")
const submittodobutton = document.getElementById("submit")
const mainlist = document.getElementById("main")

 const newtodo = { title: todotitle.value,desc: tododesc.value}

            // const newtodolistitem = `<li>
                // <h3>`
  const handlecreatnewtodo = (event) => {
        event.preventdefault();
        console.log("submit new todo");
                        
         const newtodo = {
                title: todotitle.value,
                desc: tododesc.value

         }
         console.log(newtodo.title);
        console.log(newtodo.title);

         const listitem = document.createElement("li");
         const todolistheading = document.createElement("h3");
         todolistheading.innerHTML = newtodo.title
         todolistheading.style.background = "tomato"
        const tododescpara = document.createElement("p3");
        tododesc.innerHTML = newtodo.desc


         console.log(listitem , todolistheading , tododesc);

         listitem.appendChild(todolistheading);
         listitem.appendChild(tododesc);
        console.log(listitem);

         mainlist.appendChild(listitem);
          console.log(mainlist);




        }

                    
         submittodobutton.addEventListener("click" , handlecreatnewtodo);


















         
const arr = ["abc" , "abc2" , "abc3"];
localStorage.setItem("list" , JSON.stringify(arr));
console.log(arr);
const parsdata = JSON.parse(localStorage.getItem("list"));
console.log(parsdata);
