"use client";

import { DUMMY_NEWS } from '@/dummy-news';
import NewsList from '@/components/news-list';
import { useEffect, useState } from 'react';

export default function NewsPage() {
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState();
  const [news,setNews]=useState();


  useEffect(()=>{
    async function fetchNews(){
      setLoading(true);
      const response=await fetch('http://localhost:8080');

      if(!response.ok){
        setError('Failed to fetch news');
        setLoading(false);
      }

      const news=await response.json();
      setLoading(false);
      setNews(news);
    }
    fetchNews();
  },[]);


  if(loading){
    return <p>loading....</p>;
  }

  if(error){
    return <p>{error}</p>;
  }

  let newsContent;

  if(news){
    newsContent=<NewsList news={news} />
  }

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
