import { useState } from "react";
import data from "./data";
import Question from "./Question";

function App() {
  const [active, setActive] = useState(data[0].id);

  function changeActive(id) {
    setActive(id);
  }

  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <section className="info">
          {data.map((question) => {
            return (
              <Question
                key={question.id}
                question={question}
                isActive={active === question.id}
                changeActive={changeActive}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
