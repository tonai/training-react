import { useRef } from 'react';

function useDebug(props) {
  const ref = useRef({});
  const diff = [];

  const keys = [];
  for (const i in props) {
    keys.push(i);
    if (ref.current[i] === undefined) {
      diff.push([i, '[UNDEF]', props[i]]);
    } else if (ref.current[i] !== props[i]) {
      diff.push([i, ref.current[i], props[i]]);
    }
  }

  for (const i in ref.current) {
    if (!keys.includes(i)) {
      diff.push([i, ref.current[i], '[UNDEF]']);
    }
  }

  ref.current = props;
  return diff;
}

export default useDebug;
