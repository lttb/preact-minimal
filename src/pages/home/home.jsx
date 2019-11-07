import Preact from 'preact';
import styled from 'reshadow';

function Home() {
  return styled`
    p { color: red; }
  `(
    <main>
      <p>It feels like home</p>
    </main>,
  );
}

export default Home;
