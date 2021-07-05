import {ChevronRightIcon, ChevronLeftIcon} from '@heroicons/react/solid'
import Link from 'next/link'
import { useRouter } from "next/router";

function PaginationButtons() {

    const router = useRouter();
    const startIndex = Number(router.query.start) || 0;
    return (
        <div className="flex justify-between text-blue-700 max-w-lg mb-10">
            {startIndex >= 10 && (
                //{startIndex - 10} is use to pass the link 10 to 0, it help to move severel pages
                <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                    <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
                        <ChevronLeftIcon className="h-5"/>
                        <p>Previous</p>
                    </div>
                </Link>
            )}
            {/* {startIndex - 10} is use to pass the link 10 to 0, it help to move severel pages */}
            <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
                <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
                    <ChevronRightIcon className="h-5"/>
                    <p>Right</p>
                </div>
            </Link>
        </div>
    )
}

export default PaginationButtons
