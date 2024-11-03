import Image from "next/image";

function Estados({ dias }) {
  return (
    <div className="p-2 border rounded text-center">
      {dias !== undefined ? (
        <p className={dias ? "text-green-600" : "text-red-600"}>
          {dias ? "Ativo" : "Inativo"}
        </p>
      ) : (
        <p className="text-gray-500">Sem dados</p>
      )}
<div className="flex justify-center items-center">
      {dias === true && (
        <Image
          className="j"
          src="/image/check.svg" // Certifique-se de usar o caminho correto, começando com '/'
          width={20}
          height={20}
          alt="Ícone ativo"
        />
      )}

      {dias === false && (
        <Image
          className="j"
          src="/image/x.svg"
          width={20}
          height={20}
          alt="Ícone inativo"
        />
      )}

      {dias === undefined && (
        <Image
          className="j"
          src="/image/unde.svg"
          width={20}
          height={20}
          alt="Ícone sem dados"
        />
      )}
      </div>
    </div>
  );
}

export default Estados;
