import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Question({ question, isActive, changeActive }) {
  const { id, title, info } = question;
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => changeActive(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
}

export default Question;
