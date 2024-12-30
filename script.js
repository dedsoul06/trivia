body {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f7f7fc;
  margin: 0;
  padding: 20px;
}

#app {
  max-width: 700px;
  margin: auto;
}

#question {
  font-size: 1.8em;
  margin: 20px 0;
}

#question-image {
  max-width: 100%;
  height: auto;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

#options button {
  display: block;
  margin: 10px auto;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#options button.selected {
  background-color: #FFD700;
  color: black;
}

#next-button {
  display: none;
  padding: 10px 20px;
  background-color: #008CBA;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
}

#next-button:hover {
  background-color: #007B9E;
}

#result-container {
  margin-top: 20px;
}

#restart-button {
  padding: 10px 20px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 20px;
}

#restart-button:hover {
  background-color: #d32f2f;
}

#result-title {
  font-size: 2em;
  font-weight: bold;
  color: #ff5722;
  animation: glow 1s infinite;
}

@keyframes glow {
  0% { text-shadow: 0 0 5px #ff5722, 0 0 10px #ff5722; }
  50% { text-shadow: 0 0 20px #ff5722, 0 0 30px #ff5722; }
  100% { text-shadow: 0 0 5px #ff5722, 0 0 10px #ff5722; }
}
