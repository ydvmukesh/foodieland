import { RECIPE_CATEGORIES } from "@/lib/constants";
import { Button } from "../ui/Button";
import Image from "next/image";

export default function Categories() {
  return (
    <section className="space-y-112 bg-white">
      <div className="container ">
        <div className="flex items-center justify-between mb-12 typography">
          <h2>Categories</h2>
          <Button variant="secondary">View all categories</Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 text lg:grid-cols-6 gap-4 md:gap-10">
          {RECIPE_CATEGORIES.map((category) => {
            return (
              <div
                key={category.name}
                className={`group cursor-pointer hover:shadow-lg transition-shadow rounded-4xl ${category.gradient}`}
              >
                <div className="p-8 text-center">
                  <div
                    className={`w-[100px] h-[100px] mx-auto mb-4 md:mb-8  flex items-center justify-center `}
                  >
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={100}
                      height={100}
                      className="w-24 h-24 object-contain mb-4 backdrop-blur-md
"
                      style={{
                        filter: `drop-shadow(20px 14px 6px ${category.shadowColor})`,
                      }}
                    />{" "}
                  </div>
                  <h3 className="font-semibold text-black text-lg group-hover:text-orange-500 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
