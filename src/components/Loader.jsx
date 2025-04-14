import BeatLoader from 'react-spinners/BeatLoader';

export default function Loader({ size = 10 }) {
  return (
    <>
      <BeatLoader
        color="gray"
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
}
