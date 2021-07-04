import { MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
function Header() {
    const searchInputRef = useRef();
    const router = useRouter();

    return (
        <header>
            <Image
            src="https://th.bing.com/th/id/R.68069f69f0afa847ac6948f766fe904b?rik=4EYoiK%2fkgmzPzw&riu=http%3a%2f%2fwww.google.com%2flogos%2fdoodles%2f2018%2fsri-lanka-national-day-2018-6344453324275712-2xa.gif&ehk=UeV59dQZaiPPzWqcpOKkeNXYugw4TSZzJFGr5QbEvj0%3d&risl=&pid=ImgRaw"
            height={40}
            width={120}
            className="cursor-pointer"
            onClick={() => router.push('/')}
            />
            <form className="flex border border-gray-200 px-6 py-3 ml-10 mr-5 rounded-full shadow-lg max-w-3xl items-center">
                <input type="text" ref={searchInputRef} className="flex-grow focus:outline-none w-full"/>
                <XIcon
                 className="h-7 text-gray-500 sm:mr-3 cursor-pointer transition duration-100 transform hover:scale-125"
                 onClick={() => (searchInputRef.current.value = "")}
                />
                <MicrophoneIcon className="h-6 hidden mr-3 sm:inline-flex text-blue-500 border-l-2 pl-2 border-gray-300"/>
            </form>
        </header>
    )
}

export default Header