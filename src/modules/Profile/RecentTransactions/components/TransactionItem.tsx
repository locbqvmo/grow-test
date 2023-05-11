import dayjs from "dayjs";

interface TransactionItemProps {
  name: string;
  price: number;
  date: string;
  image: string;
}

export default function TransactionItem({
  name,
  price,
  date,
  image
}: TransactionItemProps) {
  return (
    <div className="flex items-start justify-between">
      <div className="flex items-center">
        <img className="mr-4" src={image} alt="logo" />
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-secondary">{name}</span>
          <span className="text-xs font-medium text-secondary">
            {dayjs(date).format("DD MMM - HH:mm")}
          </span>
        </div>
      </div>

      <p className="mt-2 text-sm font-medium text-black-primary">
        ${price.toLocaleString()}
      </p>
    </div>
  );
}
