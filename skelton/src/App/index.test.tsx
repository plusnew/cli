import plusnew from '@plusnew/core';
import enzymeAdapterPlusnew, { mount } from '@plusnew/enzyme-adapter';
import { click } from '@plusnew/simulate-dom-events';
import { configure } from 'enzyme';
import App from './index';

configure({ adapter: new enzymeAdapterPlusnew() });

describe('test App.tsx', () => {
	it('up button should be found and be clickable', () => {
		const wrapper = mount(<App />);

		expect(wrapper.containsMatchingElement(<button>up</button>)).toBe(true);
		expect(wrapper.find('span').text()).toBe('0');

		click(wrapper.find('button').first().getDOMNode() as HTMLElement);

		expect(wrapper.find('span').text()).toBe('1');
	});

	it('down button should be found and be clickable', () => {
		const wrapper = mount(<App />);

		expect(wrapper.containsMatchingElement(<button>down</button>)).toBe(true);
		expect(wrapper.find('span').text()).toBe('0');

		click(wrapper.find('button').last().getDOMNode() as HTMLElement);

		expect(wrapper.find('span').text()).toBe('-1');
	});
});
