import plusnew, { component, store } from 'plusnew';

export default component(
  'App',
  () => ({
    local: store(0, (state, action: number) => state + action),
  }),
  (props: {}, { local }) =>
    <div>
      <button onclick={() => local.dispatch(2)}>count</button>
      {local.state}
    </div>,
);
