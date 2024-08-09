interface TableProps {
  caption?: string;
  data: { invoice: string; status: string; method: string; amount: number }[];
}

// ARRAY.map(FUNCTION)

export default function Table({ data, caption }: TableProps) {
  return (
    <div>
      <table className="text-slate-950 shadow-xl dark:text-slate-50">
        <caption className="pb-4 text-xl font-bold text-orange-500 dark:text-orange-500">
          {caption}
        </caption>
        <div className="border-1 border-orange-500 dark:border-orange-500">
          <div className="dark:border-t-slate-9500 flex items-center justify-center border-b-2 border-l-2 border-r-2 border-t-2 border-b-slate-950 border-l-orange-500 border-r-orange-500 border-t-slate-950 bg-orange-200 px-5 py-4 hover:bg-orange-300/70 dark:border-b-slate-950 dark:border-l-orange-500 dark:border-r-orange-500 dark:bg-slate-800 dark:hover:bg-slate-600/60">
            <thead>
              <tr className="flex items-center justify-center gap-12">
                <th>Invoice</th>
                <th>Status</th>
                <th>Method</th>
                <th>Amount</th>
              </tr>
            </thead>
          </div>
          {data.map(function (item, index) {
            return (
              <div
                key={index}
                className="flex items-center justify-center border-b-2 border-l-2 border-r-2 border-b-slate-950 border-l-orange-500 border-r-orange-500 bg-orange-100 py-2 hover:bg-orange-100/30 dark:border-b-slate-950 dark:border-l-orange-500 dark:border-r-orange-500 dark:bg-slate-600 dark:hover:bg-slate-500/80"
              >
                <tbody>
                  <tr className="flex items-center justify-center gap-16 py-2">
                    <td>{item.invoice}</td>
                    <td>{item.status}</td>
                    <td>{item.method}</td>
                    <td>{item.amount}</td>
                  </tr>
                </tbody>
              </div>
            );
          })}
        </div>
      </table>
    </div>
  );
}
