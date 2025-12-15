import Image from "next/image";
import { Header } from "./src/components/header";

export default function Home() {
  return (
    <>
      <div className="w-full max-w-280 flex flex-col mx-auto pb-12">
        <Header />
        <div className="w-full h-full flex gap-8 items-center justify-center">
          <div className="flex flex-1 h-83.5 relative rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Computer"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-1 h-83.5 flex-col gap-6">
            <h2 className="font-bold text-4xl text-blue-600">Como desenvolver um blog</h2>
            <p className="text-zinc-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus culpa voluptas expedita. Temporibus minus atque nostrum et natus! Cum maiores cupiditate laudantium distinctio voluptas, esse saepe assumenda. Vel, ipsa!</p>
            <div>
              <p className="font-bold text-zinc-900">Pedro Vieira</p>
              <p className="text-zinc-600 text-sm">15-12-2025</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
