import './index.css';
import Header from './components/Header';
import Statistics from './components/Statistics';
import TextArea from './components/TextArea';
import Footer from './components/Footer';
import { useState } from 'react';
import LongestWord from './components/LongestWord';

const App = (): JSX.Element => {
    const [words, setWords] = useState<number>(0);
    const [sentences, setSentences] = useState<number>(0);
    const [characters, setCharacters] = useState<number>(0);
    const [paragraphs, setParagraphs] = useState<number>(0);
    const [pronouns, setPronouns] = useState<number>(0);
    const [longestWord, setLongestWord] = useState<string>('');
    return (
        <div className="app bg-gray-500 flex flex-col justify-between">
            <Header />
            <div className="w-5/6 mx-auto flex flex-col my-8">
                <Statistics
                    words={words}
                    sentences={sentences}
                    characters={characters}
                    paragraphs={paragraphs}
                    pronouns={pronouns}
                />
                <TextArea
                    setWords={setWords}
                    setSentences={setSentences}
                    setCharacters={setCharacters}
                    setParagraphs={setParagraphs}
                    setPronouns={setPronouns}
                    setLongestWord={setLongestWord}
                />
                <LongestWord longestWord={longestWord} />
            </div>
            <Footer />
        </div>
    );
};

export default App;

