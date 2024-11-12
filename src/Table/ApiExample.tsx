import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import React, { useCallback, useEffect, useState } from "react";
import {
  ColDef,
  RowSelectedEvent,
  SelectionChangedEvent,
} from "ag-grid-community";

const ApiExample: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((res) => setData(res.products));
    };
    fetchData();
  }, []);

  const onRowSelected = useCallback((event: RowSelectedEvent) => {
    console.log(event.data);
  }, []);

  const onSelectionChanged = useCallback((event: SelectionChangedEvent) => {
    const rowCount = event.api.getSelectedNodes().length;
    window.alert("Selection changed, " + rowCount + " rows selected");
  }, []);

  const [columnDefs] = useState<ColDef[]>([
    { field: "id" },
    { field: "brand" },
    { field: "category" },
    { field: "description", flex: 4 },
  ]);

  return (
    <div
      className="ag-theme-quartz"
      style={{ width: "100%", height: "310px", marginBottom: "100px" }}
    >
      <h1>API Example</h1>
      <AgGridReact
        rowData={data}
        columnDefs={columnDefs}
        pagination={true}
        paginationPageSize={10}
        rowSelection="multiple"
        onRowSelected={onRowSelected}
        onSelectionChanged={onSelectionChanged}
      />
    </div>
  );
};

export default ApiExample;
