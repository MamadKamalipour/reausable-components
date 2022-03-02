import "./assets/fontawesome/pro/css/all.css";
import VilaFinder from "./components/VilaFinder";
import FlippableCard from "./components/FlippableCard/FlippableCard";
import "./App.scss";
function App() {
  const cardData = [
    {
      id: 1,
      frontIcon: "fa fa-home",
      frontTitle: "front title 1",
      frontDesc: "front desc",
      backIcon: "back icon",
      backTitle: "back title",
      status: "top",
      backgroundImageOverlay: "rgba(0, 0, 0, 0.44)",
      backDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      backgroundImage:
        "https://cdn.jabama.com/image/jabama-images/1447261/557a9a44-c06b-4b7a-8d18-23295f6a33b3.png",
    },
    {
      id: 2,
      frontIcon: "fa fa-home",
      frontTitle: "front title 2",
      frontDesc: "front desc",
      backIcon: "back icon",
      backTitle: "back title",
      status: "top",
      backgroundImageOverlay: "rgba(0, 0, 0, 0.44)",
      backDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      backgroundImage:
        "https://cdn.jabama.com/image/jabama-images/1447261/034720d1-4929-4c0f-a151-1c1e417f4c5e.png",
    },
    {
      id: 3,
      frontIcon: "fa fa-home",
      frontTitle: "front title 3",
      frontDesc: "front desc",
      backIcon: "back icon",
      backTitle: "back title",
      status: "top",
      backgroundImageOverlay: "rgba(0, 0, 0, 0.44)",
      backDesc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      backgroundImage:
        "https://cdn.jabama.com/image/jabama-images/1447261/db2e2a7d-a90d-4585-bcc2-5c0e6380fed5.png",
    },
  ];
  return (
    <div className="App">
      <VilaFinder />
      <div className="card-wrapper">
        {cardData.map((card) => (
          <FlippableCard
            key={card.id}
            frontIcon={card.frontIcon}
            frontTitle={card.frontTitle}
            frontDesc={card.frontDesc}
            backIcon={card.backIcon}
            backTitle={card.backTitle}
            status={card.status}
            backgroundImageOverlay={card.backgroundImageOverlay}
            backDesc={card.backDesc}
            backgroundImage={card.backgroundImage}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
