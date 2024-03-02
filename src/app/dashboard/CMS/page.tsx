import SubTitleComponent from "@/components/subTitle";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function EditSmsContentComponent() {
  return (
    <div className="flex flex-col gap-4 overflow-y-scroll overflow-x-hidden custom-scrollbar">
      <SubTitleComponent
        pageIdentifier=" > Web content"
        section="2023/2024"
        semester="First Semester "
        link="/dashboard"
      />
      <Card className="flex flex-col justify-start items-start gap-1  w-[97%] mx-auto mb-[20px] transition-height duration-300">
        <div className="flex flex-col items-start justify-start w-full p-5 text-slate-600 font-bold text-lg px-2">
          Edit Content
        </div>
        <div className="flex flex-col w-full gap-0">
          <div className="flex flex-col w-[280px] p-5">
            <h4 className="text-slate-500 text-sm font-semibold">
              School Name
            </h4>
            <Textarea placeholder="St. David University" disabled />
          </div>
          <div className="flex flex-row items-center justify-start gap-2">
            <div className="flex flex-col w-[180px] p-5">
              <h4 className="text-slate-500 text-sm font-semibold">
                Contact Number
              </h4>
              <Textarea placeholder="+234811344579" />
            </div>
            <div className="flex flex-col w-[270px] p-5">
              <h4 className="text-slate-500 text-sm font-semibold">
                Facebook Handeler
              </h4>
              <Textarea placeholder="Input Facebook Link" />
            </div>
            <div className="flex flex-col w-[270px] p-5">
              <h4 className="text-slate-500 text-sm font-semibold">
                X Account Handeler
              </h4>
              <Textarea placeholder="Input Link To Your X Account" />
            </div>
          </div>
          <div className="flex flex-col w-[80%] p-5">
            <h4 className="text-slate-500 text-sm font-semibold">
              Edit Welcome Message
            </h4>
            <Textarea placeholder="Type your welcome message here." />
          </div>
          <div className="flex flex-col w-[80%] p-5">
            <h4 className="text-slate-500 text-sm font-semibold">
              Edit About Us
            </h4>
            <Textarea placeholder="Type your about message here." />
          </div>
          <div className="flex flex-col w-[80%] p-5">
            <h4 className="text-slate-500 text-sm font-semibold">
              Edit Why us
            </h4>
            <Textarea placeholder="Type your why us message here." />
          </div>
        </div>
        <div className="flex flex-row items-center justify-end w-full p-5">
          <Button>SUBMIT</Button>
        </div>
      </Card>
    </div>
  );
}

export default EditSmsContentComponent;
