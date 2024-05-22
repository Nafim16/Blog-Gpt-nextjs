import { useUser } from "@auth0/nextjs-auth0/client";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image"
import Link from "next/link"
import { Logo } from "../Logo";

export const AppLayout = ({ children }) => {
    const { user } = useUser();

    return (
        <div className="flex flex-row h-screen max-h-screen">
            <div className="flex flex-col text-white overflow-hidden basis-1/4 bg-slate-700">
                <div className="px-2">
                    <Logo />
                    <Link href='/post/new' className="bg-green-500 tracking-wider w-full text-center text-white font-bold cursor-pointer uppercase px-4 py-2 rounded-md hover:bg-green-600 transition-colors block">
                        New Post
                    </Link>
                    <Link href='/token-topup' className="block mt-2 text-center">
                        <FontAwesomeIcon icon={faCoins} className="text-orange-400" />
                        <span className="pl-1">0 tokens available</span>
                    </Link>
                </div>
                <div className="flex-1 overflow-auto">
                    list of posts
                </div>

                <div className="flex items-center gap-2 border-t border-t-black/50 h-20 px-2">
                    {user ?
                        <>
                            <div className="min-w-[50px]">
                                <Image src={user.picture} alt={user.name} height={50} width={50} className="rounded-full" />
                            </div>
                            <div className="flex-1">
                                <div className="font-bold">{user.email}</div>
                                <Link href="/api/auth/logout" className="text-sm hover:text-blue-500">Logout</Link>
                            </div>

                        </> : <>
                            <Link href="/api/auth/login">Login</Link>
                        </>}
                </div>
            </div>

            <div className="basis-3/4 bg-slate-300">{children}</div>
        </div>
    )
}