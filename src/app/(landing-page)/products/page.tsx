import Avatar from "@/components/ui/Avatar";
import Table from "@/components/ui/Table";
import Progress from "@/components/ui/Progress";
import AlertDialog from "@/components/ui/AlertDialog";

export default function Products() {
  const tableData = [
    {
      Invoice: "INV-001",
      Client: "John Doe",
      Amount: "$200",
      Date: "12-02-2021",
      Status: "Paid",
    },
    {
      Invoice: "INV-002",
      Client: "Jane Doe",
      Amount: "$300",
      Date: "12-02-2021",
      Status: "Paid",
    },
    {
      Invoice: "INV-003",
      Client: "John Doe",
      Amount: "$200",
      Date: "12-02-2021",
      Status: "Paid",
    },
    {
      Invoice: "INV-004",
      Client: "Jane Doe",
      Amount: "$300",
      Date: "12-02-2021",
      Status: "Paid",
    },
    {
      Invoice: "INV-005",
      Client: "John Doe",
      Amount: "$200",
      Date: "12-02-2021",
      Status: "Paid",
    },
    {
      Invoice: "INV-006",
      Client: "Jane Doe",
      Amount: "$300",
      Date: "12-02-2021",
      Status: "Paid",
    },
  ];
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-orange-50 dark:bg-slate-950">
      {/* <div className="relative h-full w-full items-center justify-center">
        <AlertDialog
          title="ERROR"
          Message="You haven't sign-in"
          type="error"
          size="huge"
        />
      </div> */}
      {/* <Progress size="large" progress={100} /> */}
      {/* <Avatar src="/Avatar.png" alt="avatar" size="dwarf" /> */}
      {/* <Table caption="Invoices" data={tableData} /> */}
    </div>
  );
}
