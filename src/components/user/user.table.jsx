import { Space, Table, Tag } from 'antd';
import { getAllUserAPI } from '../../services/api.services';
import { useEffect, useState } from 'react';
const UserTable = () => {
    const [dataUser, setDataUser] = useState([])
    useEffect(() => {
        loadUser()
    }, [])
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',

        },
        {
            title: 'FullName',
            dataIndex: 'fullname',

        },
        {
            title: 'Email',
            dataIndex: 'email',

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
    const loadUser = async () => {
        const result = await getAllUserAPI()
        setDataUser(result.data)

    }

    return (<Table columns={columns} dataSource={dataUser} rowKey={"_id"} />)

}
export default UserTable