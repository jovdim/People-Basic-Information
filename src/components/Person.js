import EditPerson from "./EditPerson.js";

function Person(props) {
  return (
    <div className="w-96 m-2 py-8 px-8 max-w-sm  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src={props.img}
        alt="Woman's Face"
      />
      <div className="text-left space-y-2 asm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">{props.name}</p>
          <p className="text-slate-400 font-medium">{props.position}</p>
          <p className="text-slate-400 font-medium">{props.age}</p>
          <p className="text-slate-400 font-medium">{props.location}</p>
        </div>
        <EditPerson
          id={props.id}
          name={props.name}
          age={props.age}
          position={props.position}
          location={props.location}
          modifyInfo={props.modifyInfo}
          removePerson={props.removePerson}
        />
      </div>
    </div>
  );
}

export default Person;
