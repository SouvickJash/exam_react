import React, { useEffect, useState } from "react";
import { EmployeeData } from "./Employee";

const Home = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState(0);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setData(EmployeeData);
  }, []);

  // save data
  const handleSave = (e) => {
  // e.preventDefault();
  const newObj = {
    id: data.length + 1,
    name,
    age,
  };
  setData([...data, newObj]);
};

  //  clear data
  const handleClear = () => {
    setId(0);
    setName("");
    setAge("");
    setUpdate(false);
  };

  //   update
  const handleUpdate = () => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, name, age } : item
    );
    setData(updatedData);
    handleClear();
  };

  //edid part
  const handleEdit = (id) => {
    const item = data.find((item) => item.id === id);
    if (item) {
      setUpdate(true);
      setId(item.id);
      setName(item.name);
      setAge(item.age);
    }
  };

  //delete part
  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure you delete this data")) {
        const dt = data.filter((item) => item.id != id);
        setData(dt);
      }
    }
  };
  return (
    <>
      <div>
        <label htmlFor="">
          Name:
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="">
          Age:
          <input
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        &nbsp;
        {/* <label htmlFor=""></label> */}
        {!update ? (
          <button
            type="button"
            class="btn btn-primary btn-sm"
            onClick={(e) => handleSave(e)}
          >
            Save
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-primary btn-sm"
            onClick={() => handleUpdate()}
          >
            Update
          </button>
        )}
        &nbsp;
        <button
          type="button"
          class="btn btn-danger btn-sm"
          onClick={() => handleClear()}
        >
          Clear
        </button>
      </div>

      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Sl no</th>
            <th scope="col">Emp id</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <td scope="col" colSpan={2}>
              Action
            </td>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      class="btn btn-danger btn-sm"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Home;
