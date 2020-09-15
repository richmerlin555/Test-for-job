document.getElementById('check').onclick = function() {
    document.getElementById('check').classList.toggle('active');
}

function showFileInput() {
    var fileInput = document.getElementById("fileInput");
    fileInput.click();
}


let tab = function() {
    let tabNav = document.querySelectorAll(".price__box"),
        tabContent = document.querySelectorAll(".bill__inner_right"),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    })

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('cheked')
        });
        this.classList.add('cheked');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('cheked') :
                item.classList.remove('cheked');

        })
    }
};

tab();

let meth = function() {
    let tabNav = document.querySelectorAll(".method");

    tabNav.forEach(item => {
        item.addEventListener('click', selectMethod)
    })

    function selectMethod() {
        tabNav.forEach(item => {
            item.classList.remove('cheked')
        });
        this.classList.add('cheked');

    }

};


meth();



document.getElementById('card1').onkeydown = function() {
    if (this.value.length == this.maxLength)
        document.getElementById('card2').focus();
}
document.getElementById('card2').onkeydown = function() {
    if (this.value.length == this.maxLength)
        document.getElementById('card3').focus();
}
document.getElementById('card3').onkeydown = function() {
    if (this.value.length == this.maxLength)
        document.getElementById('card4').focus();
}
document.getElementById('card4').onkeydown = function() {
    if (this.value.length == this.maxLength)
        document.getElementById('card5').focus()
}

var inp = document.getElementById("card5");

var old = 0;

inp.onkeydown = function() {
    var curLen = inp.value.length;

    if (curLen < old) {
        old--;
        return;
    }
    if (curLen == 2)
        inp.value = inp.value + "/";

    old++;
}