import ReactLoading from "react-loading";
import { useEffect, useState } from "react";
import Head from "next/head";

import { NewsCard } from "@/components";

import styles from "./home.module.scss";

export default function Home() {
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=3&page=1&apiKey=${process.env.NEXT_PUBLIC_GOOGLE_NEWS_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
        setLoading(false);
      })
      .catch((err) => {
        console.log({ err });
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Google News Meiuca</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.home}>
        {loading ? (
          <ReactLoading type="bubbles" color="#000" />
        ) : (
          <div className={styles.container}>
            {news.map((article, i) => {
              return <NewsCard key={`article_${i}`} article={article} />;
            })}
          </div>
        )}
      </main>
    </>
  );
}
