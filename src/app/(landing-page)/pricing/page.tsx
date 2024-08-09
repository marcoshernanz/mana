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
      {/* <Table caption="Invoices" data={tableData} /> */}
    </div>
  );
}
