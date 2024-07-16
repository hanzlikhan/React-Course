import KgButton from "./KgButton";
import Hello from "./Hello";
import Random from "./Random";
function App() {
  var myName = "hanzla";
  let number = 45;
  let fullName = ()=>{
    return 'Hanzla Faiz'
  }
   return <div>
      <p>
        message no: {number}
       my name is {myName} and the full name is {fullName()}
      </p>
      <KgButton></KgButton>
      <Hello></Hello>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
    </div>
}
export default App;