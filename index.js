function selectPlan(card) {

    const cards = document.querySelectorAll('.pricing-card');
    cards.forEach(c => c.classList.remove('active'));

    card.classList.add('active');

}

function toggleAllPrices(toggle) {
    const isYearly = toggle.checked;
    const prices = document.querySelectorAll('.price');
    const billingInfos = document.querySelectorAll('.billing-info');
    
    const textMonthly = document.getElementById('text-monthly');
    const textYearly = document.getElementById('text-yearly');

    prices.forEach((priceElement, index) => {
        if (isYearly) {
            
            const discountedPrice = priceElement.getAttribute('data-yearly-monthly');
            const totalYearly = priceElement.getAttribute('data-yearly');
            
            priceElement.innerHTML = `${totalYearly} <span class="per-month">/yearly</span>`;
            
            if(billingInfos[index]) {
                billingInfos[index].textContent = `Billed ${totalYearly} annually`;
            }

            textYearly.classList.add('active-price-text');
            textMonthly.classList.remove('active-price-text');
        } else {
            const monthlyPrice = priceElement.getAttribute('data-monthly');
            
            priceElement.innerHTML = `${monthlyPrice} <span class="per-month">/monthly</span>`;
            
            if(billingInfos[index]) {
                billingInfos[index].textContent = "Billed monthly";
            }

            textMonthly.classList.add('active-price-text');
            textYearly.classList.remove('active-price-text');
        }
    });
}

document.querySelectorAll('.price').forEach(price => {
    const monthly = price.dataset.monthly;
    price.textContent = `${monthly}/monthly`;
});