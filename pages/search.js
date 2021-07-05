import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResult from "../components/SearchResult";
import Response from '../Response';
// import {API_KEY, CONTEXT_KEY} from "../key";

const API_KEY = process.env.API_KEY;
const CONTEXT_KEY = process.env.CONTEXT_KEY;

function Search({ results }) {
    const router = useRouter();
    console.log(results);

    return (
        <div>
            <Head>
              <title>{router.query.term} - Google Search</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>  

            {/* header */}
            <Header/>

            {/* result */}
            <SearchResult results={results}/>
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const useDummyData = true; 
    const startIndex = context.query.start || "0";

    const data = useDummyData
     ? Response
     : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
    ).then(response => response.json());

    //After the server has rendered... Pass the results to the client
    return {
        props: {
            results: data,
        },
    };
}
