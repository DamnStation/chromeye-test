import useGetData from "../../utils/Data/useGetData";
import People from "../../utils/Model";

function TaskPagination() {
  const { peopleList, loading } = useGetData();

  return (
    <div className="text-center my-4">
      <h1>Pagination Task Component:</h1>
      {loading ? (
        <div className="w-full">
          <div className="text-center py-12">
            <div className="text-3xl text-center">
              In case we have slow connection to the server.
              <br /> We have a Loading screen :)...
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-auto">
          <div className="overflow-x-auto ">
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
              {peopleList.map((peopleList: People) => (
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
                    <th>{peopleList.email}</th>
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
  );
}

export default TaskPagination;
