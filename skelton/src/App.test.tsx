import enzymeAdapterPlusnew, { mount } from 'enzyme-adapter-plusnew';
import { configure } from 'enzyme';
import plusnew from 'plusnew';
import App from './App';

configure({ adapter: new enzymeAdapterPlusnew() });

describe('test App.tsx', () => {
  it('button should be found', () => {
    const wrapper = mount(<App />);
    expect(wrapper.containsMatchingElement(<button>count</button>)).toBe(true);
  });
});
