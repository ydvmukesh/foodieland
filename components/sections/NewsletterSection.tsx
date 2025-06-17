import { Button } from "@/components/ui/Button"

export default function NewsletterSection() {
  return (
    <section className="lg:pt-12 relative overflow-hidden">
      <div className="container flex flex-col items-center justify-center">
        <div className="bg-[#E7F9FD]/90 backdrop-blur-sm w-full py-10 px-8 sm:px-6 sm:py-14 md:py-18 lg:py-20 rounded-[60px] bg-[url('/images/newsletter-bg.png')] bg-contain lg:bg-cover bg-bottom lg:bg-center bg-no-repeat">
          <div className="sm:space-y-6 text-center typography flex flex-col gap-10 justify-between">
            <div>
              <h2 className="leading-tight mb-5">Deliciousness to your inbox</h2>
              <p className="max-w-2xl mx-auto !text-black/60">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmo d tempor incididunt ut labore et dolore magna aliqut enim ad minim 
              </p>
            </div>

            <form 
              className="flex w-full flex-col sm:flex-row max-w-lg mx-auto sm:bg-white rounded-3xl sm:shadow-md items-center overflow-hidden sm:h-16 md:h-20 p-2 sm:p-3 gap-y-4"
            
            >
              <input
                type="email"
                placeholder="Your email address..."
                className="flex-1 h-full p-4 sm:ps-4 sm:pr-6 text-gray-700 outline-none placeholder:text-gray-500 bg-white sm:bg-transparent rounded-2xl"
                required
              />
              <Button 
                type="submit"
                variant="default" 
                className="p-2 !min-w-auto sm:!min-w-[160px]"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
