/// <reference types="react" />
import "./pagination.css";
interface PaginationProps {
    total: number;
    limit: number;
    page: any;
    setPage: any;
}
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
