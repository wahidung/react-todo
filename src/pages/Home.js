import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Todo from "./../components/Todo";
import Header from "./../layouts/Header";
import { URL, KEY } from "./../config/db";
import ContentLoader from "react-content-loader";
import { Nav } from "react-bootstrap";
import { IoSadOutline } from "react-icons/io5";

IoSadOutline;

function Home() {
  const [first, setFirst] = useState(true);
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    let newUrl = "";
    if (filter == "all") {
      newUrl = URL + `allTodo/rows?$by.isChecked=asc`;
    } else if (filter == "completed") {
      newUrl = URL + `filterTodo/rows?isChecked=true`;
    } else {
      newUrl = URL + `filterTodo/rows?isChecked=false`;
    }

    async function fetchMyAPI() {
      let res = await axios.get(newUrl, {
        headers: {
          "content-type": "application/json",
          "x-api-key": KEY,
          "cache-control": "no-cache",
        },
      });

      if (res.status == 200) {
        setList(res.data.nodes);
        setFirst(false);
        setLoading(false);
      }
    }

    fetchMyAPI();
  }, [filter, loading]);

  const updateChecked = (e) => {
    let data = {
      isChecked: e.target.checked,
    };

    axios
      .patch(URL + `allTodo/rows/` + e.target.id, JSON.stringify(data), {
        headers: {
          "content-type": "application/json",
          "x-api-key": KEY,
          "cache-control": "no-cache",
        },
      })
      .then((res) => {
        setLoading(true);
        // console.log(res);
      });
  };

  const deleteTodo = (e) => {
    axios
      .delete(URL + `allTodo/rows/` + e.item, {
        headers: {
          "content-type": "application/json",
          "x-api-key": KEY,
          "cache-control": "no-cache",
        },
      })
      .then((res) => {
        // console.log(res);
      });
  };

  const filterTodo = (selected) => {
    setFirst(true);
    setList([]);
    setFilter(selected);
  };

  // Declare a new state variable, which we'll call "count"
  return (
    <div>
      <Header title="Board" rightIcon={true} />
      <Nav
        className="tab nav-fill"
        defaultActiveKey="all"
        as="ul"
        onSelect={filterTodo}
      >
        <Nav.Item as="li">
          <Nav.Link eventKey="all">All</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="completed">Completed</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="uncompleted">Uncompleted</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="p-3 scrollbar">
        {first ? (
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
            {list.length != 0 ? (
              <div className="todos overflow">
                {list.map((data) => (
                  <Todo
                    key={data.id}
                    id={data.id}
                    title={data.name}
                    color={data.color}
                    checked={data.isChecked}
                    updateChecked={updateChecked}
                    deleteTodo={deleteTodo}
                  />
                ))}
              </div>
            ) : (
              <div className="empty text-center pt-5 mt-5">
                <IoSadOutline className="icon-sad mt-5" />
                <p>Todo is empty</p>
              </div>
            )}

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
