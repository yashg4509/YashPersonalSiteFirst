import Head from "next/head";
import Image from 'next/image'
import Header from "@/components/Header";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="bg-[rgb(98,64,48,255)] text-white h-screen snap-y snap-mandatory 
    overflow-scroll z-0">
      {/* <Head> */}
        <title>Yash Gupta</title>
      {/* </Head> */}

    <Header />

    { /* Banner */}
    <section id="banner" className="snap-center">
      <Banner />

    </section>

    { /* About */ }


    {/* Experience */}


    { /* Skills */ }


    {/* Projects */}


    { /* Contact Me */ }


    </div>

  )
}
