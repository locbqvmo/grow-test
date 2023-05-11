import { Swiper, SwiperSlide } from "swiper/react";

import { Section } from "@/components";
import { loanList } from "./ActiveLoans.constants";
import { LoanItem } from "./components";

export default function ActiveLoans() {
  return (
    <Section
      className="active-loans mt-10"
      headerClassName="px-8"
      title="Active Loans"
      seeAll
      url="/active-loans"
    >
      <Swiper spaceBetween={20} slidesPerView={2}>
        {loanList.map((card) => (
          <SwiperSlide key={card.name}>
            <LoanItem
              key={card.name}
              name={card.name}
              image={card.image}
              nextPeriod={card.nextPeriod}
              total={card.total}
              progress={card.progress}
              amountPerMonth={card.amountPerMonth}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
