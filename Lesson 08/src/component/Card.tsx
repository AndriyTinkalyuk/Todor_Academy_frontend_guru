
interface Card { 
    title: string;
    children: React.ReactNode
}


const Card = (props: Card) => {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <div>{props.children}</div>
    </div>
  )
};
 
export default Card;
