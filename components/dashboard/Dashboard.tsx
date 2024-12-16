import Greeting from "../Greeting";

import Cards from "./Cards";
import Compliance from "./Compliance";

import Documents from "./Documents";

import Task from "./Task";

export default function Dashboard() {
  return (
    <div className="py-10 px-6 w-full gap-8 flex flex-col">
      <section className="flex flex-row w-full gap-3  h-32">
        <Greeting />
        <span className="w-[1px] bg-stroke "></span>

        <Cards />
      </section>
      <section className="flex gap-6">
        <Documents />
        <Compliance />
        <Task />
      </section>
    </div>
  );
}
