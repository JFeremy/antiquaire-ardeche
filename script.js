const checkVisible = (elm) => {
    const rect = elm.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
};

const onHamburgerClick = () => {
    const header = document.getElementById("header");
    const menuBtn = document.getElementById("menu_btn");
    const navBar = document.getElementById("nav_bar");
    const navBack = document.getElementById("nav_back");
    const menuHamburger = document.getElementById("menu_hambuger");
    const menuClose = document.getElementById("menu_close");

    if(menuBtn.className.includes('isClose')) {
        menuHamburger.classList.add("rotateOut");
        menuHamburger.classList.remove("rotateIn");
        menuClose.classList.add("rotateIn");
        menuClose.classList.remove("rotateOut");
        navBar.classList.remove("isHidden");
        navBar.classList.add("slideInDown");
        navBar.classList.remove("slideOutUp");
        navBack.classList.remove("isHidden");
        navBack.classList.add("slideInDown");
        navBack.classList.remove("slideOutUp");
    } else {        
        menuHamburger.classList.add("rotateIn");
        menuHamburger.classList.remove("rotateOut");
        menuClose.classList.add("rotateOut");
        menuClose.classList.remove("rotateIn");
        navBar.classList.remove("slideInDown");    
        navBar.classList.add("slideOutUp");     
        navBack.classList.remove("slideInDown");    
        navBack.classList.add("slideOutUp");        
    }
    menuBtn.classList.toggle("isClose");
    header.classList.toggle("isOpen");
}

const onSpanClick = (id) => {
    document.getElementById(`file-input${id}`).value = "";
    document.getElementById(`span_file_name${id}`).remove();
}

const onFileInputClick = () => {
    for (let i = 0; i < 6; i++) {
        const file = document.getElementById(`file-input${i}`);
        if (file.value === "") {
            file.click();
            return;
        }
    }
}
const onFileInputChange = (id) => {
    const file = document.getElementById(`file-input${id}`);
    const list = document.getElementById("list_files");
    const span = document.createElement("span")
    console.log(file.files)
    span.textContent = file.files[0].name;
    span.id = `span_file_name${id}`;
    span.onclick = () => { onSpanClick(id) };
    list.append(span);
}
window.onscroll = () => {
    const images = document.getElementsByClassName("imgEffect");
    const divs = document.getElementsByClassName("divEffect");
    for (let i = 0; i < images.length; i++) {     
        if(checkVisible(images[i])) {
            images[i].classList.add('fadeIn');
        } else {
            images[i].classList.remove('fadeIn');
        }   
    }
    for (let j = 0; j < divs.length; j++) {     
        if(checkVisible(divs[j])) {
            divs[j].classList.add('zoomIn');
        } else {
            divs[j].classList.remove('zoomIn');
        }   
    }
};

window.onload = function() {
    document.getElementById("menu_close").style.opacity = 0;
    document.getElementById("nav_bar").classList.add("isHidden");
    document.getElementById("nav_back").classList.add("isHidden");
};
