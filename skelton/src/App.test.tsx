import enzymeAdapterPlusnew, { mount } from 'enzyme-adapter-plusnew';
import { configure } from 'enzyme';
import plusnew from 'plusnew';
import App from './App';

configure({ adapter: new enzymeAdapterPlusnew() });

describe('test App.tsx', () => {
  it('true should be true', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(<button />).length).toBe(1);
  });
});

