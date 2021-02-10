import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { DashboardHeader } from "../../../widgets/DashboardHeader";
import { Footer } from "../../../widgets/Footer";
import "./Search.css";

function Search() {
  let location = useLocation();
  const { id } = useParams();

  const [searchResults, setSearchResults] = useState([]);

  const fetchResults = async () => {
    let url = "https://cerebrum-v1.herokuapp.com/api/search?q=" + encodeURI(id);
    await axios
      .get(url)
      .then((res) => {
        let data = res.data.data.courses;
        setSearchResults(data);
      })
      .catch(setSearchResults([]));
  };

  useEffect(() => {
    if (id) {
      const fetchTheResults = async () => {
        await fetchResults();
      };

      fetchTheResults();
    }
  }, [id]);

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  return (
    <>
      <DashboardHeader />
      <main className="search-section container vh-100 my-5">
        <div className="search-section-header">
          <div className="search-header-a">
            <h1>{location.pathname.replace("/search/", "")}</h1>
            <p>{searchResults.length} results</p>
          </div>
        </div>
        <div className="search-section-body d-flex flex-wrap">
          {searchResults.map((course) => (
            <div
              key={course._id}
              className="bg-white all-courses-div d-flex flex-column border m-2 position-relative"
            >
              <img
                className="courses-img"
                src={course.image_url}
                width="100%"
                height="75%"
                alt="dispay"
              />

              <p className="badge position-absolute courses-price-badge p-2">
                {course.price > 0
                  ? `N ${course.price}`
                  : (course.price = "FREE")}
              </p>
              <div className="w-100">
                <div
                  className="bg-white rounded-circle courses-tutor-image-radius"
                  height="55px"
                  width="55px"
                >
                  <img
                    className="rounded-circle"
                    src={
                      course.tutor_id !== undefined
                        ? course.tutor_id.image_url
                        : ""
                    }
                    height="45px"
                    width="45px"
                    alt="tutor pic"
                  />
                </div>
                <a
                  className="all-courses-link"
                  href={`/buycourse/?id=${course._id}`}
                >
                  <p className="fw-bold signup-p mx-4 mt-3">{course.name}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export { Search };
