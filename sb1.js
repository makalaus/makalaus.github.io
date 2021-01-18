var phone = document.getElementById('phone');
console.log(phone);
phone.getAttribute('href') = 'tel:' + phone.innerText.replace(/ /g, '');
