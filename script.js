$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");

        }
    });
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });


    // Typing
    var typed = new Typed(".typing", {
        strings: ["Freelancer", "Developer", "Designer", "Animator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
    var typed = new Typed(".typing-2", {
        strings: ["Freelancer", "Developer", "Designer", "Animator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
    // owl
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    })
});
function removeActiveMenuClass() {
    $('.navbar .menu').removeClass("active")
    $('.menu-btn i').removeClass("active")
}

// popup
var webDev = document.querySelectorAll(".card");
webDev.forEach(function (ele) {
    ele.addEventListener("click", function () {
        // showPopupContent("divWebDev");
        showPopup();
    });
})
// popup-close

document.querySelector(".close").addEventListener("click", function () {
    hidePopup();
})

function showPopup() {
    document.querySelector(".popup").style.display = "inline-flex";
    document.querySelector(".mask").style.display = "inline-flex"
    // document.body.style.overflowY = 'hidden';
    //showPopupContent("divWebDev");
}

function hidePopup() {
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".mask").style.display = "none"
    // document.body.style.overflowY = 'scroll';
}

// Graphic Design
var graph = document.getElementById("graphDes")
var gwork = document.getElementById("graphWork")
graph.addEventListener("click", function () {
    gwork.style.display = "block";
    document.getElementById("divCardDetails").style.display = "none";
    document.getElementById("uiDes").style.display = "none";
    document.getElementById("blender").style.display = "none";
    document.getElementById("product").style.display="none";
})
// Web dev
var web = document.getElementById("divWebDev")
var webwork = document.getElementById("divCardDetails")
web.addEventListener("click", function () {
    webwork.style.display = "block";
    document.getElementById("graphWork").style.display = "none";
    document.getElementById("uiDes").style.display = "none";
    document.getElementById("blender").style.display = "none";
    document.getElementById("product").style.display="none";

})
// ui/ux
var ui = document.getElementById("uiCard")
var ux = document.getElementById("uiDes")
ui.addEventListener("click", function () {
    ux.style.display = "block"
    document.getElementById("divCardDetails").style.display = "none";
    document.getElementById("graphWork").style.display = "none";
    document.getElementById("blender").style.display = "none";
    document.getElementById("product").style.display="none";

})
// Blender
var blend = document.getElementById("blendDesign")
var blend1 = document.getElementById("blender")
blend.addEventListener("click", function () {
    blend1.style.display = "block"
    document.getElementById("divCardDetails").style.display = "none";
    document.getElementById("graphWork").style.display = "none";
    document.getElementById("uiDes").style.display = "none";
    document.getElementById("product").style.display="none";

})

// Product
var prod = document.getElementById("prodes")
var prod1 = document.getElementById("product")
prod.addEventListener("click", function () {
    prod1.style.display = "block"
    document.getElementById("divCardDetails").style.display = "none";
    document.getElementById("graphWork").style.display = "none";
    document.getElementById("uiDes").style.display = "none";
    document.getElementById("blender").style.display = "none";
})

// form validation
const form_name = document.getElementById("name");
const form_email = document.getElementById("email");
const form_sub = document.getElementById("subject");
const form_text = document.getElementById("textarea");

function validate() {
    var save = false;

    if (validateName() && validateEmail() && validateSubject() && validateDescription() == true) {
        // submitForm();
        save = true;
        form.addEventListener("submit", handleSubmit);
    }
    return save;
}

function validateName() {
    var save;
    if (form_name.value.length == 0) {
        document.getElementById("enter_name").innerHTML = "Please enter your name";
        form_name.focus();
        save = false;
    } else {
        document.getElementById("enter_name").innerHTML = "";
        save = true;
    }
    return save;
}
function validateRegex(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validateEmail() {
    var save;
    if (form_email.value.length == 0) {
        document.getElementById("enter_email").innerHTML = "Please enter your email";
        form_email.focus();
        save = false;
    }
    else if (form_email.value.length != 0) {
        if (!validateRegex(form_email.value)) {
            document.getElementById("enter_email").innerHTML = "";
            document.getElementById("enter_email").innerHTML = "Please enter valid email";
            form_email.focus();
            save = false;
        } else {
            document.getElementById("enter_email").innerHTML = "";
            save = true;
        }
    }
    else {
        document.getElementById("enter_email").innerHTML = "";
        save = true;
    }
    return save;
}
function validateSubject() {
    var save;
    if (form_sub.value.length == 0) {
        document.getElementById("enter_sub").innerHTML = "Please enter the subject";
        form_sub.focus();
        save = false;
    } else {
        document.getElementById("enter_sub").innerHTML = "";
        save = true;
    }
    return save;
}
function validateDescription() {
    var save;
    if (form_text.value.length == 0) {
        document.getElementById("enter_text").innerHTML = "Please describe the project";
        form_text.focus()
        save = false;
    } else {
        document.getElementById("enter_text").innerHTML = "";
        save = true;
    }
    return save;
}
var success = document.getElementById("success");

var form = document.getElementById("my-form");

async function handleSubmit(event) {

    event.preventDefault();
    // var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    console.log(event.target)
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        document.getElementById("formElements").style.display = "none";
        document.getElementById("divThanks").style.display = "block";
        form.reset()
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}




