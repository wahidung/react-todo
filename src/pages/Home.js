import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Todo from "./../components/Todo";
import Header from "./../layouts/Header";
import { URL, KEY } from "./../config/db";
import ContentLoader from "react-content-loader";

function Home() {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      axios
        .get(URL, {
          headers: {
            "content-type": "application/json",
            "x-apikey": KEY,
            "cache-control": "no-cache",
          },
        })
        .then((res) => {
          setList(res.data);
          setLoading(false);
        });
    }

    fetchMyAPI();
  });

  // Declare a new state variable, which we'll call "count"
  return (
    <div>
      <Header title="Board" rightIcon={true} />
      <div className="p-3 scrollbar">
        {loading ? (
          <ContentLoader
            speed={2}
            width={400}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="3" ry="3" width="97%" height="20" />
            <rect x="0" y="40" rx="3" ry="3" width="77%" height="20" />
            <rect x="0" y="80" rx="3" ry="3" width="87%" height="20" />
          </ContentLoader>
        ) : (
          <div>
            <div className="todos overflow">
              {list.map((data) => (
                <Todo
                  key={data._id}
                  id={data._id}
                  title={data.name}
                  color={data.color}
                  checked={data.is_checked}
                />
              ))}
            </div>
            <div className="bottom">
              <Link to="/add" className="btn btn-success btn-block">
                Add a Task
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
