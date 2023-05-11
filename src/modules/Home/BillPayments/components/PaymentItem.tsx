interface PaymentItemProps {
  icon: string;
  name: string;
}

export default function PaymentItem({ name, icon }: PaymentItemProps) {
  return (
    <div className="flex w-[52px] flex-col items-center justify-center text-center">
      <img src={icon} alt="icon" />
      <span className="text-black mt-1 text-[10px] font-semibold">{name}</span>
    </div>
  );
}
