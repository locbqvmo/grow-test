import { Swiper, SwiperSlide } from "swiper/react";

import { Section } from "@/components";
import { paymentList } from "./BillPayments.constants";
import { PaymentItem } from "./components";
import "./BillPayments.scss";

export default function BillPayments() {
  return (
    <Section
      className="bill-payments mt-[34px]"
      title="Bill Payments"
      headerClassName="px-8"
    >
      <Swiper spaceBetween={32} slidesPerView={4}>
        {paymentList.map((card) => (
          <SwiperSlide key={card.name}>
            <PaymentItem name={card.name} icon={card.icon} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
}
