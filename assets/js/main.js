// navbar
const menu = document.querySelector(".nav-list");

const closeBtn = document.querySelector(".close-btn");

const menuBtn = document.querySelector(".menu-btn");

menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");

}
closeBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");

}


//banner
var checkbox = document.querySelector('.glide')

var glide = new Glide('.glide', {
    hoverpause: checkbox.checked,
    autoplay: 2000,
    perView: 1
})

checkbox.addEventListener('change', function() {
    glide.update({
        hoverpause: checkbox.checked
    })
})

glide.mount()

//product 
var glide = new Glide('.glide-product', {
    perView: 4,
    breakpoints: {
        1024: {
            perView: 4
        },
        767: {
            perView: 2
        },
        575: {
            perView: 1
        },
    }
})

glide.mount()

//nghe nhan tra dao 
var glide = new Glide('.glide__nghe-nhan', {
    perView: 5,
    breakpoints: {
        1024: {
            perView: 5
        },
        767: {
            perView: 2
        },
        575: {
            perView: 1
        },
    }
})

glide.mount()



glide.mount()
    // sp-lien-quan 
var glide = new Glide('.glide_2', {
    perView: 4,
    breakpoints: {
        1024: {
            perView: 4
        },
        767: {
            perView: 2
        },
        575: {
            perView: 1
        },
    }
})

glide.mount()