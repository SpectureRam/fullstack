import { Table, Space, Tag } from 'antd';

const UserTable = () => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    // Add more rows of data here
    {
      key: '4',
      name: 'Emily White',
      age: 28,
      address: 'Los Angeles No. 1 Lake Park',
      tags: ['nice', 'manager'],
    },
    {
      key: '5',
      name: 'Michael Smith',
      age: 35,
      address: 'Chicago No. 1 Lake Park',
      tags: ['geek', 'developer'],
    },
    {
      key: '6',
      name: 'Michael Smith',
      age: 35,
      address: 'Chicago No. 1 Lake Park',
      tags: ['geek', 'developer'],
    },
    {
      key: '7',
      name: 'Michael Smith',
      age: 35,
      address: 'Chicago No. 1 Lake Park',
      tags: ['geek', 'developer'],
    },
    {
      key: '8',
      name: 'Michael Smith',
      age: 35,
      address: 'Chicago No. 1 Lake Park',
      tags: ['geek', 'developer'],
    },
    {
      key: '9',
      name: 'Michael Smith',
      age: 35,
      address: 'Chicago No. 1 Lake Park',
      tags: ['geek', 'developer'],
    },
    {
      key: '10',
      name: 'Michael Smith',
      age: 35,
      address: 'Chicago No. 1 Lake Park',
      tags: ['geek', 'developer'],
    },
    {
      key: '11',
      name: 'Michael Smith',
      age: 35,
      address: 'Chicago No. 1 Lake Park',
      tags: ['geek', 'developer'],
    },
    {
      key: '12',
      name: 'Michael Smith',
      age: 35,
      address: 'Chicago No. 1 Lake Park',
      tags: ['geek', 'developer'],
    },
    {
      key: '13',
      name: 'Michael Smith',
      age: 35,
      address: 'Chicago No. 1 Lake Park',
      tags: ['geek', 'developer'],
    },
    {
      key: '14',
      name: 'Michael Smith',
      age: 35,
      address: 'Chicago No. 1 Lake Park',
      tags: ['geek', 'developer'],
    },
    {
      key: '15',
      name: 'Michael Smith',
      age: 35,
      address: 'Chicago No. 1 Lake Park',
      tags: ['geek', 'developer'],
    },
    {
      key: '16',
      name: 'Michael Smith',
      age: 35,
      address: 'Chicago No. 1 Lake Park',
      tags: ['geek', 'developer'],
    },
    {
      key: '17',
      name: 'Michael Smith',
      age: 35,
      address: 'Chicago No. 1 Lake Park',
      tags: ['geek', 'developer'],
    },
    {
      key: '18',
      name: 'Michael Smith',
      age: 35,
      address: 'Chicago No. 1 Lake Park',
      tags: ['geek', 'developer'],
    },
    {
      key: '19',
      name: 'Michael Smith',
      age: 35,
      address: 'Chicago No. 1 Lake Park',
      tags: ['geek', 'developer'],
    },
    {
      key: '20',
      name: 'Michael Smith',
      age: 35,
      address: 'Chicago No. 1 Lake Park',
      tags: ['geek', 'developer'],
    },
    {
      key: '21',
      name: 'Michael Smith',
      age: 35,
      address: 'Chicago No. 1 Lake Park',
      tags: ['geek', 'developer'],
    },
    {
      key: '22',
      name: 'Michael Smith',
      age: 35,
      address: 'Chicago No. 1 Lake Park',
      tags: ['geek', 'developer'],
    },
    {
      key: '23',
      name: 'Michael Smith',
      age: 35,
      address: 'Chicago No. 1 Lake Park',
      tags: ['geek', 'developer'],
    },
    {
      key: '24',
      name: 'Michael Smith',
      age: 35,
      address: 'Chicago No. 1 Lake Park',
      tags: ['geek', 'developer'],
    },
    {
      key: '25',
      name: 'Michael Smith',
      age: 35,
      address: 'Chicago No. 1 Lake Park',
      tags: ['geek', 'developer'],
    },
    
  ];

  return <Table columns={columns} dataSource={data} pagination={{pageSize:10}}/>;
};

export default UserTable;
