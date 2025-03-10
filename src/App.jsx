import { use, useState } from 'react'
import { flashcards } from './data';
import Card from './components/Card';
import './App.css'

const App = () => {
    const [currentCard, setCurrentCard] = useState(0); //index for the flashcards list
    let flashcard = flashcards[currentCard];

    const [showFront, setShowFront] = useState(true); //specifiying state of flashcard and whether front or back is shown
    
    function handleNextClick() {
        setCurrentCard((currentCard+1)%flashcards.length);
        flashcard = flashcards[currentCard];
        setCorrectAns('');
        setShowFront(true);
        setInput('');
        setCardStyle({backgroundColor: "white"});
    }

    function handlePrevClick() {
        setCurrentCard((currentCard-1+flashcards.length)%flashcards.length);
        flashcard = flashcards[currentCard];
        setCorrectAns('');
        setShowFront(true);
        setInput('');
        setCardStyle({backgroundColor: "white"});
    }

    const [input, setInput] = useState(''); //state for user input
    const [correctAns, setCorrectAns] = useState(''); //state for if user input correct or wrong
    const [cardStyle, setCardStyle] = useState({backgroundColor: "white"}); //state for background color for div to change color when answer is wrong/right

    const normalizeString = (str) => str.toLowerCase().trim(); //makes string lower case and gets rid of spaces

    const checkAnswer = () => {
        const normalizedUserAnswer = normalizeString(input);
        const normalizedTargetAnswer = normalizeString(flashcard.english);

        if (normalizedTargetAnswer.includes(normalizedUserAnswer)){
            setCorrectAns("correct");
            setCardStyle({ backgroundColor: "#00ff0080" });
            setShowFront(false); //display answer when user is correct
        }
        else {
            setCorrectAns('wrong');
            setCardStyle({ backgroundColor: "#ff000080" });
        }
    };

    return (
    <>
        <h1>Chapter 15 Spanish Vocab Flash Cards</h1>
        <h3>Vocab dealing with health and fitness</h3>
        <p>{flashcards.length} flashcards</p>
        <Card style = {cardStyle} english = {flashcard.english} spanish = {flashcard.spanish} showFront={showFront} setShowFront={setShowFront}/>
        <p>{correctAns}</p>
        <form>
            <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Make your guess'/>
        </form>
        <button className="submit" type="submit" onClick={checkAnswer}>Check Answer</button>
        <br></br>
        <br></br>
        <button className="navigate" onClick={handlePrevClick}>Previous Flashcard</button>
        <button className="navigate" onClick={handleNextClick}>Next Flashcard</button>
    </>
    )
}

export default App;
