import './App.css'

function App() {
  const userName = "Ada Lovelace";
  const userProfile = {
    imageUrl: "https://i.imgur.com/YfeOqp2.jpeg",
    description: "Pioneer in programming and mathematician",
  };

  return (
    <div className="profile-card">
      <img src={userProfile.imageUrl} alt={userName} />
      <h1>{userName}</h1>
      <p>{userProfile.description}</p>
    </div>
  );
}

export default App
