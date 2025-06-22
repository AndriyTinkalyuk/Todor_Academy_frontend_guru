import './MoveEventElement.css'

const MoveEventElement = () => {

  const handleMoveEvent = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(`x: ${event.clientX} y: ${event.clientY}`);

  }

  return (
    <div className="move-div" onMouseMove={(e) => handleMoveEvent(e)}>
      <p>Веди тут мишкою! Тротлінг вирішив все ж не додавати... Можливо, тротлінг мав б місце, якби ми зберігали координа в стейт чи передавали кудись</p>
    </div>
  )
};

export default MoveEventElement;
