import Circular from "./Circular"
import Degrees from "./Degrees"

const Courses = () => {
  return (
    <div className="grid grid-cols-3 text-slate-950 container mx-auto">
      <Degrees />
      <Circular />
    </div>
  )
}
export default Courses