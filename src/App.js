import "./App.css";

function App() {
  return (
    <>
    <Phone features={phoneApps} />
    </>
  );
}

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
