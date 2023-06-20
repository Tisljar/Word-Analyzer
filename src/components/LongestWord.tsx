interface longestProps {
    longestWord: string;
}

const LongestWord = ({ longestWord }: longestProps) => {
    return (
        <div className="bg-slate-50 text-center w-full py-8 rounded-lg">
            <h3>The longest word is : {longestWord}</h3>
        </div>
    );
};

export default LongestWord;
