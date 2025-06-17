'use client'
import Image from "next/image";
import { SAMPLE_RECIPES } from "@/lib/data";
import { useState } from "react";
import RecipeCard from "../ui/RecipeCard";


export default function RecipesSection() {
  const [favorites, setFavorites] = useState<{ [key: number]: boolean }>({});
  
  const handleFavorite = (id: number) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="space-y-112 pt-0 md:pt-6">
      <div className="container">
        <div className="text-center mb-4 md:mb-10 xl:mb-12 typography">
          <h2 className="mb-2">Simple and tasty recipes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>

        <div className=" flex overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 lg:px-6">
          {SAMPLE_RECIPES.slice(0, 9).map((recipe, index) => 
            index === 5 ? (
              <div key={recipe.id}>
                <Image
                  src={recipe.image || "/placeholder.svg"}
                  alt={recipe.title || "food"}
                  width={400}
                  height={500}
                  className="w-full h-full max-h-[430px] overflow-hidden object-cover rounded-xl"
                />
              </div>
            ) : (
              <RecipeCard
                key={recipe.id}
                id={recipe.id || 0}
                title={recipe.title || ""}
                image={recipe.image || "/placeholder.svg"}
                time={recipe.time || ""}
                category={recipe.category || ""}
                status={recipe.status}
                transparent={false}
                onFavoriteToggle={handleFavorite}
                isFavorite={favorites[recipe.id || 0]}
                className="min-w-[290px] md:min-w-0 md:w-full"

              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
