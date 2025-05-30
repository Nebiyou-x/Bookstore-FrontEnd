import React from "react";
import PhotoSection from "./PhotoSection";
import { Product } from "@/types/product.types";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Rating from "@/components/ui/Rating";
import SizeSelection from "./SizeSelection";
import AddToCardSection from "./AddToCardSection";

const Header = ({ data }: { data: Product }) => {
  const hasPercentageDiscount = data.discount?.percentage ? data.discount.percentage > 0 : false;
  const hasAmountDiscount = data.discount?.amount ? data.discount.amount > 0 : false;
  const hasAnyDiscount = hasPercentageDiscount || hasAmountDiscount;

  const getDiscountedPrice = () => {
    if (hasPercentageDiscount && data.discount?.percentage) {
      return Math.round(data.price - (data.price * data.discount.percentage) / 100);
    }
    if (hasAmountDiscount && data.discount?.amount) {
      return data.price - data.discount.amount;
    }
    return data.price;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <PhotoSection data={data} />
      </div>
      <div>
        <h1
          className={cn([
            integralCF.className,
            "text-2xl md:text-[40px] md:leading-[40px] mb-3 md:mb-3.5 capitalize",
          ])}
        >
          {data.title}
        </h1>
        <div className="flex items-center mb-3 sm:mb-3.5">
          <Rating
            initialValue={data.rating}
            allowFraction
            SVGclassName="inline-block"
            emptyClassName="fill-gray-50"
            size={25}
            readonly
          />
          {data.rating && (
            <span className="text-black text-xs sm:text-sm ml-[11px] sm:ml-[13px] pb-0.5 sm:pb-0">
              {data.rating.toFixed(1)}
              <span className="text-black/60">/5</span>
            </span>
          )}
        </div>
        <div className="flex items-center space-x-2.5 sm:space-x-3 mb-5">
          <span className="font-bold text-black text-2xl sm:text-[32px]">
            ${getDiscountedPrice()}
          </span>
          
          {hasAnyDiscount && (
            <span className="font-bold text-black/40 line-through text-2xl sm:text-[32px]">
              ${data.price}
            </span>
          )}
          
          {hasPercentageDiscount && data.discount?.percentage && (
            <span className="font-medium text-[10px] sm:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
              -{data.discount.percentage}%
            </span>
          )}
          
          {hasAmountDiscount && data.discount?.amount && (
            <span className="font-medium text-[10px] sm:text-xs py-1.5 px-3.5 rounded-full bg-[#FF3333]/10 text-[#FF3333]">
              -${data.discount.amount}
            </span>
          )}
        </div>
        <p className="text-sm sm:text-base text-black/60 mb-5">
          A coming-of-age story intertwined with a murder mystery set in the marshes of North Carolina.
        </p>
        <hr className="h-[1px] border-t-black/10 mb-5" />
        <hr className="h-[1px] border-t-black/10 my-5" />
        <SizeSelection />
        <hr className="hidden md:block h-[1px] border-t-black/10 my-5" />
        <AddToCardSection data={data} />
      </div>
    </div>
  );
};

export default Header;