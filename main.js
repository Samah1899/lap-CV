//DOM
// let idname=document.getElementById("root")
// let element=document.createElement("div")
// element.innerHTML="hello"
// idname.appendChild(element)


//REACT

// let idname=document.getElementById("root");
//  let element=React.createElement("div" , {
//     children : "hello",  // هنا بدل InnerHtml ,, اضفته بهذا الطريقه (حطيت فاصله + childer)

//  });
//  ReactDOM.render(element,idname); // وش بعرض (element),, وين بعرض (idname)


//jsx 

let idname=document.getElementById("root");
let element =<>
<br></br> <br></br>
<h1>SAMAH ABDULLAH</h1><br></br><br></br>


<h2 class="fontcolor">OBJECTIV</h2>
<p class="fontsize">A confident and hard-working individual who aims to explore many opportunities to enhance oneself and expertise,<br></br>
 which uses various resources and planning skills to formulate and deliver efficient solutions and deliver tasks on deadlines with high quality standarts</p>
 <br></br><hr></hr>
<h2 class="fontcolor">EDUCATION</h2>
<ul class="fontsize">
    <li>
        Bachelors of information system </li>
    <li> Jazan University - Computer Science and Information Thenology</li>
    <li>Agu 2017 - May 2021</li>
</ul>
<br></br>
<hr></hr>
<h2 class="fontcolor">CERTIFICATIONS & COURSES</h2>

<ul class="fontsize">
    <li>Cybersecuirty </li>
    <li>Computer Networking</li>
    <li>Database</li>
</ul><br></br>
<hr></hr>
<div class="fi">
<h2 class="fontcolor">SKILLS</h2>
<ul class="fontsize">
    <li>Programming Language : JavaScript , SQL</li>
    <li>Photoshop</li>
    <li>Montage Design</li>
</ul>
<hr></hr>
<h2 class="fontcolor">CONTACT</h2>
<ul class="fontsize">
    <li>samahnajdi46@gmail.com </li>
    <li>0507312697</li>
    <li>RIYADH</li>
</ul>

</div>

</>

ReactDOM.render(element,idname);

