import { Button } from "react-bootstrap";
import "./pagination.css";

interface PaginationProps {
  total: number;
  limit: number;
  page: any;
  setPage: any;
}

const Pagination: React.FC<PaginationProps> = ({
  total,
  limit,
  page,
  setPage,
}) => {
  const numPages: number = Math.ceil(total / limit);
  return (
    <div className="pagination">
      <Button
        onClick={() => setPage(page - 1)}
        className="btn-prev"
        variant="danger"
        disabled={page === 1}
      >
        &lt;
      </Button>
      {Array(numPages)
        .fill(undefined)
        .map((_, i) => (
          <Button key={i + 1} onClick={() => setPage(i + 1)}>
            {i + 1}
          </Button>
        ))}

      <Button
        onClick={() => setPage(page + 1)}
        className="btn-next"
        variant="danger"
        disabled={page === numPages}
      >
        &gt;
      </Button>
    </div>
  );
};

export default Pagination;
