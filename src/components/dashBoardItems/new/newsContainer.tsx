import { Card } from "@/components/ui/card";
import { FaBullhorn } from "react-icons/fa6";

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

import imageNews from "@/assets/news.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type AnouncAliese = {
  header: string;
  image: string;
  content: string;
};

function NewAndEventComponent() {
  return (
    <div className="flex flex-row p-7 box-border justify-evenly w-full">
      <Card className="flex flex-col items-center box-border p-3 gap-4 md:w-[450px] max-xl:w-[500px]  h-[243px]">
        <Card className="flex flex-col items-start p-2 gap-4 max-md:w-[405px] max-xl:w-[450px]  h-[243px] bg-transparent border-none shadow-none">
          <div className="flex flex-row items-center border-b p-2 border-b-slate-400 pb-2 item-center justify-start gap-5 w-full">
            <FaBullhorn size={18} />
            <h5 className="font-bold text-[1.5rem]">News And Update</h5>
          </div>
          <Item />
        </Card>
      </Card>
    </div>
  );
}

export default NewAndEventComponent;

export function Item() {
  const [carousels, Setcarouseld] = useState<AnouncAliese[]>([
    {
      image: imageNews.src,
      content:
        "This is to bring to the notice of the public that the admission Portal will be open and mass admission will be given based on new school policy ",
      header: "Admission Open For Next Session",
    },
    {
      image: imageNews.src,
      content:
        "This is to bring to the notice of the public that the resumption date has been moved to the 20th of September  ",
      header: "School Reopening",
    },
  ]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full px-4  flex flex-col"
    >
      <CarouselContent className="w-[100%] ">
        {carousels.map((element, index) => {
          return (
            <CarouselItem key={index}>
              <div className="flex flex-row w-[100%] gap-2">
                <Image
                  src={element.image}
                  alt="Anonuncement image"
                  width={150}
                  height={230}
                  className="border"
                  style={{ borderRadius: "10px", overflow: "hidden" }}
                />
                <div className="flex flex-col gap-1 w-[70%] h-[120px]">
                  <h5 className="flex text-slate-700 text-[.8rem] font-bold">
                    {element.header}
                  </h5>
                  <p className="max-lines-3 h-[3.7rem] overflow-hidden overflow-ellipsis text-slate-700 text-[.7rem]">
                    {element.content}
                  </p>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="w-24">Show More</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>{element.header}</AlertDialogTitle>
                        <AlertDialogDescription>
                          {element.content}
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Close</AlertDialogCancel>
                        {/* <AlertDialogAction>Continue</AlertDialogAction> */}
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div>
        <CarouselNext />
        <CarouselPrevious />
      </div>
    </Carousel>
  );
}
// alertContent={element}
