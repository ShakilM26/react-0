import { useParams } from "react-router-dom";

function Quiz() {
  const { playlistId } = useParams();

  return <h2>Quiz for: {playlistId}</h2>;
}

export default Quiz;
