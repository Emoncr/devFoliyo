import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const Modal = ({
  children,
  element,
  width,
}: {
  children: React.ReactNode;
  element: React.ReactNode;
  width?: string;
}) => {
  return (
    <>
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className={`${width} overflow-y-scroll h-[80vh]`}>
          {element}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Modal;
