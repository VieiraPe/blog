import Image from "next/image";

import {Header} from "./src/components/header"
import CardPost from "./src/components/CardPost"
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="w-full max-w-280 flex flex-col mx-auto pb-12 px-4">
        <Header />
        {/* Banner principal */}
        <Link href="/post" className="w-full h-full flex gap-4 lg:gap-8 flex-col sm:flex-row items-center justify-center hover:brightness-75 transition-all">
          <div className="flex flex-1 w-full h-full min-h-60 md:h-83.5 relative rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Computer"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-1 h-full flex-col gap-3 lg:gap-6">
            <h2 className="font-bold text-3xl md:text-4xl text-blue-600 text-center sm:text-left">Como desenvolver um blog</h2>
            <p className="text-zinc-600 text-sm md:text-base text-justify lg:text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus culpa voluptas expedita. Temporibus minus atque nostrum et natus! Cum maiores cupiditate laudantium distinctio voluptas, esse saepe assumenda. Vel, ipsa! </p>
            <div>
              <p className="font-bold text-zinc-900 text-sm md:text-base">Pedro Vieira</p>
              <p className="text-zinc-600 text-xs md:text-sm">15-12-2025</p>
            </div>
          </div>
        </Link>
        <div className="flex flex-col items-center sm:grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 mt-12">
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
        </div>

      </div>
    </>
  );
}
