import { useState, useEffect } from 'react';
import AddMovie from "../AddMovie/AddMovie.js";
import "./App.css";
import MovieList from '../MovieList/MovieList.js';
import Filtring from '../Filtring/Filtring.js';
import Description from '../Description/Description.js';
import { Routes, Route } from "react-router-dom";

const info = [
    { title: 'Chernobyl', img: '/image/Chernobyl.jpg', description: "The events recount the circumstances of the explosion of the Chernobyl nuclear reactor in April 1986 in the Soviet Socialist Union, which became one of the worst human disasters in the twentieth century.", posterURL: "www.chernobyl.com", rating: 9.4 },
    { title: 'MR. ROBOT', img: '/image/MR.ROBOT.jpg', description: "The series tells the story of a young man who suffers from social anxiety disorder. Working as a computer programmer in the morning and a hacker in the evening, he is assigned to work by a mysterious man who calls himself 'Mr. Robot' to infiltrate large corporations they believe are corrupting society.", posterURL: "www.mrrobot.com", rating: 8.5 },
    { title: 'Prison Break', img: '/image/Prison Break.jpg', description: "An innocent man is imprisoned and sentenced to death, and his only hope now is in his younger brother, who commits a crime in order to send himself to prison and devises a plan for their escape together, in addition to some other civilians in prison, they encounter a series of interesting and exciting problems and dilemmas, and they try to solve them in order to implement the plan, no matter what it costs them.", posterURL: "www.prisonbreak.com", rating: 8.3 },
    { title: 'The Walking Dead', img: '/image/The Walking Dead.jpg', description: "Police officer (Rick) wakes up from a coma in which he was in for several months as a result of being shot while on the job, to find that the world has been ravaged by the zombies and he is the only survivor. An army of the zombies, events escalate.", posterURL: "www.thewalkingdead.com", rating: 8.2 },
    { title: 'Voltron', img: '/image/Voltron.jpeg', description: "Five teenagers become the last line of defense for the galaxy in an intergalactic battle against the evil alien force led by King Zarkon.", posterURL: "www.voltron.com", rating: 8.1 },
    { title: 'Jumanji', img: '/image/Jumanji.jpg', description: "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.", posterURL: "www.Jumanji.com", rating: 9.3 },
    {
        title: 'Lucifer', img: '/image/Lucifer.jpg', description: "Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels.", posterURL: "www.Lucifer.com", rating: 8.1
    },
    { title: 'Morbuis', img: '/image/Morbuis.jpg', description: "Biochemist Michael Morbius tries to cure himself of a rare blood disease, but he inadvertently infects himself with a form of vampirism instead.", posterURL: "www.Morbius.com", rating: 9.0 },
    { title: 'Black', img: "/image/Black.jpeg", description: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.", posterURL: "www.BlackWidow.com", rating: 6.7 },

];


function App() {

    const [list, setList] = useState(info);
    const [filtredList, setFiltredList] = useState(list);
    const [rate, setRate] = useState(0);
    const [keyword, setKeyword] = useState("");

    function adding(movie) {
        if (movie.title && movie.img && movie.description && movie.posterURL) {
            setList([...list, movie]);
        }
    }


    function filter(key, rate) {
        setKeyword(key);
        setRate(rate);
        setFiltredList(list.filter((element) => { return ((element.title.toLowerCase().includes(key.toLowerCase())) && (element.rating >= rate)) }));
    }

    useEffect(() => { filter(keyword, rate); }, [list]);


    return (
        <div className="App">
            <Routes>

                <Route path="/" element={<> <Filtring filter={filter} />  <MovieList list={filtredList} /> <AddMovie adding={adding} />   </>} />

                <Route path="/:id" element={<Description list={list} />} />
            </Routes>
        </div>
    );
}
export default App;