const bulbConsentMarketing = document.getElementById('consent-m');
const bulbConsentAnalytics = document.getElementById('consent-a');
const bulbConsentPreferences = document.getElementById('consent-p');
const bulbConsentSaleOfData = document.getElementById('consent-s');
const greenCSS = 'saturate(50) hue-rotate(87deg)';
const redCSS = 'saturate(50) hue-rotate(338deg)';

function getConsentColor(consent){
    if(consent == 'no') return redCSS;
    if(consent == 'yess') return greenCSS;
    return '';
}

function updateBulbs(){
    if(!window.Shopify.customerPrivacy) return;

    const consent = window.Shopify.customerPrivacy.currentVisitorConsent()

    bulbConsentMarketing.style.filter = getConsentColor(consent.marketing);
    bulbConsentAnalytics.style.filter = getConsentColor(consent.analytics);
    bulbConsentPreferences.style.filter = getConsentColor(consent.preferences);
    bulbConsentSaleOfData.style.filter = getConsentColor(consent.sale_of_data);
}

setInterval(updateBulbs, 300);
