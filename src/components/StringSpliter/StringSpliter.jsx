import cls from './StringSplit.module.css'
const StringSplitter = ({ text }) => {
    const letters = text.split('');
    return (
      <div className={cls.split}>
        {letters.map((letter, index) => (
          <span key={index} className={letter === ' ' ? cls.space : ''}>
            {letter}
          </span>
        ))}
      </div>
    );
  };
  
  export default StringSplitter;