import { render } from 'inferno';

import { LineChartAlive, LineChart } from '../components/charts';
import * as styles from './app.css';

export const App = () => <div className={styles.app}>
  <h1>Plotly Inferno</h1>
  <LineChartAlive title="Awesome Levels" />
</div>;

render(<App />, document.getElementById('app'));
