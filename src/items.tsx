export type Item = {
  id: number;
  placeholder: string;
  title: string;
  description: string;
  imageSrc: string;
  price: number;
  currency: string;
  locationFrom?: string;
  locationTo?: string;
  dateFrom: string;
  dateTo: string;
  owner?: string;
  agency?: string;
  type: "Flight" | "Hotel" | "Card";
  numOfPersonsAllowed: number;
};

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateItem(id: number) {
  const types = ["Flight", "Hotel", "Card"];
  const currencies = ["USD", "EUR", "GBP", "JPY"];
  const placeholders = [
    "Best Deal",
    "Last Minute",
    "Exclusive Offer",
    "New Arrival",
  ];
  const titles = ["Luxury Flight", "5-Star Hotel", "Premium Card", "Business Flight", "Business Car"];
  const descriptions = [
    "Enjoy a luxurious experience",
    "Exclusive offer for limited time",
    "Premium travel and accommodation package",
    "Top-notch service and amenities",
  ];
  const owners = ["John Doe", "Jane Smith", "TravelCorp", "LuxuryStay"];
  const agencies = ["Agency1", "Agency2", "Agency3", "Direct Booking"];
  const locations = ["New York", "Paris", "London", "Tokyo", "Dubai", "Sydney"];

  return {
    id,
    placeholder: placeholders[getRandomInt(0, placeholders.length - 1)],
    title: titles[getRandomInt(0, titles.length - 1)],
    description: descriptions[getRandomInt(0, descriptions.length - 1)],
    imageSrc: `https://picsum.photos/id/${getRandomInt(0, 100)}/200`,
    price: getRandomInt(100, 10000),
    currency: currencies[getRandomInt(0, currencies.length - 1)],
    locationFrom: locations[getRandomInt(0, locations.length - 1)],
    locationTo: locations[getRandomInt(0, locations.length - 1)],
    dateFrom: new Date(Date.now() + getRandomInt(1, 10) * 86400000)
      .toISOString()
      .split("T")[0],
    dateTo: new Date(Date.now() + getRandomInt(11, 20) * 86400000)
      .toISOString()
      .split("T")[0],
    owner: owners[getRandomInt(0, owners.length - 1)],
    agency: agencies[getRandomInt(0, agencies.length - 1)],
    type: types[getRandomInt(0, types.length - 1)],
    numOfPersonsAllowed: getRandomInt(1, 5)
  } as Item;
}

export function seedItems(): Item[] {
  const items: Item[] = [];
  for (let i = 0; i < 1000; i++) {
    items.push(generateItem(i));
  }

  return items;
}
