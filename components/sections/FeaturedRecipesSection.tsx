import Image from "next/image"
import { FEATURED_RECIPES } from "@/lib/data";
import RecipeCard from "../ui/RecipeCard";



export default function FeaturedRecipesSection() {
  return (
    <section className="py-10 lg:py-10">
      <div className="container">
        <div className=" mb-7 md:mb-10 xl:mb-12 typography grid md:grid-cols-2  items-center lg:px-5">
          <h2 >Try this delicious recipe
          <span className="lg:block">to make your day</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 lg:px-3">
          {FEATURED_RECIPES.slice(0, 8).map((recipe) => 
       
              <RecipeCard
                key={recipe.id}
                id={recipe.id || 0}
                title={recipe.title || ""}
                image={recipe.image || "/placeholder.svg"}
                time={recipe.time || ""}
                category={recipe.category || ""}
                status={recipe.status}
                heading={"h4"}
                transparent={true}
              />
         
          )}
        </div>
      </div>
    </section>
  );
}
