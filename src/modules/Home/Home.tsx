import { ActiveLoans } from "./ActiveLoans";
import { BillPayments } from "./BillPayments";
import { CardList } from "./CardList";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <CardList />
      <BillPayments />
      <ActiveLoans />
    </>
  );
}
