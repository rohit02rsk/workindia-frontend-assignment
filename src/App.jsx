import "./App.css";
import sampleData from "./sampleData.json";
import Card from "./components/Card";

function App() {
  const data = sampleData.data;

  return (
    <>
      <div className="flex p-5">
        <div className="w-1/3 m-2">
          <h1 className="font-bold text-4xl">Applied</h1>
          <div className="flex flex-col items-center pt-2 gap-3">
            {data.map((row, i) => {
              // console.log(row);
              if (row.status === "Applied") {
                return <Card key={i} details={row} />;
              }
            })}
          </div>
        </div>
        <div className="w-1/3 m-2">
          <h1 className="font-bold text-4xl">Accepted</h1>
          <div className="flex flex-col items-center pt-2 gap-3">
            {data.map((row, i) => {
              // console.log(row);
              if (row.status === "Accepted") {
                return <Card key={i} details={row} />;
              }
            })}
          </div>
        </div>
        <div className="w-1/3 m-2">
          <h1 className="font-bold text-4xl">Rejected</h1>
          <div className="flex flex-col items-center pt-2 gap-3">
            {data.map((row, i) => {
              // console.log(row);
              if (row.status === "Rejected") {
                return <Card key={i} details={row} />;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
