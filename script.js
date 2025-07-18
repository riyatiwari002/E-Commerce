function megaMenu() {
    let design = `
     <style>
        .anchor{
           
            background-color: antiquewhite;
            margin-top: 20px; 
            position: absolute;
            top: 50px;
            right: 50px;
            left:50px;
            // height:400px;
        }
        .anchor .anchor-art1
        {
            
            display: flex;
        }
        .anchor .anchor-art1 ul {
     list-style: none;
     
        }
        .anchor-art1 ul li a{
            text-decoration: none;
            font-size: 23px;
            color:grey;
            line-height: 2em;
            //  width:300px;
            
        }
    </style>

<section class="anchor">
    <article class="anchor-art1" >
        <ul>
            <li><a href=""> Tops</a></li>
            <li><a href="">T-shirts</a></li>
            <li><a href="">Blouses</a></li>
            <li><a href="">Tank Tops</a></li>
            <li><a href="">Crop Tops</a></li>
            <li><a href="">Long-Sleeve Shirts</a></li>
            <li><a href="">Tunics</a></li>
             
            <li><a href="">Off-Shoulder Tops</a></li>
            <li><a href="">Camisoles</a></li>
            
        </ul>

        <ul>
            <li><a href="">Bottoms</a></li>
            <li><a href="">Jeans</a></li>
            <li><a href="">Leggings</a></li>
            <li><a href="">Trousers</a></li>
            <li><a href=""> Shorts</a></li>
            <li><a href="">Skirts</a></li>
            <li><a href="">
            Culottes</a></li>
            <li><a href=""> Capris</a></li>
            <li><a href=""> Sweatpants</a></li>
        </ul>
    </article>
</section>`;
    
    let output = document.querySelector('#output');
    output.innerHTML = design; // ✅ Corrected
    let output1 = document.querySelector('#out');
    output1.innerHTML="Accesories"
}
function g() {
   let design=``
   let output=document.querySelector('#output')
output.innerHTML=design
}
