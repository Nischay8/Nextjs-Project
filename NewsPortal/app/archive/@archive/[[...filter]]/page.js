import NewsList from "@/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";

export default function FilterNewsPage({params}){
    const filter=params.filter;

    console.log(filter);

    const selectedYear=filter?.[0];
    const seletedMonths=filter?.[1];


    let news;
    let links=getAvailableNewsYears();

    if(selectedYear && !seletedMonths){
        news=getNewsForYear(selectedYear);
        links=getAvailableNewsMonths(selectedYear);
    }

    if(selectedYear && seletedMonths){
        

    }

    let newsContent=<p>No News Found for the selected period.</p>

    if(news && news.length >0){
        newsContent=<NewsList news={news} />
    }

    
    return (
        <>
    <header id="archive-header">
        <nav>
            <ul>
            {links.map((link)=>{
                const href=selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link};`
               
              return  (
           
            <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
            </li>
              );    
        })} 
            </ul>
        </nav>
    </header>
    {newsContent}
        </>
    )
    // const news=getNewsForYear(filter);
    // return <NewsList news={news} />
}