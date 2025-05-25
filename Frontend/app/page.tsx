import { LandingHero } from "@/pages/welcome";
import { TestimonialsSectionDemo } from "@/components/layout/testimony/testimony";
import  LandingPageClient  from "@/pages/landing"
import { Product } from "@/types/product.types";
import ProductListSec from "@/components/common/ProductListSec";
import { Review } from "@/types/review.types";
import TopNavbar from "@/components/layout/Navbar/TopNavbar";




export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "Book4",
    srcUrl: "https://www.ethiobooks.com/cdn/shop/products/3_ec14c9f9-cae3-48c3-aaf7-0336f941a2ee_1024x1024.jpg?v=1736453676",
    gallery: ["/images/pic1.png", "/images/pic10.png", "/images/pic11.png"],
    price: 120,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 2,
    title: "Book3",
    srcUrl: "https://www.ethiobooks.com/cdn/shop/products/3_ec14c9f9-cae3-48c3-aaf7-0336f941a2ee_1024x1024.jpg?v=1736453676",
    gallery: ["/images/pic2.png"],
    price: 260,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 3.5,
  },
  {
    id: 3,
    title: "Book2",
    srcUrl: "https://www.ethiobooks.com/cdn/shop/products/3_ec14c9f9-cae3-48c3-aaf7-0336f941a2ee_1024x1024.jpg?v=1736453676",
    gallery: ["/images/pic3.png"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 4,
    title: "Book1",
    srcUrl: "https://www.ethiobooks.com/cdn/shop/products/6b5c9d179e4defedf868eb3f2a82a911_1024x1024.jpg?v=1736452856",
    gallery: ["/images/pic4.png", "/images/pic10.png", "/images/pic11.png"],
    price: 160,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 4.5,
  },
];

export const topSellingData: Product[] = [
  {
    id: 5,
    title: "Fourth Wing (The Empyrean Series)",
    srcUrl: "/images/book5.png",
    gallery: ["/images/book5.png", "/images/book10.png", "/images/book11.png"],
    price: 18.99,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 5.0,
  },
  {
    id: 6,
    title: "Iron Flame (The Empyrean Book 2)",
    srcUrl: "/images/book6.png",
    gallery: ["/images/book6.png", "/images/book10.png", "/images/book11.png"],
    price: 14.99,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.0,
  },
  {
    id: 7,
    title: "The Women: A Novel - Hardcover",
    srcUrl: "/images/book7.png",
    gallery: ["/images/book7.png"],
    price: 19.99,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 8,
    title: "Atomic Habits - Premium Edition",
    srcUrl: "/images/book8.png",
    gallery: ["/images/book8.png"],
    price: 24.99,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
];

export const relatedProductData: Product[] = [
  {
    id: 12,
    title: "The Silent Patient - Hardcover Edition",
    srcUrl: "/images/book12.png",
    gallery: ["/images/book12.png", "/images/book10.png", "/images/book11.png"],
    price: 24.99,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.0,
  },
  {
    id: 13,
    title: "Atomic Habits: An Easy & Proven Way",
    srcUrl: "/images/book13.png",
    gallery: ["/images/book13.png", "/images/book10.png", "/images/book11.png"],
    price: 14.99,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 14,
    title: "Where the Crawdads Sing - Special Edition",
    srcUrl: "/images/book14.png",
    gallery: ["/images/book14.png"],
    price: 18.99,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 15,
    title: "The Midnight Library: A Novel",
    srcUrl: "/images/book15.png",
    gallery: ["/images/book15.png"],
    price: 15.99,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 5.0,
  },
];

export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Emily R.",
    content: `"This bookstore has completely transformed my reading habits. The carefully curated selection and knowledgeable staff helped me discover authors I never would have found on my own. The cozy reading nook is now my favorite weekend spot!"`,
    rating: 5,
    date: "January 15, 2024",
  },
  {
    id: 2,
    user: "Michael T.",
    content: `"I'm amazed by the quality of rare books they manage to source. As a collector, I've found several first editions in pristine condition that I've been searching for years. Their authentication service is impeccable."`,
    rating: 5,
    date: "February 3, 2024",
  },
  {
    id: 3,
    user: "Sophia L.",
    content: `"The children's section is magical! My kids beg to visit every week for story time. The staff remembers their names and recommends books perfectly suited to their ages and interests. We've built our home library almost entirely from their suggestions."`,
    rating: 5,
    date: "March 10, 2024",
  },
  {
    id: 4,
    user: "David K.",
    content: `"As an English professor, I appreciate their academic section which rivals university bookstores. They special ordered several obscure literary criticism texts for my research, arriving faster than the big online retailers."`,
    rating: 5,
    date: "April 5, 2024",
  },
  {
    id: 5,
    user: "Aisha B.",
    content: `"Their book subscription service is worth every penny! Each month's surprise selection shows how well they understand my tastes. I've discovered at least three new favorite authors through their thoughtful recommendations."`,
    rating: 5,
    date: "May 22, 2024",
  },
  {
    id: 6,
    user: "James W.",
    content: `"The author events are exceptionally well-run. I've met several writers I admire in intimate settings that allowed for real conversations. The signed editions they offer are beautifully presented and make perfect gifts."`,
    rating: 5,
    date: "June 18, 2024",
  },
];

export default async function Home() {
  return (
    <>
    <TopNavbar/>
    {<LandingPageClient>
    
    <LandingHero/>
    <div className="mt-16 md:mt-24">
      <ProductListSec
        title="Top Sellers"
        data={newArrivalsData}
        viewAllLink="/shop#new-arrivals"
      />
    </div>
    <TestimonialsSectionDemo/>
   </LandingPageClient>}
    </>
   

  
    );
}
