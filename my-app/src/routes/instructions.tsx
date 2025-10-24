import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/instructions')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<>
  <h1>Instructions - how to play</h1>
  <details><summary>Clean the stable</summary>
  <li>Clean the stable to earn money</li>
  </details>
  <details><summary>Start the Game</summary>
  <li>sdiosd</li>
  <li>sdfsdf</li>
  <li>sdfsdf</li>
  <li>sdfsfds</li>
  </details>
  <details><summary>Start the Game</summary>
  <li>sdiosd</li>
  <li>sdfsdf</li>
  <li>sdfsdf</li>
  <li>sdfsfds</li>
  </details>
  <details><summary>Start the Game</summary>
  <li>sdiosd</li>
  <li>sdfsdf</li>
  <li>sdfsdf</li>
  <li>sdfsfds</li>
  </details>
  <details><summary>Start the Game</summary>
  <li>sdiosd</li>
  <li>sdfsdf</li>
  <li>sdfsdf</li>
  <li>sdfsfds</li>
  </details>
  <details><summary>Start the Game</summary>
  <li>sdiosd</li>
  <li>sdfsdf</li>
  <li>sdfsdf</li>
  <li>sdfsfds</li>
  </details>
  </>);
}
