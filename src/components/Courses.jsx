import Circular from "./Circular"
import Degrees from "./Degrees"
import Notice from "./Notice"
import Calendar from "./Calendar"

const Courses = () => {
  return (
    <div className="grid grid-cols-3 text-slate-950 container mx-auto">
      <Degrees />
      <div className="bg-white h-full p-[30px] space-y-10">
        <Circular />
        <Notice />
        <Calendar />
      </div>
    </div>
  )
}
export default Courses