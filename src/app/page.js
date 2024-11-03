import Image from "next/image";
import Estados from "./components/estados";

export default function Home() {
  const habitos = {
    'beber agua': {
      '03-11-2024': true,
      '04-11-2024': false,
      '05-11-2024': true,
    },
    'fumar um bake': {
      '03-11-2024': true,
      '04-11-2024': false,
      '05-11-2024': true,
    },
  };

  const Dsemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  return (
    <>
      <main className="m-8">
        {habitos === null || Object.keys(habitos).length === 0 ? (
          <p>Você ainda não tem nenhum hábito</p>
        ) : (
          Object.entries(habitos).map(([habito, habitoStreaks]) => (
            <div key={habito} className="mb-4">
              <div className="flex justify-between items-center">
                <span className="font-bold text-xl mr-2">{habito}</span>
                <button>
                  <Image
                    src="https://www.svgrepo.com/show/530109/garbage-can.svg"
                    width={20}
                    height={20}
                    alt="apagar"
                  />
                </button>
              </div>
              <section className="grid grid-cols-7 rounded border p-2 gap-2">
                {Dsemana.map((dia, index) => {
                  const dateKey = Object.keys(habitoStreaks)[index]; // Considerando que o índice corresponde à ordem das datas
                  const estado = habitoStreaks[dateKey];

                  return (
                    <div key={dia} className="flex flex-col">
                      <span className="text-center">{dia}</span>
                      <Estados dias={estado} />
                    </div>
                  );
                })}
              </section>
            </div>
          ))
        )}
      </main>
    </>
  );
}
