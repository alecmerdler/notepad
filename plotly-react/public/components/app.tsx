import * as React from 'react';
import { render } from 'react-dom';

import * as styles from './app.css';

export const App: React.SFC = () => <div className={styles.app}>
  <h1>Plotly React</h1>
</div>;

render(<App />, document.getElementById('app'));
