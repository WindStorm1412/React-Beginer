import { notification, Popconfirm, Space, Table, Tag } from 'antd';
import { deleteUserAPI, getAllUserAPI } from '../../services/api.services';
import { useEffect, useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateUserModal from './user.update.modal';
import UserDetail from './view.detail.user';

const UserTable = (props) => {
    const { dataUser, loadUser } = props
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false)
    const [dataUpdate, setDataUpdate] = useState(null)
    const [UserDetailOpen, setUserDetailOpen] = useState(false);
    const [dataDetail, setDataDetail] = useState(null)
    const [deleteUserOpen, setDeleteUserOpen] = useState(false)

    const handleDeleteUser = async (id) => {
        const res = await deleteUserAPI(id)
        if (res.data) {
            notification.success({
                message: "Delete User",
                description: "Success"

            })
            await loadUser()

        }
        else {
            notification.error({
                message: "Delete User",
                description: "Failed"
            })
            await loadUser()
        }
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <>
                        <a href='#' onClick={() => { setDataDetail(record), setUserDetailOpen(true) }}> {record._id}</a>
                    </>
                )
            },


        },
        {
            title: 'FullName',
            dataIndex: 'fullName',

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
                        <EditOutlined
                            onClick={() => { setDataUpdate(record), setIsModalUpdateOpen(true) }}
                            style={{ cursor: "pointer", color: "orange" }} /> {record.name}
                        <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this task?"
                            onConfirm={() => { handleDeleteUser(record._id) }}
                            // onCancel={cancel}
                            okText="Yes"
                            cancelText="No">
                            <DeleteOutlined
                                style={{ cursor: "pointer", color: "red" }} />
                        </Popconfirm>


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
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
            <UserDetail
                UserDetailOpen={UserDetailOpen}
                setUserDetailOpen={setUserDetailOpen}
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
            />

        </>
    )

}
export default UserTable