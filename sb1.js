var phone = document.getElementById('phone');
console.log(phone.getAttribute('href'));
phone.innerHTML = 'tel:' + phone.innerText.replace(/ /g, '');
