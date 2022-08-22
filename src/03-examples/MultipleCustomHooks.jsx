import { useCounter, useFetch } from '../hooks';
import { LoadingQuote } from './components/LoadingQuote';
import { Quote } from './components/Quote';

export const MultipleCustomHooks = () => {
  const { increment, decrement, counter, reset } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button className='btn btn-primary' onClick={increment}>
        Next Quote
      </button>
      {counter !== 1 && (
        <button className='btn btn-primary' onClick={decrement}>
          Back Quote
        </button>
      )}
      <button className='btn btn-primary' onClick={reset}>
        Go to init
      </button>
    </>
  );
};
