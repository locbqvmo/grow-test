import { TotalSpendings } from "./TotalSpendings";
import { RecentTransactions } from "./RecentTransactions";
import { LineChart } from "./LineChart";

export default function Profile() {
  return (
    <div className="mt-6 px-8">
      <LineChart />
      <TotalSpendings total={7012.55} dueDate="2023-12-12" />
      <RecentTransactions />
    </div>
  );
}
