import Image from "next/image";
import classes from "./page.module.css";

export default function MealDetailsPage(){
    return <>
    <header className={classes.header}>
        <div className={classes.image}>
            <Image fill/>
        </div>
        <div className={classes.headerText}>
        <h1>Title</h1>
        <p className={classes.creator}>By <a href={`mailto:${'EMAIL'}`}>Name</a></p>
        </div>
    </header>
    <main></main>
    </>
}