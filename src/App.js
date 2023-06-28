import Result from "./component/Resut";
import "./App.css";
//import ImageSlider from "./component/ImageSlider";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const changeTheSearch = (event) => {
    // console.log(event.target.value);
    setSearch(event.target.value);
  };

  const getAllMovies = () => {
    axios
      .get(APIURL)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSearchedMovies = () => {
    // console.log(SEARCHAPI + search)
    axios
      .get(SEARCHAPI + search)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setMovies([]);
    // console.log("Hello");
    if (search === "") {
      getAllMovies();
    } else {
      getSearchedMovies();
    }
  }, [search]);

  //coursel images

  return (
    <>
      <div className=" max-w-[1240px] shadow-xl min-h-[400px]  mx-auto p-3  body ">
        <div className="flex">
          <img src="imgeimd/imdb1.png " alt="" className="imd1 " />
          <input
            type="search"
            value={search}
            placeholder="Search"
            onChange={changeTheSearch}
            className=" w-30 border border-black  p-1    input rounded-lg ml-5 mb-3"
          />{" "}
          <button className="fa-solid fa-magnifying-glass  mb-3  icon"></button>
          <button className="ml-5 mb-4   btn bg-primary">Singin</button>
        </div>

        {/* coursel slider */}
        {/* 
        <Carousel>
          <Carousel.Item>
            <img
              className=" d-block darg"
              src="imgeimd/dug.png"
              alt="First slide"
            />
            <Carousel.Caption>
        
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block  imgbot"
              src="imgeimd/gadi.png"
              alt="Second slide"
            />

            <Carousel.Caption>
   
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" d-block imgbot"
              src="imgeimd/shazm.png"
              alt="Third slide"
            />

            <Carousel.Caption>
        
               
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}

        {movies.length === 0 ? (
          <div className="text-3xl text-center mt-2"> Loading... </div>
        ) : (
          <Result movies={movies} />
        )}
      </div>
    </>
  );
}

export default App;
