
import React from "react";
import { Button } from "../ui/button";
import FileViewer from "./FileViewer";
import AddDocumentDialog from "../create/AddDocumentDialog";
const Alldoc = () => {

  return (
    <>
      <div className="flex flex-row  md:flex-row mb-5 px-6 pt-12 justify-between w-full">
        <section className="flex gap-5 flex-col">
          <p className="text-3xl text-slate-800 font-semibold">All Documents</p>
        </section>
        <section className="flex flex-row gap-2">
          <Button variant="outline" className="text-base text-slate-600 gap-2 ">
            <span className="material-symbols-rounded">task</span>
            Document
          </Button>
          <Button variant="outline" className="text-base text-slate-600 gap-2 ">
            <span className="material-symbols-rounded">
              quick_reference_all
            </span>
            Conflict check
          </Button>
          <Button variant="outline" className="text-base text-slate-600 gap-2 ">
            <span className="material-symbols-rounded">tab_group</span>
            Compare
          </Button>
          <AddDocumentDialog/>
        </section>
      </div>
     <FileViewer/>
    </>
  );
};

export default Alldoc;
