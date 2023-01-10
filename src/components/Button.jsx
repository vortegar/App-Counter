

export const Button = ({ texto, esBotondeClick, manejarClic }) => {
  return (
    <button
        className={ esBotondeClick ? "boton-clic" : "boton-reiniciar" } 
        onClick={ manejarClic }
    >
        { texto }
    </button>
  )
}
