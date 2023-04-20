import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id='error-page'
      className='mt-20 flex flex-col items-center justify-center'
    >
      <h1 className='font-bold uppercase'>Oops!</h1>
      <p className='italic'>Sorry, an unexpected error has occurred.</p>
      <p className='text-red-700'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
