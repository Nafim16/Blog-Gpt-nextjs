import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const { user } = useUser();
  console.log('User: ', user);

  return <div>
    <h1>TEST NEXT JS WITH GPT</h1>

    <div>
      {user ?
        <>
          <div>
            <Image src={user.picture} alt={user.name} height={50} width={50}></Image>
            <h2>{user.email}</h2>
            <div>
              <Link href="/api/auth/logout">Logout</Link>
            </div>
          </div>
        </> : <>
          <Link href="/api/auth/login">Login</Link>
        </>}

    </div>
  </div>;
}
