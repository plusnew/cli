import plusnew, { component, store } from 'plusnew';

export default component(
  'App',
  () => {
    const local = store(0, (state, action: number) => state + action);
    return (
      <div>
        <button onclick={() => local.dispatch(2)}>count</button>
        <local.Observer render={state => state} />
      </div>
    );
  },
);
