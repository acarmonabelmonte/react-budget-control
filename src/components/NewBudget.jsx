const NewBudget = () => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario">
        <div className="campo">
          <label htmlFor="newBudget">Definir Presupuesto</label>
          <input
            type="text"
            className="nuevo-presupuesto"
            name="newBudget"
            placeholder="Añade tu presupuesto"
          />
          <input type="submit" value="Añadir" />
        </div>
      </form>
    </div>
  );
};

export default NewBudget;
