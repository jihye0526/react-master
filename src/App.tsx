import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App(){
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);

  const onMinutesChange = (e:React.FormEvent<HTMLInputElement>) => {
    setMinutes(+e.currentTarget.value); // string인 e.currentTarget.value을 +를 붙임으로써 number로 바꿔줌
  }

  const onHoursChange = (e:React.FormEvent<HTMLInputElement>) => {
    setHours(+e.currentTarget.value);
  }

  return (
    <div>
      <input value={minutes} onChange={onMinutesChange} type="number" placeholder="Minutes"></input>
      <input value={hours} onChange={onHoursChange} type="number" placeholder="Hours"></input>
    </div>
  );
}

export default App;