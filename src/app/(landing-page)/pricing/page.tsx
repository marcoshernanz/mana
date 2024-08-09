import AlertDialog from "@/components/ui/AlertDialog";
import Progress from "@/components/ui/Progress";
import Table from "@/components/ui/Table";

export default function PricingPage() {
  const tableData = [
    { invoice: "INV001", status: "Paid", method: "Credit Card", amount: 150 },
    { invoice: "INV002", status: "Pending", method: "PayPal", amount: 200 },
    {
      invoice: "INV003",
      status: "Overdue",
      method: "Bank Transfer",
      amount: 300,
    },
  ];
  return (
    <div className="relative flex h-screen w-screen items-center justify-center bg-orange-50 p-20 dark:bg-slate-950">
      {/* <div className="relative h-full w-full items-center justify-center">
        <AlertDialog
          title="ERROR"
          Message="You haven't sign-in"
          type="error"
          size="huge"
        />
      </div> */}
      {/* <Progress size="large" progress={100} /> */}
      <Table caption="Invoices" data={tableData} />
      {/* <table className="text-slate-950 shadow-xl dark:text-slate-50">
        <caption className="pb-4 text-xl font-bold text-orange-500 dark:text-orange-500">
          Caption
        </caption>
        <div className="border-1 border-orange-500 dark:border-orange-500">
          <div className="dark:border-t-slate-9500 flex items-center justify-center border-b-2 border-l-2 border-r-2 border-t-2 border-b-slate-950 border-l-orange-500 border-r-orange-500 border-t-slate-950 bg-orange-200 px-5 py-4 hover:bg-orange-300/70 dark:border-b-slate-950 dark:border-l-orange-500 dark:border-r-orange-500 dark:bg-slate-800 dark:hover:bg-slate-600/60">
            <thead>
              <tr className="flex items-center justify-center gap-12">
                <th>heading1</th>
                <th>heading2</th>
                <th>heading3</th>
                <th>heading4</th>
              </tr>
            </thead>
          </div>
          <div className="flex items-center justify-center border-b-2 border-l-2 border-r-2 border-b-slate-950 border-l-orange-500 border-r-orange-500 bg-orange-100 py-2 hover:bg-orange-100/30 dark:border-b-slate-950 dark:border-l-orange-500 dark:border-r-orange-500 dark:bg-slate-600 dark:hover:bg-slate-500/80">
            <tbody>
              <tr className="flex items-center justify-center gap-16 py-2">
                <td>value1</td>
                <td>value2</td>
                <td>value3</td>
                <td>value4</td>
              </tr>
            </tbody>
          </div>
        </div>
      </table> */}
    </div>
  );
}
