 import './Button.css'

function Button({title,color}) {

  return (
    <div>
     <button className={`color ${color}`}>{title}</button>
    </div>
  );
}

export default Button;
