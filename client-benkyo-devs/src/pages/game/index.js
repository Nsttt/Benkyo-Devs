import GameLayout from "@/components/layouts/GameLayout.jsx";
import GameScreen from "@/components/gamecomponents/GameScreen.jsx";


export default function Game() {
  return (
    <GameLayout>
      <main>
        <GameScreen />  
      </main>
    </GameLayout>
  );
}