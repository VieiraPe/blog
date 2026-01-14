import Image from "next/image";
import { Header } from "../src/header"
import Link from "next/link";


export default function Post() {
    return (
        <div className="w-full max-w-280 flex flex-col mx-auto pb-12 px-4">
            <Header />
            <Link href="/" className="flex w-full max-w-fit font-bold text-zinc-900 hover:text-zinc-600">
                Voltar
            </Link>

            {/* Banner principal */}
            <div className="w-full h-full flex flex-col mt-8">
                <div className="flex w-full h-56 sm:h-80 lg:h-95.5 relative rounded-2xl overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Computer"
                        fill={true}
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
            <div className="flex w-full flex-col mt-4 sm:mt-8">
                <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center sm:text-left text-blue-600">Como desenvolver um blog</h2>
                <div>
                    <p className="font-bold text-zinc-900">Pedro Vieira</p>
                    <p className="text-zinc-600 text-sm">15 de dezembro 2025</p>
                </div>
                <p className="text-zinc-600 text-sm sm:text-base text-justify lg:text-left mt-4 sm:mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus culpa voluptas expedita. Temporibus minus atque nostrum et natus! Cum maiores cupiditate laudantium distinctio voluptas, esse saepe assumenda. Vel, ipsa! Temporibus minus atque nostrum et natus! Cum maiores cupiditate laudantium distinctio voluptas, esse saepe assumenda. Vel, ipsa!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus culpa voluptas expedita. Temporibus minus atque nostrum et natus! Cum maiores cupiditate laudantium distinctio voluptas, esse saepe assumenda. Vel, ipsa! Temporibus minus atque nostrum et natus! Cum maiores cupiditate laudantium distinctio voluptas, esse saepe assumenda. Vel, ipsa!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus culpa voluptas expedita. Temporibus minus atque nostrum et natus! Cum maiores cupiditate laudantium distinctio voluptas, esse saepe assumenda. Vel, ipsa! Temporibus minus atque nostrum et natus! Cum maiores cupiditate laudantium distinctio voluptas, esse saepe assumenda. Vel, ipsa!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus culpa voluptas expedita. Temporibus minus atque nostrum et natus! Cum maiores cupiditate laudantium distinctio voluptas, esse saepe assumenda. Vel, ipsa! Temporibus minus atque nostrum et natus! Cum maiores cupiditate laudantium distinctio voluptas, esse saepe assumenda. Vel, ipsa!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus culpa voluptas expedita. Temporibus minus atque nostrum et natus! Cum maiores cupiditate laudantium distinctio voluptas, esse saepe assumenda. Vel, ipsa! Temporibus minus atque nostrum et natus! Cum maiores cupiditate laudantium distinctio voluptas, esse saepe assumenda. Vel, ipsa!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus culpa voluptas expedita. Temporibus minus atque nostrum et natus! Cum maiores cupiditate laudantium distinctio voluptas, esse saepe assumenda. Vel, ipsa! Temporibus minus atque nostrum et natus! Cum maiores cupiditate laudantium distinctio voluptas, esse saepe assumenda. Vel, ipsa!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus culpa voluptas expedita. Temporibus minus atque nostrum et natus! Cum maiores cupiditate laudantium distinctio voluptas, esse saepe assumenda. Vel, ipsa! Temporibus minus atque nostrum et natus! Cum maiores cupiditate laudantium distinctio voluptas, esse saepe assumenda. Vel, ipsa!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus culpa voluptas expedita. Temporibus minus atque nostrum et natus! Cum maiores cupiditate laudantium distinctio voluptas, esse saepe assumenda. Vel, ipsa! Temporibus minus atque nostrum et natus! Cum maiores cupiditate laudantium distinctio voluptas, esse saepe assumenda. Vel, ipsa!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus culpa voluptas expedita. Temporibus minus atque nostrum et natus! Cum maiores cupiditate laudantium distinctio voluptas, esse saepe assumenda. Vel, ipsa! Temporibus minus atque nostrum et natus! Cum maiores cupiditate laudantium distinctio voluptas, esse saepe assumenda. Vel, ipsa!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus culpa voluptas expedita. Temporibus minus atque nostrum et natus! Cum maiores cupiditate laudantium distinctio voluptas, esse saepe assumenda. Vel, ipsa! Temporibus minus atque nostrum et natus! Cum maiores cupiditate laudantium distinctio voluptas, esse saepe assumenda. Vel, ipsa!</p>
            </div>
        </div>
    )
}