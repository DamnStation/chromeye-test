import People from "../../utils/Model/PeopleModel";

type Prop = {
  peopleList: People[];
  peoplePerPage: number;
  paginate: (pageNumber: number) => void;
  pickPeoplePerPage: (peoplePerPage: number) => void;
};

function Pagination({
  peopleList,
  peoplePerPage,
  paginate,
  pickPeoplePerPage,
}: Prop) {
  const pageNumbers: number[] = [];
  const peoplePerPageOptions: number[] = [2, 3, 5, peopleList.length];

  const searchByName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    const filteredPeople = peopleList
      .filter((people) => {
        e.preventDefault();
        return (
          people.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
          people.lastName.toLowerCase().includes(searchValue.toLowerCase())
        );
      })
      .slice(0, peoplePerPage);
    paginate(1);
    pickPeoplePerPage(filteredPeople.length);
  };

  for (let i = 1; i <= Math.ceil(peopleList.length / peoplePerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex flex-row-reverse w-full mx-10 px-36">
      <div className="form-control mx-5">
        <div className="input-group">
          <select
            className="select select-bordered w-full max-w-xs"
            value={peoplePerPage}
            onChange={(e) => pickPeoplePerPage(Number(e.target.value))}
          >
            {peoplePerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="btn-group">
        {pageNumbers.map((number) => (
          <button key={number} className="btn" onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
      </div>
      <div className="form-control mx-5">
        <div className="input-group">
          <input
            type="text"
            className="input input-bordered input-md w-full max-w-xs"
            placeholder="Search"
            onChange={searchByName}
          />
        </div>
      </div>
    </div>
  );
}

export default Pagination;
