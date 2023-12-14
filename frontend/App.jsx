import { useState } from "react";
import VocabularyViewer from "./pages/VocabularyViewer";
import NavSearchBar from "./components/NavSearchBar";

function App() {
	const [word, setWord] = useState("Word");
	const [definition, setDefinition] = useState("Definition");

	return (
		<div className="container">
			<VocabularyViewer word={word} definition={definition} />
			<NavSearchBar />
		</div>
	);
}

export default App;
