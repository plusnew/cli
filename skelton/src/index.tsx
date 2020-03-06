import plusnew from '@plusnew/core';
import driver from '@plusnew/driver-dom';
import App from './App';

plusnew.render(<App />, {
	driver: driver(document.body)
});
