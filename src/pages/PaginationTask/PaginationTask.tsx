import { useState } from "react";
import useGetData from "../../utils/Data/useGetData";
import People from "../../utils/Model/PeopleModel";

function PaginationTask() {
  const { peopleList, loading } = useGetData();
  const [currentPage, setCurrentPage] = useState(1);
  const [peoplePerPage, setPeoplePerPage] = useState(3);

  const indexOfLastPage = currentPage * peoplePerPage;
  const indexOfFirstPage = indexOfLastPage - peoplePerPage;
  const currentPeople = peopleList.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const pickPeoplePerPage = (peoplePerPage: number) => {
    setPeoplePerPage(peoplePerPage);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const pageNumbers: number[] = [];
  const peoplePerPageOptions: number[] = [2, 3, 5, peopleList.length];

  for (let i = 1; i <= Math.ceil(peopleList.length / peoplePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="w-auto my-4">
        {loading ? (
          <div className="w-full">
            <div className="text-center py-12">
              <div className="text-3xl text-center">
                In case we have slow connection to the server.
                <br /> We have a Loading screen :{`)`}...
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-auto">
            <div className="w-full ">
              <div className="flex flex-row-reverse w-full mx-10 ">
                <div className="form-control w-full mx-5">
                  <div className="input-group">
                    <input
                      type="text"
                      className="input input-bordered input-md w-full max-w-xs"
                      placeholder="Enter Keyword"
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                      }}
                    />
                    <div className="btn-group">
                      {pageNumbers.map((number) => (
                        <button
                          key={number}
                          className="btn"
                          onClick={() => paginate(number)}
                        >
                          {number}
                        </button>
                      ))}
                    </div>
                    <div className="form-control mx-5">
                      <div className="input-group">
                        <select
                          className="select select-bordered  "
                          value={peoplePerPage}
                          onChange={(e) =>
                            pickPeoplePerPage(parseInt(e.target.value))
                          }
                        >
                          {peoplePerPageOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Company Name</th>
                    <th>Department</th>
                    <th>Started at</th>
                  </tr>
                </thead>
                {currentPeople
                  .filter((peopleList) => {
                    if (searchTerm === "") {
                      return peopleList;
                    } else if (
                      peopleList.firstName
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      peopleList.lastName
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return peopleList;
                    }
                  })
                  .map((peopleList: People) => (
                    <tbody>
                      <tr key={peopleList.id}>
                        <th>
                          <img
                            src={peopleList.avatar.url}
                            alt={peopleList.avatar.alternativeText}
                            width="32"
                            height="32"
                          />
                        </th>
                        <th>{peopleList.id}</th>
                        <th>{peopleList.firstName}</th>
                        <th>{peopleList.lastName}</th>
                        <th>
                          <a href={`mailto:${peopleList.email}`}>
                            {peopleList.email}
                          </a>
                        </th>
                        <th>{peopleList.company.name}</th>
                        <th>{peopleList.company.department}</th>
                        <th>{peopleList.company.startDate}</th>
                      </tr>
                    </tbody>
                  ))}
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PaginationTask;
