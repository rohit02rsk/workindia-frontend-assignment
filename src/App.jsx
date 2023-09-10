import "./App.css";
import sampleData from "./sampleData.json";
import Card from "./components/Card";

function App() {
  const data = sampleData.data;

  return (
    <>
      <div className="flex p-8 gap-9">
        <div className="w-1/4 m-2">
          <h1 className="font-bold text-4xl">Applied</h1>
          <div className="flex flex-col items-center pt-2 gap-3">
            {data.map((row, i) => {
              // console.log(row);
              if (row.status === "Applied") {
                return <Card key={i} details={row} />;
              }
              return null;
            })}
          </div>
        </div>
        <div className="w-1/4 m-2">
          <h1 className="font-bold text-4xl">Accepted</h1>
          <div className="flex flex-col items-center pt-2 gap-3">
            {data.map((row, i) => {
              // console.log(row);
              if (row.status === "Accepted") {
                return <Card key={i} details={row} />;
              }
              return null;
            })}
          </div>
        </div>
        <div className="w-1/4 m-2">
          <h1 className="font-bold text-4xl">Rejected</h1>
          <div className="flex flex-col items-center pt-2 gap-3">
            {data.map((row, i) => {
              // console.log(row);
              if (row.status === "Rejected") {
                return <Card key={i} details={row} />;
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
