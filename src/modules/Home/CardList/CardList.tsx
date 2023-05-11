import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import { CardItem } from "./components";
import { cardList } from "../Home.constants";

export default function CardList() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerPadding: "20px",
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    appendDots: (dots: any) => (
      <div className="mt-1">
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="h-2 w-2 rounded-full bg-secondary" />
    )
  };

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      pagination={true}
      modules={[Pagination]}
      className="card-list mt-10"
      {...settings}
    >
      {cardList.map((card) => (
        <SwiperSlide className="flex justify-center" key={card.id}>
          <CardItem
            bg={card.type as "primary" | "secondary"}
            dueDate={card.dueDate}
            amount={card.amount}
            cardNumber={card.cardNumber}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
