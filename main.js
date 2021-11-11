let faqItem = document.querySelectorAll('.faq__item');


faqItem.forEach((item)=>{
    item.addEventListener('click', ()=> {
        item.lastElementChild.classList.toggle('active');
        item.firstElementChild.classList.toggle('faq__question__active');
        item.firstElementChild.lastElementChild.classList.toggle('faq__question__img__active');
    })
})