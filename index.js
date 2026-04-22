function selectPlan(card) {

    const cards = document.querySelectorAll('.pricing-card');
    cards.forEach(c => c.classList.remove('active'));

    card.classList.add('active');

}

function toggleAllPrices(toggleElement) {
    const isYearly = toggleElement.checked;
    const priceIds = ['price-basic', 'price-pro', 'price-advance'];

    const monthlyLabel = document.getElementById('text-monthly');
    const yearlyLabel = document.getElementById('text-yearly');

   
    priceIds.forEach(id => {
        const priceElement = document.getElementById(id);
        const monthlyPrice = priceElement.getAttribute('data-monthly');
        const yearlyPrice = priceElement.getAttribute('data-yearly');
        priceElement.innerText = isYearly ? `${yearlyPrice}/yearly` : `${monthlyPrice}/monthly`;
    });

    
    if (isYearly) {
        yearlyLabel.classList.add('active-price-text');
        monthlyLabel.classList.remove('active-price-text');
        monthlyLabel.classList.add('inactive-strike'); // Optional strike
        yearlyLabel.classList.remove('inactive-strike');
    } else {
        monthlyLabel.classList.add('active-price-text');
        yearlyLabel.classList.remove('active-price-text');
        yearlyLabel.classList.add('inactive-strike'); // Optional strike
        monthlyLabel.classList.remove('inactive-strike');
    }
}
document.querySelectorAll('.price').forEach(price => {
    const monthly = price.dataset.monthly;
    price.textContent = `${monthly}/monthly`;
});