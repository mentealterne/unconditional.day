import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { FeedItem, DefaultService } from "../generated";

const Home: NextPage = () => {
  const [query, setQuery] = useState("");
  const [feeds, setFeeds] = useState<FeedItem[]>([]);
  const [error, setError] = useState("");

  async function getFeed() {
    if (query && event) {
      event.preventDefault();
      try {
        const response = await DefaultService.getV1SearchFeed(query);
        setFeeds(response);
      } catch (e: any) {
        setError(e.message);
        console.log(e);
      }
    }
  }

  return (
    <>
      <Head>
        <title>Unconditional</title>
        <meta name="description" content="Unconditional" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className="header text-center flex flex-col p-0 md:p-20">
          <h1 className="title p-5 md:p-0 text-5xl md:text-8xl font-black">
            Unconditional.
          </h1>
          <div className="flex flex-row justify-center items-center p-0 md:p-3 pb-10 md:pb-0">
            <h2 className="subtitle text-md md:text-xl font-light">
              Give to your think an{" "}
            </h2>
            <a
              className="font-bold text-sm md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 border border-black rounded-lg p-3 block md:inline md:w-auto mx-2"
              href="about"
            >
              Unconditional think
            </a>
          </div>
        </header>
        <form className="md:w-80 mx-auto md:p-0 w-80 mb-10" onSubmit={getFeed}>
          <label
            htmlFor="default-search"
            className="text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <div className="flex justify-center items-center text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                id="default-search"
                className="md:p-4 md:pl-10 pl-5 text-center md:text-start bg-gray-50 w-full h-16 md:h-auto text-md md:text-sm"
                placeholder="Start search..."
                required
              ></input>
              <button
                type="submit"
                className="text-white mr-2 md:h-auto w-2/3 md:w-1/2 bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-md md:text-sm p-2 md:px-4 md:py-2 dark:bg-black dark:hover:bg-black dark:focus:ring-black "
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <main className="m-auto grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center mb-5 md:mb-0 md:pb-10 overflow-y-scroll h-screen md:overflow-y-visible md:h-auto">
          {feeds.map((feed) => (
            <a
              key={feed.link}
              href={feed.link}
              className="article md:m-0 bg-white p-0 md:p-6 block w-5/6 h-max md:h-auto md:w-auto md:max-w-sm rounded-lg border border-black hover:shadow-2xl dark:bg-black dark:border-black dark:hover:bg-black"
            >
              <h6 className="font-extralight text-md md:text-sm md:p-0">
                {feed.source}
              </h6>
              <h5 className="p-2 md:p-2 text-2xl md:text-2xl text-start font-bold tracking-tight text-gray-900 dark:text-white">
                {feed.title}
              </h5>
              <hr />
              <p className="p-2 md:p-2 text-md md:text-base text-justify text-gray-700 dark:text-gray-400">
                {feed.summary}
              </p>
            </a>
          ))}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
