export default function displayPrice(number){
    return Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(number);
}