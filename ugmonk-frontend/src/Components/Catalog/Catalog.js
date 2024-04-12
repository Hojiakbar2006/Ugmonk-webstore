import { acCurrentCatalog } from "../../Redux/CurrentCatalog";
import "./Catalog.css";
import { useDispatch, useSelector } from "react-redux";

export function Catalog() {
  const dispatch = useDispatch();
  const currentCatalog = useSelector((state) => state.currentCatalog);
  const catalogArr = useSelector((state) => state.catalog);
  const catalog = [{ name: "All" }, { name: "Most viewed" }, ...catalogArr];

  return (
    <div className="catalog">
      {catalog.map((item, index) => {
        return (
          <button
            className={currentCatalog.name === item.name ? "active" : ""}
            key={index}
            onClick={() =>
              currentCatalog.name === item.name
                ? {}
                : dispatch(acCurrentCatalog(item))
            }
          >
            {item.name}
            {item.most_view ? item.most_view : ""}
          </button>
        );
      })}
    </div>
  );
}
