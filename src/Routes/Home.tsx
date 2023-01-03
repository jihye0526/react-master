import { AnimatePresence, motion } from "framer-motion";
import { off } from "process";
import { useState } from "react";
import { setLogger, useQuery } from "react-query";
import styled from "styled-components";
import { getMovies, IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";

const Wrapper = styled.div`
    backgroundColor: black;
`;

const Loader = styled.div`
    height: 20vh;
    display: flex;
    justify-content: center;
    align-itmes: center;
`;

const Banner = styled.div<{bgPhoto: string}>`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${props => props.bgPhoto});
    background-size: cover;
`;

const Title = styled.h2`
    font-size: 68px;
    margin-bottom: 20px;
`;

const Overview = styled.p`
    font-size: 30px;
    width: 50%;
`;

const Slider = styled.div`
    position: relative;
    top: -100px;
`;

const Row = styled(motion.div)`
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(6, 1fr);
    position: absolute;
    width: 100%;
`;

const Box = styled(motion.div)<{bgPhoto : string}>`
    background-color: white;
    height: 200px;
    color: red;
    font-size: 66px;
    background-image: url(${props => props.bgPhoto});
    background-size: cover;
    background-position: center;
`;

const rowVariants = {
    hidden: {
        x: window.outerWidth + 5,
    },
    visible: {
        x: 0
    },
    exit: {
        x: -window.outerWidth - 5,
    }
}

const offset = 6;

function Home(){
    const {data, isLoading} = useQuery<IGetMoviesResult>(["movies", "nowPlaying"], getMovies);
    const [idx, setIdx] = useState(0);
    const increaseIndex = () => {
        if(data){
            if(leaving) return;
            toggleLeaving();
            
            const totalMovies = data?.results.length - 1; // Banner에서 사용한 영화는 제외
            const maxIdx = Math.floor(totalMovies / offset) - 1;
            setIdx(prev => (prev === maxIdx ? 0 : prev + 1));
        }
    }
    const [leaving, setLeaving] = useState(false);
    const toggleLeaving = () => setLeaving(prev => !prev);

    return (
        <Wrapper>
            {isLoading? 
                <Loader>Loading...</Loader> : 
                <>
                    <Banner onClick={increaseIndex} bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}>
                        <Title>{data?.results[0].title}</Title>
                        <Overview>{data?.results[0].overview}</Overview>
                    </Banner>
                    <Slider>
                        <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
                            <Row 
                                key={idx} 
                                variants={rowVariants} 
                                initial="hidden" 
                                animate="visible" 
                                exit="exit"
                                transition={{ type: "tween", duration: 1 }}
                            >
                                {data?.results
                                    .slice(1)
                                    .slice(offset*idx, offset*idx+offset)
                                    .map(movie => (
                                        <Box 
                                            key={movie.id} 
                                            bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                                        />
                                    ))}
                            </Row>
                        </AnimatePresence>
                    </Slider>
                </>
            }
        </Wrapper>
    );
}

export default Home;