"use client"

import Image from "next/image"
import { Instagram, Heart, MessageCircle, MoreHorizontal, Bookmark, Send } from "lucide-react"
import { INSTAGRAM_POSTS } from "@/lib/data"
import { Button } from "../ui/Button"
import Slider from "../sliders/Slider"
import { SwiperSlide } from "swiper/react"
import type { Swiper } from "swiper"
import { useState } from "react"
import { InstagramPost } from "@/lib/types"

interface InstagramPostCardProps {
  post: InstagramPost;
}

function InstagramPostCard({ post }: InstagramPostCardProps) {
  const [currentSlide, setCurrentSlide] = useState(1)

  return (
    <div className=" mx-auto  rounded-3xl border border-gray-200 bg-white">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src={post.author.avatar}
            alt={`${post.author.name} avatar`}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold text-gray-900 flex items-center">
              {post.author.name}
              {post.author.verified && (
                <Image src="/images/verified.svg" alt="Verified" width={16} height={16} className="ml-1" />
              )}
            </p>
            <p className="text-sm text-gray-600">{post.author.location}</p>
          </div>
        </div>
        <MoreHorizontal className="w-6 h-6 text-gray-500" />
      </div>

      <Slider
        swiperProps={{
          slidesPerView: 1,
          spaceBetween: 0,
          loop: false,
          autoplay: false,
          pagination: {
            clickable: true,
          },
          navigation: true,
          onSlideChange: (swiper: Swiper) => {
            setCurrentSlide(swiper.activeIndex + 1)
          }
        }}
      >
        {(post.images || [post.image]).filter((img): img is string => Boolean(img)).map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative overflow-hidden">
              <Image
                src={image}
                alt={`Instagram post ${post.id} - image ${index + 1}`}
                width={290}
                height={290}
                className="w-full h-auto object-cover"
              />
              {(post.images?.length || 1) > 1 && (
                <div className="absolute top-4 right-4 bg-black/60 bg-opacity-70 text-white text-xs px-3 py-1 rounded-full">
                  {currentSlide}/{(post.images?.length || 1)}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Slider>

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Heart className="w-6 h-6 text-gray-700 cursor-pointer" />
            <MessageCircle className="w-6 h-6 text-gray-700 cursor-pointer" />
            <Send className="w-6 h-6 text-gray-700 cursor-pointer" />
          </div>
          <Bookmark className="w-6 h-6 text-gray-700 cursor-pointer" />
        </div>

        <p className="text-xs text-gray-900 font-semibold">
          Liked by <span className="font-bold">craig_love</span> and <span className="font-bold">{post.likes.toLocaleString()} others</span>
        </p>

        <p className="text-xs text-gray-800">
          <span className="font-semibold">{post.author.name}.</span> {post.caption}
        </p>

        <p className="text-xs text-black/40">{post.date}</p>
      </div>
    </div>
  )
}

export default function InstagramSection() {
  return (
    <section className="space-y-112 md:mb-16 lg:mb-18 bg-gradient-to-b from-[#e7f9fd15] to-[#E7F9FD]">
      <div className="container">
        <div className="text-center mb-7 md:mb-10 xl:mb-12 typography">
          <h2 className="mb-2">Check out @foodieland on Instagram</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
        </div>
        <div className="flex overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {INSTAGRAM_POSTS.map((post) => (
            <div key={post.id} className="min-w-[290px] md:min-w-0 md:w-full">
              <InstagramPostCard
                post={post}
              />
            </div>
          ))}
        </div>
        <div className="text-center mx-auto w-full block mt-4 md:mt-8">
            <Button
              size="lg"
              variant="default"
            >
              Visit Our Instagram
              <Instagram className="w-5 h-5 ms-2" />
            </Button>
          </div>
      </div>
    </section>
  )
}
