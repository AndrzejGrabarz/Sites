const selectElement = selector => {
const element= document.querySelector (selector)
if (element) return element;
throw new Error(`Something went, make sue thay ${selector} 
exists or is typed correctly.`);
}

console.log(selectElement(`.navbar`));


const menuToggleIcon = selectElement(".menu-icon");


const toggleMenu = () => {
    const mobileMenu = selectElement(".menu");
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);



//Kubuś 


const adonis_1 = document.getElementById("spiner");


function animation_1 (){
    document.getElementById('test_1').classList.add('spin');
    console.log("dział");

}


adonis_1.addEventListener("click",animation_1);

//wierzba


const adonis_2 = document.getElementById("sparkle");


function animation_2() {
    document.getElementById('test_2').classList.add('glitter');
    console.log("dział to też")
  }

adonis_2.addEventListener('click',animation_2);


//Bobik


const adonis_3 = document.getElementById("fliper");


function animation_3() {
    document.getElementById('test_3').classList.add('flip');
    console.log("dział to też")
  }

adonis_3.addEventListener('click',animation_3);

