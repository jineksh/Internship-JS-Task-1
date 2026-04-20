function selectPlan(card) {

    const cards = document.querySelectorAll('.pricing-card');
    cards.forEach(c => c.classList.remove('active'));

    card.classList.add('active');

}


function togglePrices(checkbox,priceId) {
    const checked = checkbox.checked;
    const priceElement = document.getElementById(priceId);
    const monthlyPrice = priceElement.getAttribute('data-monthly');
    const yearlyPrice = priceElement.getAttribute('data-yearly');

    priceElement.textContent = checked ? yearlyPrice + '/year' : monthlyPrice + '/month';
}

document.querySelectorAll('.price').forEach(price => {
  const monthly = price.dataset.monthly;
  price.textContent = `${monthly}/month`;
});