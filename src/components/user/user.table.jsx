import { Space, Table, Tag } from 'antd';
import { getAllUserAPI } from '../../services/api.services';
import { useEffect, useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateUserModal from './user.update.modal';
const UserTable = (props) => {
    const { dataUser } = props

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <>
                        <a href='#'> {record._id}</a>
                    </>
                )
            }

        },
        {
            title: 'FullName',
            dataIndex: 'fullname',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <EditOutlined style={{ cursor: "pointer", color: "orange" }} /> {record.name}
                        <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                    </div>

                </>

            ),
        },

    ];
    // const data = [
    //     {
    //         key: '1',
    //         name: 'John Brown',
    //         age: 32,
    //         address: 'New York No. 1 Lake Park',
    //         tags: ['nice', 'developer'],
    //     },
    //     {
    //         key: '2',
    //         name: 'Jim Green',
    //         age: 42,
    //         address: 'London No. 1 Lake Park',
    //         tags: ['loser'],
    //     },
    //     {
    //         key: '3',
    //         name: 'Joe Black',
    //         age: 32,
    //         address: 'Sydney No. 1 Lake Park',
    //         tags: ['cool', 'teacher'],
    //     },
    // ];

    return (
        <>
            <Table columns={columns} dataSource={dataUser} rowKey={"_id"} />
            <UpdateUserModal />
        </>
    )

}
export default UserTable