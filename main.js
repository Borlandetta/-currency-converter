const valute = {}

const elementEUR = document.querySelector('[data-value = "EUR"]');
const elementBYN = document.querySelector('[data-value = "BYN"]');
const elementGBP = document.querySelector('[data-value = "GBP"]');

const input = document.querySelector('#input');
const result = document.querySelector('#result');
const select = document.querySelector('#select');

getCurrencies ();

async function getCurrencies () {
    const response = await fetch('https://openexchangerates.org/api/latest.json?app_id=28e08ab78ebb4adba422724bba0c2995&base=USD');    
    const data = await response.json();
    const result = await data;
    valute.EUR = result.rates.EUR;
    valute.EUR = result.rates.BYN;
    valute.EUR = result.rates.GBP;
    
    /* тут вылезет ошибка TypeError: Cannot read property 'value' of undefined
    at getCurrencies. А В ТУТОРИАЛЕ РАБОТАЛО!!!!!!*/
    elementEUR.textContent = valute.EUR.value.toFixed(2);
    elementBYN.textContent = valute.BYN.value.toFixed(2);
    elementGBP.textContent = valute.GBP.value.toFixed(2);
    
    

}
// естественно, дальше нихера не работает, так что я не писала.
input.oninput = function () {
    console.log ('Changed!');
    result.value = parseFloat(input.value) / valute.EUR.value;
}


/*document.querySelector('.arrow-4').click(function() {
    this.toggleClass("open");
}); */