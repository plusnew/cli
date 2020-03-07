import plusnew, { component, store } from '@plusnew/core';
import style from './app.scss';

export default component('App', () => {
	const local = store(0, (state, action: 'increment' | 'decrement') => {
		if (action === 'increment') {
			return state + 1;
		}
		if (action === 'decrement') {
			return state - 1;
		}
		throw new Error('No such action found');
	});

	return (
		<div class={style.container}>
			<button onclick={() => local.dispatch('increment')}>up</button>
			<button onclick={() => local.dispatch('decrement')}>down</button>
			<local.Observer>{(state) => <span>{state}</span>}</local.Observer>
		</div>
	);
});
