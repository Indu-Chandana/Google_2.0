import PaginationButtons from "./PaginationButtons"
function SearchResult({ results }) {
    return (
        <div className=" mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className=" text-gray-700 text-md mt-3 mb-5"> About {results.searchInformation?.formattedTotalResults} results ({results.searchInformation?.formattedSearchTime} seconds)</p>

            {results.items?.map((result) => (
                <div 
                key={result.link}
                className=" max-w-xl mb-3 ">
                    <div className="group">
                        <a href={result.link} className=" text-sm group">{result.formattedUrl}</a>
                        <a href={result.link} className=" trancate text-xl text-blue-800 font-medium group-hover:underline"> 
                            <p>{result.title}</p>
                        </a>
                    </div>

                    <p className=" line-clamp-2">{result.snippet}</p>
                </div>
            ))}

            <PaginationButtons/>
        </div>
    )
}

export default SearchResult
