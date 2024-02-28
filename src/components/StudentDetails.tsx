import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FindStudentInDartment } from "@/utils/types";

function DisplayUserDetailsHandler({
  studentData,
}: {
  studentData: FindStudentInDartment;
}) {
  function onGetStudentDetails() {
    // Implement functionality to fetch and display student details based on studentData
    console.log("Student details:", studentData.courses);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className="h-10 px-2 py-1 bg-black text-secondary-foreground  border border-input inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white"
        onClick={onGetStudentDetails}
      >
        View Details
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex-row items-center w-full justify-center font-semibold text-slate-500 text-lg">
            {studentData.user} {/* Replace with actual student name */}
          </AlertDialogTitle>
          <AlertDialogDescription>
            <span className="flex flex-col items-start justify-start w-full p-2 gap-4 ">
              <span className="flex flex-row items-center gap-5 ">
                <Avatar className="h-14 w-14">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  {/* Replace with actual student avatar */}
                  <AvatarFallback>CS</AvatarFallback>{" "}
                  {/* Replace with actual student initials */}
                </Avatar>
                <span className="flex-row items-center w-full justify-center font-semibold text-slate-500 text-lg">
                  {studentData.matric_no}{" "}
                  {/* Replace with actual student registration number */}
                </span>
              </span>
              <span className="flex flex-col gap-2 w-full">
                <span className="flex flex-col items-start justify-start font-bold text-sm gap-2">
                  <span>{studentData.student_department}</span>{" "}
                  {/* Replace with actual student department */}
                  <span>Semester: Second</span>{" "}
                  {/* Replace with actual student current semester */}
                  <span>{`Level: ${studentData.level}`}</span>{" "}
                  {/* Replace with actual student level */}
                </span>
                <span className="flex-row items-center w-full justify-center ">
                  {studentData.courses.length > 0 ? (
                    <span className="font-semibold text-slate-500 text-sm">
                      Introduction to Basics {/* Replace with actual course */}
                    </span>
                  ) : (
                    <span className="underline">
                      No Registered Course For The Semester
                    </span>
                  )}
                </span>
              </span>
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Hide</AlertDialogCancel>
          <AlertDialogAction>Edit Student Details</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DisplayUserDetailsHandler;
