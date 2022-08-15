import React from "react";
import { Pagination } from "antd";

interface CRUDPaginationProps {
  defaultCurrent: number,
  total: number,
  pageSize: number,
  onPageChange: (page: number, pageSize: number) => void
}

export default function CURDPagiantion(props: CRUDPaginationProps) {

  return (
    <Pagination
      defaultCurrent={props.defaultCurrent}
      total={props.total}
      pageSize={props.pageSize}
      onChange={(page, pageSize) => props.onPageChange(page, pageSize)}
    />
  );
}
