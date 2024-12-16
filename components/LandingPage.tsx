import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import landing from "../public/landing.svg";
import { Folder, CheckSquare, FileText } from "lucide-react";
import diamond from "../public/diamond.svg";
import diamondleft from "../public/diamondleft.svg";
import feat1 from "../public/feat1.svg";
import feat2 from "../public/feat2.svg";
import feat3 from "../public/feat3.svg";
import main2 from "../public/main2.svg";
import pic1 from "../public/pic1.svg";
import pic2 from "../public/pic2.svg";
import pic3 from '../public/pic3.svg'
import pic4 from '../public/pic4.svg'
import pic5 from '../public/pic5.svg'
import bi_stars from "../public/bi_stars.svg";
import main from "../public/main.svg";
import main3 from '../public/main3.svg'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { ReactComponent } from "./Growth";
import Footer from "./wrapper/Footer";
const FeatureItem = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="flex items-start space-x-3 mb-6">
    <span className="material-symbols-rounded size-6 text-main">{icon}</span>

    <div>
      <h3 className="text-lg font-semibold text-indigo-900 mb-1">{title}</h3>
      <p className="text-sm text-indigo-700">{description}</p>
    </div>
  </div>
);
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F4F4FB]">
      <div className="flex flex-col items-center justify-center text-center">
        <div className=" w-7/12 mx-auto mt-12 font-bold gap-6 z-[5] flex flex-col  text-slate-800">
          <div className="bg-gradient-to-r from-[#777BEA] w-fit flex gap-2 py-[6px] pl-3 pr-4 mx-auto rounded-full font-semibold text-white to-[#9296F9]">
            <Image src={bi_stars} alt="" />
            Streamline Your Legal Journey
          </div>
          <p className="text-[4rem] leading-none ">
            {" "}
            Redefine your <span className="text-indigo-400">
              Legal process
            </span>{" "}
            with streamlined solutions
          </p>{" "}
          <section className="w-8/12  mx-auto  font-medium text-[22px] ">
            Experience seamless, AI-powered solutions for every step of your
            legal process
          </section>
          <section className="">
            <Button className="w-fit mx-auto">Get Started</Button>
          </section>
        </div>
        <section className="my-20 flex flex-col">
          <div className="  blur-[100px] absolute z-[1] mx-auto rounded-full bg-indigo-400 mt-16 w-[900px] h-[570px] ml-20 "></div>
          <Image src={main3} alt="" className=" mx-auto z-[2]" />
        </section>

        <section className="p-24 bg-[#ECECFA] flex flex-col gap-20 justify-center items-center w-full">
          <section className="flex flex-col gap-8 w-full">
            <p className="font-bold text-indigo-400">HOW WE CAN HELP</p>
            <span className="flex flex-col gap-4">
              <p className="font-bold text-4xl text-main">
                Transform Your Legal Operations
              </p>
              <p className="text-lg font-medium w-5/12 mx-auto text-textlight">
                From Document Storage to Seamless Collaboration, CONQR Empowers
                Your Legal Practice Every Step of the Way
              </p>
            </span>
          </section>
          <section className="mx-auto gap-20 flex flex-row">
            <Image src={main2} alt="" />
            <section>
              <Card className="w-72 bg-transparent shadow-none border-none text-left">
                <CardContent className="p-6">
                  <FeatureItem
                    icon="folder_open"
                    title="Document Storage"
                    description="Securely store, organize, and access all your legal documents in one centralized location."
                  />
                  <FeatureItem
                    icon="news"
                    title="Task Management"
                    description="Automate and manage routine legal tasks with ease, ensuring nothing falls through the cracks."
                  />
                  <FeatureItem
                    icon="add_task"
                    title="Conflict & Summary"
                    description="Identify conflicts and get concise AI-generated summaries for quick decision-making."
                  />
                </CardContent>
              </Card>
            </section>
          </section>
        </section>
        <section className="p-24 bg-[#f4f4fb] flex flex-col gap-20 justify-center items-center w-full">
          <section className="flex flex-col gap-8 w-full">
            <p className="font-bold text-indigo-400">WHAT WE OFFER</p>
            <span className="flex flex-col gap-4">
              <p className="font-bold text-4xl text-main">
                Transform Your Legal Operations
              </p>
              <p className="text-lg font-medium w-5/12 mx-auto text-textlight">
                From Document Storage to Seamless Collaboration, CONQR Empowers
                Your Legal Practice Every Step of the Way
              </p>
            </span>
          </section>
          <section className="flex flex-col gap-6">
            <section className="flex flex-row gap-6">
              <section className="relative">
                <Image
                  src={pic1}
                  alt=""
                  layout="responsive"
                  className="w-full z-[1] h-auto"
                />
                <span className="absolute left-0 text-left p-10 bottom-0 z-[2]">
                  <p className="font-semibold text-lg text-main">
                    Streamline Your Funding Journey
                  </p>
                  <p className="font-normal text-lg text-textlight">
                    Navigate through every step of funding rounds effortlessly,
                    from key terms to board resolutions, with our intuitive
                    wizard.
                  </p>
                </span>
              </section>
              <section className="relative">
                <Image
                  src={pic2}
                  alt=""
                  layout="responsive"
                  className="w-full z-[1] h-auto"
                />
                <span className="absolute left-0 text-left p-10 bottom-0 z-[2]">
                  <p className="font-semibold text-lg text-main">
                    Draft, Send, and Organize with Ease
                  </p>
                  <p className="font-normal text-lg text-textlight">
                    Create contracts using AI, manage documents, and keep
                    everything organized in one place, hassle-free
                  </p>
                </span>
              </section>
            </section>
            <section className="flex flex-row gap-6">
            <section className="relative">
                <Image
                  src={pic3}
                  alt=""
                  layout="responsive"
                  className="w-full z-[1] h-auto"
                />
                <span className="absolute left-0 text-left p-10 bottom-0 z-[2]">
                  <p className="font-semibold text-lg text-main">
                  Resolve Conflicts Instantly
                  </p>
                  <p className="font-normal text-lg text-textlight">
                  Identify and resolve conflicts between documents with AI-driven suggestions, ensuring smooth legal processes
                  </p>
                </span>
              </section>
              <section className="relative">
                <Image
                  src={pic4}
                  alt=""
                  layout="responsive"
                  className="w-full z-[1] h-auto"
                />
                <span className="absolute left-0 text-left p-10 bottom-0 z-[2]">
                  <p className="font-semibold text-lg text-main">
                  Get Smart Reviews on the Go
                  </p>
                  <p className="font-normal text-lg text-textlight">
                  Leverage AI to review contracts and documents, making your legal tasks quicker and more accurate.
                  </p>
                </span>
              </section>
              <section className="relative">
                <Image
                  src={pic5}
                  alt=""
                  layout="responsive"
                  className="w-full z-[1] h-auto"
                />
                <span className="absolute left-0 text-left p-10 bottom-0 z-[2]">
                  <p className="font-semibold text-lg text-main">
                  Stay Organized and On Track
                  </p>
                  <p className="font-normal text-lg text-textlight">
                  Create and manage tasks directly on your dashboard, ensuring nothing falls through the cracks.
                  </p>
                </span>
              </section>
            </section>
          </section>
        </section>
        <section className="w-full max-w-screen-2xl h-96 gap-5 flex flex-col justify-center items-center bg-indigo-400">
          <p className="text-6xl text-white font-bold">Accelerate Growth</p>
          <p className="text-base font-medium text-white/70 w-3/12">
            Access scalable, rapid Legal and Investor management tailored for
            startups
          </p>
          <Button>Get Started</Button>
        </section>
      </div>
      <Footer />
    </div>
  );
}
