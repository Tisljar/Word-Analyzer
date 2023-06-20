interface StatisticsProps {
    words: number;
    sentences: number;
    characters: number;
    paragraphs: number;
    pronouns: number;
}

const Statistics = ({ words, characters, sentences, paragraphs, pronouns }: StatisticsProps) => {
    return (
        <div className=" flex justify-evenly bg-slate-50 rounded-lg">
            <div className=" flex flex-col justify-start items-center ml-8 py-4">
                <span className=" opacity-90">Words</span>
                <span className="text-xl font-semibold">{words}</span>
            </div>
            <div className=" flex flex-col justify-start items-center py-4">
                <span className=" opacity-90">Characters</span>
                <span className="text-xl font-semibold">{characters}</span>
            </div>
            <div className=" flex flex-col justify-start items-center py-4">
                <span className=" opacity-90">Sentences</span>
                <span className="text-xl font-semibold">{sentences}</span>
            </div>
            <div className=" flex flex-col justify-start items-center py-4">
                <span className=" opacity-90">Paragraphs</span>
                <span className="text-xl font-semibold">{paragraphs}</span>
            </div>
            <div className=" flex flex-col justify-start items-center mr-8 py-4">
                <span className=" opacity-90">Pronouns</span>
                <span className="text-xl font-semibold">{pronouns}</span>
            </div>
        </div>
    );
};

export default Statistics;
