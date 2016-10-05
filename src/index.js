import React from 'react';
// noinspection JSUnresolvedVariable
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './favicon.ico';
import './styles/app.scss';

// Needed for onTouchTap
injectTapEventPlugin();

const App = () => (
  <p>Hello Material</p>
);

render(<App />, document.getElementById('app'));
