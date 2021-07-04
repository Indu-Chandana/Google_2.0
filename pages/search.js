import Head from "next/head"
import Header from "../components/Header"
function Search() {
    return (
        <div>
            <Head>
              <title> Search Result </title>
              <link rel="icon" href="https://th.bing.com/th/id/R.2a4c3e2eb43e31ab3b340c4c43453f79?rik=vGdBzkj3OKQErA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_99054.png&ehk=SCKFBNbDpVpT%2fceTXRpSG6oZJurvp%2f2UW1gE%2faKmiv8%3d&risl=&pid=ImgRaw" />
            </Head>  

            {/* header */}
            <Header/>
            {/* result */}
        </div>
    )
}

export default Search
