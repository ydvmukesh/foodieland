import Image from "next/image"
import { Button } from "../ui/Button"

export default function ChefSection() {
  return (
    <section className=" sm:pt-0 lg:py-12">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-4  typography  flex flex-col h-full justify-evenly
         items-start" >
        <div className="">
        <h2 className="mb-4">Everyone can be a
          <span className="sm:block">chef in their own kitchen</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
          </p>
        </div>
          <Button size="default" variant="default">
              Learn More
            </Button>
        </div>
         

          <div className="relative">
            <Image
              src="/images/chef.png"
              alt="Chef cooking"
              width={700}
              height={700}
              className="w-full h-auto"
            />
            
          </div>
        </div>
      </div>
    </section>
  )
}
