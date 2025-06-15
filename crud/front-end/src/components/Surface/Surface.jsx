import './Surface.css';

export default function Surface({ children }) {
  return (
    <div className={'surface bg-surface flex flex-col'}>
      { children }
    </div>
  );
}
