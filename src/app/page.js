import Cards from "@/components/Cards";
import { baseURL } from "@/config/baseURL";
import Image from "next/image";

async function getData() {
  const res = await fetch(baseURL + "/top-airing", {});
  let data = await res.json();
  // console.log(data);
  return data;
}

export default async function Home() {
  let data = await getData();
  console.log("data>>>", data);

  let collection = data?.results ?? [];
  return (
    <>
      <main className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4 min-h-screen flex-col items-center justify-between p-5 ">
        {collection.map((x, i) => (
          <Cards obj={x} key={i} />
        ))}
      </main>
    </>
  );
}
