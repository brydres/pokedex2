import Card from "@/components/Card";


async function getData(url) {
  const response = await fetch(url)
  const data = response.json();
  return data;
}

export default async function Home() {
  const data = await getData("https://pokeapi.co/api/v2/pokemon?limit=151");
  const firtData = data.results;

  return (
    <div id="contenedor" className="flex justify-center items-center">

      

        <div className="md:w-[1440px] flex flex-col md:flex-row md:justify-center flex-wrap items-center gap-4 pt-10">
          {firtData.map((el, index) => (
            <Card key={index} url={el.url} />
          ))}
        </div>

    

    </div>
  )
}