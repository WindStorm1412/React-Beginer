import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
const UserDetail = (props) => {
    const { UserDetailOpen, setUserDetailOpen, dataDetail, setDataDetail } = props
    return (
        <>
            <Drawer
                title="User Detail"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={() => setUserDetailOpen(false)}
                open={UserDetailOpen}
                UserDetailOpen={UserDetailOpen}
            >
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <span>ID: {dataDetail?._id}</span>
                    <span>FullName: {dataDetail?.fullName}</span>
                    <span>Email: {dataDetail?.email}</span>
                    <span>Phone number: {dataDetail?.phone}</span>
                </div>

            </Drawer>


        </>
    )
}
export default UserDetail;