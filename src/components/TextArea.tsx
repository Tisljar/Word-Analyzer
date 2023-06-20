import { useEffect, useRef } from 'react';
import { pronouns } from '../utilities/pronouns';
import LongestWord from './LongestWord';

interface SettingProps {
    setWords: React.Dispatch<React.SetStateAction<number>>;
    setSentences: React.Dispatch<React.SetStateAction<number>>;
    setCharacters: React.Dispatch<React.SetStateAction<number>>;
    setParagraphs: React.Dispatch<React.SetStateAction<number>>;
    setPronouns: React.Dispatch<React.SetStateAction<number>>;
    setLongestWord: React.Dispatch<React.SetStateAction<string>>;
}

const TextArea = ({
    setWords,
    setCharacters,
    setParagraphs,
    setPronouns,
    setSentences,
    setLongestWord,
}: SettingProps) => {
    const textRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        if (textRef.current) textRef.current.focus();
    }, []);
    const analyse = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const target: string = e.target.value;
        let longestString = '';
        let sentences = 0;
        let characters = 0;
        let words = 0;
        let pronounNumber = 0;
        if (target !== '') {
            const paragraphs = target.split(/\r?\n\r?\n/);
            setParagraphs(paragraphs.length);
            paragraphs.forEach((paragraph) => {
                sentences += (paragraph.match(/[?.!]/g) || []).length;
                const wordArray = paragraph.split(/,\s| /);
                words += wordArray.length;
                wordArray.forEach((word) => {
                    characters += word.length + 1;
                    if (pronouns.includes(word.toLocaleLowerCase())) {
                        pronounNumber += 1;
                        console.log(word);
                    }
                    if (word.length > longestString.length) {
                        longestString = word;
                    }
                });
            });
        }
        setWords(words);
        setCharacters(characters);
        setSentences(sentences);
        setPronouns(pronounNumber);
        setLongestWord(longestString);
    };
    return (
        <textarea
            placeholder="Input text"
            className="p-8 bg-slate-50 text-lg leading-6 my-6 min-h-[500px] rounded-lg"
            onChange={analyse}
            ref={textRef}
        ></textarea>
    );
};

export default TextArea;
