import Image from "next/image";
import Estados from "./components/estados";
import Link from "next/link";

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

  const hoje = new Date();
  const diaSemana = hoje.getDay();
  const Dsemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  const dias = Dsemana.slice(diaSemana).concat(Dsemana.slice(0, diaSemana)); // Corrigido para o cálculo dos dias da semana

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
                <button aria-label={`Apagar hábito ${habito}`}>
                  <Image
                    src="https://www.svgrepo.com/show/530109/garbage-can.svg"
                    width={20}
                    height={20}
                    alt="apagar"
                  />
                </button>
              </div>
              <section className="grid grid-cols-7 rounded border p-2 gap-2">
                {dias.map((dia, index) => {
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
        <Link href={'novot'} className="fixed bottom-10 right-10 bg-green-600 text-white p-2 rounded items-center jutify-center">
          Novo hábito
        </Link>
      </main>
    </>
  );
}
