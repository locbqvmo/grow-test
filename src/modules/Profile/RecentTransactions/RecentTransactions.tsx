import { Section } from "@/components";
import { transactionList } from "./RecentTransactions.constants";
import { TransactionItem } from "./components";
import clsx from "clsx";

export default function RecentTransactions() {
  return (
    <Section title="Recent Transactions">
      <div className="main-background rounded-2xl p-5">
        {transactionList.map((item, index) => (
          <div
            key={item.name}
            className={clsx(index !== transactionList.length - 1 && "mb-10")}
          >
            <TransactionItem
              name={item.name}
              date={item.date}
              image={item.image}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
