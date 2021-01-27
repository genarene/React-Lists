import "./App.css";
import NewsPage from "./NewsPage";

function App() {
  return (
    <>
      <Phone features={phoneApps} />
      <NewsPage news={newsArray}/>
    </>
  );
}


const newsArray = [
  {
    id: 1,
    heading: "WHY I'M SUING THE US GOVERNMENT",
    site: "bunnystudios.com",
    text:"234 points by Ivan 11hrs ago"
  },

  {
    id: 2,
    heading: "ZENZIZENZIZENZIC",
    site: "wikipedia.org",
    text:"140 points by Franco 1hr ago"
  },

  {
    id: 3,
    heading: "A PRACTICAL SECURITY GUIDE FOR WEB DEVELOPERS ",
    site: "github.com",
    text:"72 points by Zanwar 2days ago"
  },
  {
    id: 4,
    heading: "I GOT ARRESTED IN KAZAKSTAN AND REPRESENTED MYSEL IN COURT",
    site: "medium.com",
    text:"370 points by Drapp 36 hrs ago"
  },
  {
    id: 5,
    heading: "EXAGGERATED HOUSE PRICES IN LA",
    site: "dougemocune.com",
    text:"300 points by Franco 1wk ago"
  }

]



const phoneApps = [
  {
    id: 1,
    subWoofer: "Subwoofer",
    washable: "Non-porus Washable",
    wings: "Wings",
    beveledBezel: "Beveled Bezel",
    seedless: "Seedless",
  },
];
// main container
const Phone = ({ features }) => {
  return (
    <>
        {features.map((feature, index) => {
          return (
            <PhoneFeatures key={feature.id}>
              <Subwoofer wooferText={feature.subWoofer} />
              <Washable washableText={feature.washable} />
              <Wings wingsText={feature.wings} />
              <Beveled beveledText={feature.beveledBezel} />
              <Beveled beveledText={feature.beveledBezel} />
              <Seedless seedlessText={feature.seedless} />
              <p>Add a card ...</p>
           </PhoneFeatures>
          );
        })}
      
    </>
  );
};

// component rendering the children
const PhoneFeatures = ({ children }) => {
  return <div className="phone-features">
    <div><h3>Phone Features <span>...</span></h3></div>
    {children}
  </div>;
};

// subwoofer component
const Subwoofer = ({ wooferText }) => {
  return <div className="woofer">{wooferText}</div>;
};

// washable component
const Washable = ({ washableText }) => {
  return <div className="washable">{washableText}</div>;
};

// wings component
const Wings = ({ wingsText }) => {
  return <div className="wings">{wingsText}</div>;
};

// beveled component
const Beveled = ({ beveledText }) => {
  return <div className="beveled">{beveledText}</div>;
};

// seedless
const Seedless = ({ seedlessText }) => {
  return <div className="seedless">{seedlessText}</div>;
};

export default App;
