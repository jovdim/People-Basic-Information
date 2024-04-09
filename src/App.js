import "./App.css";
import Person from "./components/Person";
import { Profiler, useState } from "react";
import AddnewPerson from "./components/AddnewPerson.js";
function App() {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Sophia Miller",
      age: 28,
      location: "Chicago, USA",
      position: "Marketing Manager",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      name: "Ethan Johnson",
      age: 34,
      location: "Sydney, Australia",
      position: "Software Developer",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      name: "Isabella Martinez",
      age: 31,
      location: "Barcelona, Spain",
      position: "Financial Analyst",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      name: "Liam Wilson",
      age: 26,
      location: "Toronto, Canada",
      position: "Project Manager",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      name: "Olivia Anderson",
      age: 33,
      location: "London, UK",
      position: "Sales Director",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      id: 6,
      name: "Noah Garcia",
      age: 29,
      location: "Mexico City, Mexico",
      position: "Marketing Coordinator",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      id: 7,
      name: "Ava Lopez",
      age: 37,
      location: "Berlin, Germany",
      position: "HR Specialist",
      image: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      id: 8,
      name: "William Smith",
      age: 32,
      location: "Tokyo, Japan",
      position: "Operations Manager",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      id: 9,
      name: "Emma Taylor",
      age: 30,
      location: "Paris, France",
      position: "Software Engineer",
      image: "https://randomuser.me/api/portraits/women/9.jpg",
    },
    {
      id: 10,
      name: "James Brown",
      age: 35,
      location: "Los Angeles, USA",
      position: "Graphic Designer",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      id: 11,
      name: "Charlotte Wilson",
      age: 27,
      location: "Rio de Janeiro, Brazil",
      position: "Product Manager",
      image: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
      id: 12,
      name: "Daniel White",
      age: 36,
      location: "Dubai, UAE",
      position: "UX/UI Designer",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      id: 13,
      name: "Amelia Clark",
      age: 31,
      location: "Hong Kong",
      position: "Accountant",
      image: "https://randomuser.me/api/portraits/women/13.jpg",
    },
    {
      id: 14,
      name: "Mason Taylor",
      age: 29,
      location: "Moscow, Russia",
      position: "Content Writer",
      image: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    {
      id: 15,
      name: "Mia Garcia",
      age: 34,
      location: "Berlin, Germany",
      position: "Business Development Manager",
      image: "https://randomuser.me/api/portraits/women/15.jpg",
    },
    {
      id: 16,
      name: "Alexander Martinez",
      age: 38,
      location: "Tokyo, Japan",
      position: "Financial Advisor",
      image: "https://randomuser.me/api/portraits/men/16.jpg",
    },
    {
      id: 17,
      name: "Sophie Brown",
      age: 25,
      location: "Singapore",
      position: "Marketing Manager",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
    },
    {
      id: 18,
      name: "Jackson Rodriguez",
      age: 40,
      location: "Buenos Aires, Argentina",
      position: "Civil Engineer",
      image: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    {
      id: 19,
      name: "Lily Harris",
      age: 26,
      location: "Toronto, Canada",
      position: "Social Media Manager",
      image: "https://randomuser.me/api/portraits/women/19.jpg",
    },
    {
      id: 20,
      name: "Logan Wilson",
      age: 33,
      location: "New York City, USA",
      position: "Operations Director",
      image: "https://randomuser.me/api/portraits/men/20.jpg",
    },
    {
      id: 21,
      name: "Grace Wilson",
      age: 29,
      location: "San Francisco, USA",
      position: "Data Scientist",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
    },
  ]);

  function modifyInfo(id, newName, newPosition, newAge, newLocation) {
    {
     const modifiedInfo =  profiles.map((profile) => {
        if (profile.id === id) {
          return {
            ...profile,
            name: newName,
            position: newPosition,
            age: newAge,
            location: newLocation,
          };
        }
        return profile;
      });
      setProfiles(modifiedInfo)
    }
  }
  return (
    <>
      <h1 className="text-center text-4xl font-bold m-8">
        People Basic Information
      </h1>
      <div className="flex flex-wrap justify-center">
        {profiles.map((profile) => {
          return (
            <Person
              id={profile.id}
              key={profile.id}
              name={profile.name}
              age={profile.age}
              position={profile.position}
              location={profile.location}
              img={profile.image}
              modifyInfo={modifyInfo}
            />
            
          );
        })}
        <AddnewPerson/>
      </div>
    </>
  );
}

export default App;
