import Image from "next/image"
import Link from "next/link"

export default function CardPost() {
    return (
        <Link href="/post" className="w-full max-w-88 h-full flex flex-col items-center justify-between gap-4 hover:brightness-75 transition-all">
            <div className="flex w-full h-58.5 relative rounded-2xl overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Computer"
                    fill={true}
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className="flex w-full flex-1 flex-col justify-between gap-2">
                <h2 className="font-bold text-2xl text-blue-600">Como desenvolver um blog</h2>
                <p className="text-zinc-600 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam accusamus culpa voluptas expedita. Temporibus minus atque nostrum et natus! Cum maiores cupiditate laudantium distinctio voluptas, esse saepe assumenda. Vel, ipsa!</p>
                <div>
                    <p className="font-bold text-zinc-900">Pedro Vieira</p>
                    <p className="text-zinc-600 text-sm">15-12-2025</p>
                </div>
            </div>
        </Link>
    )
}