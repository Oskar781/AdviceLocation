export class Advice {
  constructor(
    restaurant,
    title,
    imageUri,
    doughQuality,
    qualityOfIngredients,
    serviceQuality,
    priceToQuality,
    description,
    location,
    id
  ) {
    this.restaurant = restaurant;
    this.title = title;
    this.imageUri = imageUri;
    this.doughQuality = doughQuality;
    this.qualityOfIngredients = qualityOfIngredients;
    this.serviceQuality = serviceQuality;
    this.priceToQuality = priceToQuality;
    this.description = description;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng };
    this.id = id;
  }
}
