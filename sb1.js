var phone = document.getElementById('phone');
console.log(phone.getAttribute('href'));
phone.setAttribute('href','tel:' + phone.innerText.replace(/ /g, ''));
