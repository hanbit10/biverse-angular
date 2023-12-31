//These are sample data that backend use and frontend get this data with the http

export const sample_verse: any[] = [
  {
    name: "Flower",
    cookTime: "10-20",
    price: 10,
    favorite: false,
    origins: ["italy"],
    stars: 4.5,
    imageUrl: "assets/1661948849571-6.jpg",
    tags: ["FastFood", "Pizza", "Lunch"],
  },
  {
    name: "Netherlands",
    price: 20,
    cookTime: "20-30",
    favorite: true,
    origins: ["persia", "middle east", "china"],
    stars: 4.7,
    imageUrl: "assets/1661948849571-7.jpg",
    tags: ["SlowFood", "Lunch"],
  },
  {
    name: "Hanbit",
    price: 5,
    cookTime: "10-15",
    favorite: false,
    origins: ["germany", "us"],
    stars: 3.5,
    imageUrl: "assets/1661948849571-8.jpg",
    tags: ["FastFood", "Hamburger"],
  },
  {
    name: "Hansam",
    price: 2,
    cookTime: "15-20",
    favorite: true,
    origins: ["belgium", "france"],
    stars: 3.3,
    imageUrl: "assets/1661948849571-9.jpg",
    tags: ["FastFood", "Fry"],
  },
  {
    name: "JangGeungYong",
    price: 11,
    cookTime: "40-50",
    favorite: false,
    origins: ["india", "asia"],
    stars: 3.0,
    imageUrl: "assets/1661948849571-10.jpg",
    tags: ["SlowFood", "Soup"],
  },
  {
    name: "Hansam",
    price: 9,
    cookTime: "40-50",
    favorite: false,
    origins: ["italy"],
    stars: 4.0,
    imageUrl: "assets/1661948849571-11.jpg",
    tags: ["FastFood", "Pizza", "Lunch"],
  },
];

export const sample_tags: any[] = [
  { name: "All", count: 6 },
  { name: "FastFood", count: 4 },
  { name: "Pizza", count: 2 },
  { name: "Lunch", count: 3 },
  { name: "SlowFood", count: 2 },
  { name: "Hamburger", count: 1 },
  { name: "Fry", count: 1 },
  { name: "Soup", count: 1 },
];

export const sample_users: any[] = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    password: "12345",
    address: "Toronto On",
    isAdmin: true,
  },
  {
    name: "Hanbit Chang",
    email: "chanbit10@gmail.com",
    password: "love0324",
    address: "Shanghai",
    isAdmin: true,
  },
];
