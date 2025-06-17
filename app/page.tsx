// import { Suspense } from "react"
import type { Metadata } from "next"
import HeroSection from "@/components/sections/HeroSection"
import MainLayout from "@/components/layout/MainLayout"
import Categories from "@/components/sections/Categories"
import RecipesSection from "@/components/sections/RecipesSection"
import ChefSection from "@/components/sections/ChefSection"
import FeaturedRecipesSection from "@/components/sections/FeaturedRecipesSection"
import NewsletterSection from "@/components/sections/NewsletterSection"
import InstagramSection from "@/components/sections/InstagramSection"

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Foodieland - your ultimate destination for delicious recipes and cooking inspiration.",
}

export default function HomePage() {
  return (
    <MainLayout>
      <main className="min-h-screen">
        <HeroSection />
        <Categories/>
        <RecipesSection/>
        <ChefSection/>
        <InstagramSection/>
        <FeaturedRecipesSection/>
        <NewsletterSection/>
        
      </main>
    </MainLayout>
  )
}
