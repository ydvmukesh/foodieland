import { Facebook, Twitter, Instagram, Utensils, Leaf, Beef, Cake, Coffee, Candy } from "lucide-react"

export const NAVIGATION_LINKS = [
  { href: "/", label: "Home" },
  { href: "/recipes", label: "Recipes" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About us" },
]   

export const SOCIAL_LINKS = [
  { name: "Facebook", href: "#", icon: "/images/facebook.svg" },
  { name: "Twitter", href: "#", icon:  "/images/twitter.svg"  },
  { name: "Instagram", href: "#", icon:  "/images/instagram.svg"  },
]   

export const RECIPE_CATEGORIES = [
  { name: "Breakfast",  image: "/images/breakfast.svg", gradient: "bg-gradient-to-b from-white to-[#f8f6f3]",shadowColor: "#dcdcdc",},
  { name: "Vegan", image: "/images/vegan.svg",  gradient: "bg-gradient-to-b from-white to-[#e8f7eb]", shadowColor: "#c8efda", },
  { name: "Meat", image: "/images/meat.svg", gradient: "bg-gradient-to-b from-white to-[#fbeaea]",  shadowColor: "#f5cccc",},
  { name: "Dessert", image: "/images/dessert.svg", gradient: "bg-gradient-to-b from-white to-[#fef5e6]",  shadowColor: "#fde5b6",},
  { name: "Lunch", image: "/images/lunch.svg", gradient: "bg-gradient-to-b from-white to-[#f6f6f6]", shadowColor: "#dcdcdc",},
  { name: "Chocolate", image: "/images/chocolate.svg",  gradient: "bg-gradient-to-b from-white to-[#faf6f8]",   shadowColor: "#f0d6dd",},
]   

export const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Recipes", href: "/recipes" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];
   


