import { useMemo, useState } from "react";
import { Card } from "app/domains/Common/components/ui";
import Filter from "app/domains/Common/components/filter/Filter";
import Pagination from "app/domains/Common/components/pagination/Pagination";
import { SuspenseLoader } from "app/domains/Common/components/loaders";
import { useAirlinesData } from "app/domains/hooks/useAirlinesData";
import { getFilteredData } from "utils/helper";
import "./homepage.scss";

const HomePage = () => {
  const { data, isLoading, isError } = useAirlinesData();
  const [checkedValues, setCheckedValues] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState(12);

  const filteredData = getFilteredData(data, checkedValues);

  const airLineCards = useMemo(() => {
    const indexOfLastAirlinesData = currentPage * itemsPerPage;
    const indexOfFirstAirlinesData = indexOfLastAirlinesData - itemsPerPage;
    return filteredData
      ?.slice(indexOfFirstAirlinesData, indexOfLastAirlinesData)
      .map(({ logoURL, site, name, alliance, phone }, i) => (
        <Card
          key={i}
          logoUrl={logoURL}
          title={name}
          alliance={(alliance !== "none" && alliance) || ""}
          phone={phone}
          website={site}
        />
      ));
  }, [currentPage, filteredData, itemsPerPage]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (isError) return <div>Something went wrong !!</div>;

  if (isLoading) return <SuspenseLoader />;

  return (
    <>
      <Filter
        checkedValues={checkedValues}
        setCheckedValues={setCheckedValues}
        setCurrentPage={setCurrentPage}
      />

      <div className="grid-container">{airLineCards}</div>

      <Pagination
        itemsPerPage={itemsPerPage}
        totalAirlinesData={filteredData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};

export default HomePage;
