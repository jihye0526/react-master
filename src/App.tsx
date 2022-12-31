import { AnimatePresence, motion, useMotionValue, useScroll, useTransform, useViewportScroll } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
  entry: (isBack:boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: (isBack:boolean) => ({
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  }),
  exit: (isBack:boolean) => ({ x: isBack ? 500 : -500, opacity: 0, scale: 0, transition: { duration: 0.3 } })
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const prevPlease = () => {
    setBack(true);
    setVisible(prev => prev === 1 ? 1: prev - 1)
  };
  const nextPlease = () => {
    setBack(false);
    setVisible(prev => prev === 10 ? 10: prev + 1)
  };

  return (
    <Wrapper>
      {/*<AnimatePresence mode="wait" custom={back}>  moe="wait"을 사용함으로써 exit을 실행시키고 exit이 끝나면 다음 element를 실행 할 수 있게 함 */}
      <AnimatePresence custom={back}>
        <Box 
          custom={back}
          key={visible}
          variants={box}
          initial="entry"
          animate="center"
          exit="exit"
        >
            {visible}
        </Box> : 
      </AnimatePresence>
      <button onClick={prevPlease}>prev</button>
      <button onClick={nextPlease}>next</button>
    </Wrapper>
  );
}

export default App;