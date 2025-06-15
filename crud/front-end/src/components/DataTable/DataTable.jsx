import {ConfigProvider, Table} from "antd";

export default function DataTable({height, identifier, columns, dataSource}) {
  if (!dataSource || dataSource.length === 0) {
    return <div className="text-center text-muted">Nenhum dado disponível</div>;
  }

  const tableTheme = {
    components: {
      Table: {
        colorBgContainer: '#0e1628',
        headerBg: '#13263f',
        headerColor: '#dadada',
        colorText: '#e3e3e3',
        borderColor: '#334155',
        rowHoverBg: '#141e2f'
      },
    },
  };

  return <ConfigProvider theme={tableTheme}>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowKey={identifier}
        pagination={false}
        scroll={{y: height}}
      />
    </ConfigProvider>
}
