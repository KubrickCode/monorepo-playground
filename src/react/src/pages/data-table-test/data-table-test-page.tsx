import { Page } from "~/core/page"; // 적절한 경로로 수정하세요
import { DataTable } from "./data-table"; // DataTable 컴포넌트를 정의한 파일 경로를 사용하세요
import { MockData } from "./mock-data"; // MockData를 정의한 파일 경로를 사용하세요

export const DataTableTestPage = () => {
  return (
    <Page>
      <DataTable
        columns={[
          {
            header: "Name",
            render: ({ data }) => data.name,
          },
          {
            header: "Age",
            render: ({ data }) => data.age,
          },
          {
            header: "Email",
            render: ({ data }) => data.email,
          },
        ]}
        data={MockData}
      />
    </Page>
  );
};
