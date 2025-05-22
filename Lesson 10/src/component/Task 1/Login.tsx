import React, { useEffect, useMemo, useState } from "react"

interface GreetingProps {
  name?: string
}


const Greeting = ({ name = "гість" }: GreetingProps) => {
  return (
    <div>
      Привітики {name}!
    </div>
  )
};

const calc = () => {
  console.time("MemoCalculation");
  let result = 0;
  for (let i = 0; i < 5_000_000; i++) {
    result += Math.sqrt(i);
  }
  console.timeEnd("MemoCalculation");
  return result.toFixed(2);
}

const MemoComponent = () => {
  console.time("MemoComponent");
  const result = useMemo(() => calc(), []);
  console.timeEnd("MemoComponent");
  return (
    <div>Результат обчислення: {result}</div>
  )
}

const Memo = React.memo(MemoComponent)



const Login = () => {
  console.time('LoginRender')
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [count, setCount] = useState(0);
  const [showCalc, setShowCalc] = useState(false);




  const loginHandler = (value: string) => {
    if (value.trim().length <= 0) {
      alert("поле username обов'язкове");
      return
    }
    setIsLogin((prev) => !prev)
  }
  console.timeEnd('LoginRender')
  return (
    <div>

      {isLogin ?
        (<><Greeting name={username} />
          <div>
            <button onClick={() => { setIsLogin((prev) => !prev); setUsername("") }}>Вийти</button>
          </div>
        </>)
        : (<><Greeting />
          <div>
            <label htmlFor="username"></label>
            <input value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" id="username" required />
            <button onClick={() => { loginHandler(username) }}>Увійти</button>
          </div></>)}

      <div>
        <button onClick={() => setCount(prev => prev + 1)}>Збільшити лічильник: {count}</button>
        <button onClick={() => setShowCalc(prev => !prev)}>
          {showCalc ? "Сховати" : "Показати"} обчислення
        </button>

        {showCalc && <Memo />}
      </div>
    </div>

  )
};

export default Login;
