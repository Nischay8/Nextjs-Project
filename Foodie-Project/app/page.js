import Link from "next/link";

import clasees from "./page.module.css";

export default function Home() {
  return (
    <>
    <header className={clasees.header}>
      <div className={clasees.slideshow}>
    
      </div>
      <div>
        <div className={clasees.hero}>
          <h1>NextLevel Food For NextLevel Foodies</h1>
          <p>Taste & share food from all over the world.</p>
        </div>
        <div className={clasees.cta}>
          <Link href="/community">Join the Community</Link>
          <Link href="/meals">Explore meals</Link>
        </div>
      </div>
    </header>
    <main>
    <section className={clasees.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={clasees.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
    </main>
    </>
  );
}
