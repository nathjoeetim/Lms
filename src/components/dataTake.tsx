import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
type TableAlises = {
  regNumber: string | any;
  semester: string;
  section: string;
  applicationReason: string | boolean;
  amount: string | number | any;
};

type TableHeaderAlises = {
  RegNumber: string;
  semester: string;
  section: string;
  amount: string;
  purpose: string;
};
function DataTable({
  header,
  tableContent: tableData,
}: {
  header: TableHeaderAlises;
  tableContent: TableAlises[];
}) {
  return (
    <Table>
      {/* <TableCaption>A list of applications.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">{header.RegNumber}</TableHead>
          <TableHead>{header.semester}</TableHead>
          <TableHead>{header.section}</TableHead>
          <TableHead>{header.purpose}</TableHead>
          <TableHead className="text-right">{header.amount}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((element, index) => {
          return (
            <TableRow key={index}>
              <TableCell className="font-medium">{element.regNumber}</TableCell>
              <TableCell>{element.semester}</TableCell>
              <TableCell>{element.section}</TableCell>
              <TableCell>{element.applicationReason}</TableCell>
              <TableCell className="text-right">{element.amount}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default DataTable;
