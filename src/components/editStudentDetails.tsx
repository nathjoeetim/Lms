import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function EditStudentDetails() {
  function submitFormHandeler() {
    // SheetClose();
  }
  return (
    <Sheet>
      <SheetTrigger>Edit Student Details</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription className="flex flex-col items-start justify-start gap-4">
            This action cannot be undone. This will permanently change details
            at the server.
            <div className="flex flex-col items-start justify-start w-full">
              <span className="text-slate-500 font-semibold text-sm">
                old Password
              </span>
              <Input placeholder="1234567890" type="password" />
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <span className="text-slate-500 font-semibold text-sm">
                New Password
              </span>
              <Input placeholder="1234567890" type="password" />
            </div>{" "}
            <div className="flex flex-col items-start justify-start w-full">
              <span className="text-slate-500 font-semibold text-sm">
                Confirm Password
              </span>
              <Input placeholder="1234567890" type="password" />
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <span className="text-slate-500 font-semibold text-sm">
                Phone number{" "}
              </span>
              <Input placeholder="+2348337228272" type="text" />
            </div>
            <SheetFooter>
              <SheetClose onClick={() => submitFormHandeler()}>
                <Button>Submit</Button>
              </SheetClose>
            </SheetFooter>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default EditStudentDetails;
