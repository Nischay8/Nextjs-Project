import sql from "better-sqlite3";

const db=sql('meals.db');

export async function getMeals(){
    await new Promise((resolve)=>setTimeout(resolve,5000));

    // throw new Error("Loading meals Failed");
    return db.prepare('SELECT * FROM meals').all();
}


export  function getMeal(slug) {
    // await new Promise((resolve)=>setTimeout(resolve,5000));
    return db.prepare('SELECT * FROM meals where slug= ?').get(slug);
}