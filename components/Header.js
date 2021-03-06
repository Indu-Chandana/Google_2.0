import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
import { signIn, signOut, useSession } from 'next-auth/client';
function Header() {
    const searchInputRef = useRef();
    const router = useRouter();
    const [session] = useSession();

    const search = (e) => {
        e.preventDefault();

        const term = searchInputRef.current.value;

        if(!term) return;
        router.push(`/search?term=${term}`);

        //inside of result in term, acess by search.js. header.js is child component of search.js
    }

    return (
        <header className=" sticky bg-white top-0">
            <div className="flex items-center w-full p-6">
                <Image
                src="https://th.bing.com/th/id/R.68069f69f0afa847ac6948f766fe904b?rik=4EYoiK%2fkgmzPzw&riu=http%3a%2f%2fwww.google.com%2flogos%2fdoodles%2f2018%2fsri-lanka-national-day-2018-6344453324275712-2xa.gif&ehk=UeV59dQZaiPPzWqcpOKkeNXYugw4TSZzJFGr5QbEvj0%3d&risl=&pid=ImgRaw"
                height={40}
                width={120}
                className="cursor-pointer"
                onClick={() => router.push('/')}
                />
                <form className="flex flex-grow border border-gray-200 px-6 py-3 ml-10 mr-5 rounded-full shadow-lg max-w-3xl items-center">
                    <input type="text" ref={searchInputRef} className="flex-grow focus:outline-none w-full" placeholder={router.query.term}/>
                    <XIcon
                    className="h-7 text-gray-500 sm:mr-3 cursor-pointer transition duration-100 transform hover:scale-125"
                    onClick={() => (searchInputRef.current.value = "")}
                    />
                    <MicrophoneIcon className="h-6 hidden mr-3 sm:inline-flex text-blue-500 border-l-2 pl-2 border-gray-300"/>
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"/>
                    <button onClick={search} hidden type="submit">submit</button>
                </form>

                <div onClick={!session? signIn : signOut}>
                    {session ? <Image src={session.user.image} width={40} height={40} className="rounded-full cursor-pointer"/> : <button  className=" bg-gray-300 p-2 rounded-lg text-gray-600 hover:underline"> Sign In </button>}
                </div>

                {/* <Avatar 
                url={"https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"}
                className="ml-auto"
                /> */}
            </div>
            
            {/* headerOptions */}
            <HeaderOptions/>
        </header>
    )
}

export default Header
