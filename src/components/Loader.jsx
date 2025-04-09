import BeatLoader from 'react-spinners/BeatLoader';

export default function Loader() {
  return (
    <>
      <BeatLoader
        color="gray"
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
}
