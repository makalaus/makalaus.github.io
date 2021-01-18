var phone = document.getElementById('phone');

phone.setAttribute('href','tel:' + phone.innerText.replace(/ /g, ''));
