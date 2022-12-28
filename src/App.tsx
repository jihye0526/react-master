import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App(){
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const hours = useRecoilValue(hourSelector);

  const onMinutesChange = (e:React.FormEvent<HTMLInputElement>) => {
    setMinutes(+e.currentTarget.value); // string인 e.currentTarget.value을 +를 붙임으로써 number로 바꿔줌
  }


  return (
    <div>
      <input value={minutes} onChange={onMinutesChange} type="number" placeholder="Minutes"></input>
      <input value={hours} type="number" placeholder="Hours"></input>
    </div>
  );
}

export default App;