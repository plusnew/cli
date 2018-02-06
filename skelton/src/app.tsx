import plusnew, { component, store } from 'plusnew';

const INITIAL_COUNTER_VALUE = 0;

export default component(
  // Function who returns all dependencies, when the component should rerender
  () => ({ counter:  store(INITIAL_COUNTER_VALUE, state: number => state + 1) }),

  // The actual stateless renderfunction
  (props: {}, { counter }) =>
    <div>
      <button
        onclick={(evt: MouseEvent) => counter.dispatch()}
      />
      {counter.state}
    </div>,
);
