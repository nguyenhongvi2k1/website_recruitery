// Trong file React Component của bạn
import Link from "next/link";

const Pagination = () => {
  const pageCount = 5; // Số lượng trang, bạn có thể thay đổi theo nhu cầu

  return (
    <ul className="pagination">
      {[...Array(pageCount)].map((_, index) => (
        <li key={index}>
          <Link href={`/page/${index + 1}`} className="pagination-link">
            {index + 1}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
