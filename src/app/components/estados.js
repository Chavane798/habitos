function Estados({ dias }) {
    return (
      <div className="p-2 border rounded text-center">
        <h2 className="text-lg font-semibold">Estado</h2>
        <p className={dias === true ? "text-green-600" : dias === false ? "text-red-600" : "text-gray-500"}>
          {dias !== undefined ? (dias ? "Ativo" : "Inativo") : "Sem dados"}
        </p>
      </div>
    );
  }
  
  export default Estados;
  