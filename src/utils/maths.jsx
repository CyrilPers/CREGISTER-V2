export function formatPrice(priceToFormat) {
  let price = priceToFormat

  // @TODO: perhaps change this to if(!price) return 0
  if (!price) return "0,00 €"
  price = replaceFrenchCommaWithDot(price)



  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price)
  return formattedPrice
}

export function formatDate(dateToFormat) {
  const dateObj = new Date(dateToFormat);

  const optionsDate = { day: 'numeric', month: 'numeric', year: 'numeric' };
  const optionsTime = { hour: 'numeric', minute: 'numeric' };

  const formattedDate = dateObj.toLocaleDateString('fr-FR', optionsDate);
  const formattedTime = dateObj.toLocaleTimeString('fr-FR', optionsTime);

  return `${formattedDate} - ${formattedTime}`;
}

export function replaceFrenchCommaWithDot(price) {
  if (typeof price === "string") price = parseFloat(price.replace(",", "."))
  return price
}
