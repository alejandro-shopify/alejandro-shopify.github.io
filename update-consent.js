const bulbConsentMarketing = document.getElementById('consent-m');
const bulbConsentAnalytics = document.getElementById('consent-a');
const bulbConsentPreferences = document.getElementById('consent-p');
const bulbConsentSaleOfData = document.getElementById('consent-s');
const greenCSS = 'saturate(50) hue-rotate(87deg)';
const redCSS = 'saturate(50) hue-rotate(338deg)';

const regionFlag = document.getElementById('region-flag');

function countryEmoji(countryCode) {
    if (countryCode.length < 2) {
        return "🌍";
    }

    return countryCode.substring(0,2).toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397));
}

function getConsentColor(val){
    if(val == 'no') return redCSS;
    if(val == 'yes') return greenCSS;
    return '';
}

function updateConsent(){
    if(!window.Shopify.customerPrivacy) return;

    const consent = window.Shopify.customerPrivacy.currentVisitorConsent()

    bulbConsentMarketing.style.filter = getConsentColor(consent.marketing);
    bulbConsentAnalytics.style.filter = getConsentColor(consent.analytics);
    bulbConsentPreferences.style.filter = getConsentColor(consent.preferences);
    bulbConsentSaleOfData.style.filter = getConsentColor(consent.sale_of_data);

    const region = window.Shopify.customerPrivacy.getRegion();

    regionFlag.innerText = (region || "unknown") + " " + countryEmoji(region);

}

setInterval(updateConsent, 300);
