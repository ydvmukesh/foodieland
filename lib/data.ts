export const HERO_DATA = [{
    "tag": "Hot Recipes",
    "title": "Spicy delicious chicken wings",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ",
    "time": "30 Minutes",
    "category": "Chicken",
    "author": {
        "name": "John Smith",
        "date": "15 March 2022",
        "image": "/images/john-smith.png"
    },
    "badge": "/images/Badge.svg",
    "image": "/images/chicken-wings.jpg"
},
{
    "tag": "New Dish",
    "title": "Tangy Grilled Salmon",
    "description": "Freshly grilled salmon with zesty citrus marinade perfect for summer meals and healthy diet.",
    "time": "25 Minutes",
    "category": "Seafood",
    "author": {
        "name": "Emily Rose",
        "date": "12 April 2022",
        "image": "/images/john-smith.png"
    },
    "badge": "/images/Badge.svg",
    "image": "/images/chicken-wings.jpg"
},
{
    "tag": "Popular",
    "title": "Classic Beef Burger",
    "description": "Juicy beef patty with fresh vegetables and special sauce, served with crispy fries.",
    "time": "20 Minutes",
    "category": "Beef",
    "author": {
        "name": "Mike Johnson",
        "date": "20 April 2022",
        "image": "/images/john-smith.png"
    },
    "badge": "/images/Badge.svg",
    "image": "/images/chicken-wings.jpg"
},
{
    "tag": "Hot Recipes",
    "title": "Spicy delicious chicken wings",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ",
    "time": "30 Minutes",
    "category": "Chicken",
    "author": {
        "name": "John Smith",
        "date": "15 March 2022",
        "image": "/images/john-smith.png"
    },
    "badge": "/images/Badge.svg",
    "image": "/images/chicken-wings.jpg"
},
]
// recipe--------------------------
import { Recipe } from './types';
export const SAMPLE_RECIPES: Recipe[] = [
    {
      id: 1,
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      time: "30 Minutes",
      category: "Snack",
      image: "/images/buger.jpg",
      status: true
    },
    {
      id: 2,
      title: "Fresh Lime Roasted Salmon with Ginger Sauce",
      time: "30 Minutes",
      category: "Fish",
      image: "/images/salmon.jpg",
      status: false
    },
    {
      id: 3,
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
      time: "30 Minutes",
      category: "Breakfast",
      image: "/images/Pancake.jpg",
      status: false
    },
    {
      id: 4,
      title: "Fresh and Healthy Mixed Mayonnaise Salad",
      time: "30 Minutes",
      category: "Healthy",
      image: "/images/Mayonnaise-salad.jpg",
      status: true
    },
    {
      id: 5,
      title: "Chicken Meatballs with Cream Cheese",
      time: "30 Minutes",
      category: "Meat",
      image: "/images/cream-cheese.jpg",
      status: false
    },
    {
      id: 6,
      image: "/images/Ads.jpg"
    },
    {
      id: 7,
      title: "Fruity Pancake with Orange & Blueberry",
      time: "30 Minutes",
      category: "Healthy",
      image: "/images/fruity-pancake.jpg",
      status: true
    },
    {
      id: 8,
      title: "The Best Easy One Pot Chicken and Rice",
      time: "30 Minutes",
      category: "Snack",
      image: "/images/pot-chicken.jpg",
      status: false
    },
    {
      id: 9,
      title: "The Creamiest Creamy Chicken and Bacon Pasta",
      time: "30 Minutes",
      category: "Noodles",
      image: "/images/Noodles.jpg",
      status: false
    },
  ]
//   FEATURED_RECIPES ----------------------------
export const FEATURED_RECIPES = [
    {
      id: 1,
      title: "Mixed Tropical Fruit Salad with Superfood Boosts",
      time: "30 Minutes",
      category: "Healthy",
      image: "/images/mixed-tropical.jpg",
      status: true
    
    },
    {
      id: 2,
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      time: "30 Minutes",
      category: "Western",
      image: "/images/Beef.jpg",
      status: false
    
    },
    {
      id: 3,
      title: "Healthy Japanese Fried Rice with Asparagus",
      time: "30 Minutes",
      category: "Healthy",
      image: "/images/Asparagus.jpg",
      status: true
    },
    {
      id: 4,
      title: "Cauliflower Walnut Vegetarian Taco Meat",
      time: "30 Minutes",
      category: "Eastern",
      image: "/images/Taco-Meat.jpg",
      status: false
    },
    {
      id: 5,
      title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
      time: "30 Minutes",
      category: "Healthy",
      image: "/images/Mustard.jpg",
      status: true
    },
    {
      id: 6,
      title: "Barbeque Spicy Sandwiches with Chips",
      time: "30 Minutes",
      category: "Snack",
      image: "/images/Sandwiches.jpg",
      status: false
    },
    {
      id: 7,
      title: "Firecracker Vegan Lettuce Wraps - Spicy!",
      time: "30 Minutes",
      category: "Seafood",
      image: "/images/Lettuce.jpg",
      status: false
    },
    {
      id: 8,
      title: "Chicken Ramen Soup with Mushroom",
      time: "30 Minutes",
      category: "Japanese",
      image: "/images/ramen-soup.jpg",
      status: true
    },
  ] 
  
  export const INSTAGRAM_POSTS = [
    {
      id: 1,
      images: ["/images/insta-post.jpg"],
      likes: 44686,
      comments: 120,
      caption: "The vegetables dishes need to have certain vitamin for those people",
      date: "September 19",
      author: {
        name: "Foodieland",
        location: "Tokyo, Japan",
        avatar: "/images/john-smith.png",
        verified: true
      }
    },
    {
      id: 2,
      images: ["/images/insta-post.jpg"],
      likes: 38942,
      comments: 89,
      caption: "Fresh and healthy mixed mayonnaise salad with superfood boosts",
      date: "September 18",
      author: {
        name: "Foodieland",
        location: "Tokyo, Japan",
        avatar: "/images/john-smith.png",
        verified: true
      }
    },
    {
      id: 3,
      images: ["/images/insta-post.jpg"],
      likes: 52156,
      comments: 156,
      caption: "Big and juicy wagyu beef cheeseburger with special sauce",
      date: "September 17",
      author: {
        name: "Foodieland",
        location: "Tokyo, Japan",
        avatar: "/images/john-smith.png",
        verified: true
      }
    },
    {
      id: 4,
      images: ["/images/insta-post.jpg"],
      likes: 45203,
      comments: 203,
      caption: "Healthy Japanese fried rice with asparagus and fresh vegetables",
      date: "September 16",
      author: {
        name: "Foodieland",
        location: "Tokyo, Japan",
        avatar: "/images/john-smith.png",
        verified: true
      }
    },
    
    
  ] 
  
