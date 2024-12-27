

const page = ({params}:{params:{id:string}}) => {

    const id=params.id;

  return (
   <h1 className="text-3xl">User Profile :{id} </h1>
  )
}

export default page;