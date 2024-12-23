import NewsList from "@/components/news-list";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";

export default function FilterNewsPage({params}){
    const filter=params.filter;

    console.log(filter);

    const selectedYear=filter?.[0];
    const seletedMonths=filter?.[1];


    let news;

    if(selectedYear && !seletedMonths){
        news=getNewsForYear(selectedYear);
    }

    let newsContent=<p>No News Found for the selected period.</p>

    if(news && news.length >0){
        newsContent=<NewsList news={news} />
    }

    const links=getAvailableNewsYears();
    return (
        <>
    <header id="archive-header">
        <nav>
            <ul>
            {links.map(link=><li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
            </li>)} 
            </ul>
        </nav>
    </header>
    {newsContent}
        </>
    )
    // const news=getNewsForYear(filter);
    // return <NewsList news={news} />
}