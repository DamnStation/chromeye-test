import { useState } from "react";
import useGetData from "../../utils/Data/useGetData";
import PaginationTaskView from "./PaginationTaskView";
import Pagination from "./Pagination";

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

  return (
    <>
      <Pagination
        peoplePerPage={peoplePerPage}
        peopleList={peopleList}
        paginate={paginate}
        pickPeoplePerPage={pickPeoplePerPage}
      />
      <PaginationTaskView peopleList={currentPeople} loading={loading} />
    </>
  );
}

export default PaginationTask;
