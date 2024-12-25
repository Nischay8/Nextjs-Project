import Hello from "@/app/components/hello";




export default function Home() {
  console.log("I am Server Components!");

  return (
    <>
    <h1 className="text-3xl">Welcome to Next Js</h1>
    <Hello />
    </>
    
  );
}
