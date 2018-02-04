import plusnew, { component, store } from 'plusnew';

const component: component = () => {
  const local = store(0, state => state + 1);

  return {
    dependencies: { local },
    render: () =>
      <div>
        <button onclick={local.dispatch}>count</button>
        {local.state}
      </div>,
  };
};

export default component;

