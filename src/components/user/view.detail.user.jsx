import { Button, Drawer, notification } from 'antd';
import React, { useState } from 'react';
import { handleUploadFile, UpdateUserAvatar } from '../../services/api.services';
const UserDetail = (props) => {
    const { UserDetailOpen, setUserDetailOpen, dataDetail, setDataDetail, loadUser } = props
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const handleUploadAvatar = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null);
            setPreview(null);
            return
        }
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    }
    const handleUpdateUserAvatar = async () => {
        //step 1:Upload file
        const res = await handleUploadFile(selectedFile, "avatar")
        if (res.data) {
            const newavatar = res.data.fileUploaded
            // step2:Update user
            const resUpdateAvatar = await UpdateUserAvatar(newavatar, dataDetail._id, dataDetail.fullName, dataDetail.phone)
            if (resUpdateAvatar) {
                notification.success({
                    message: "Update avatar",
                    description: "Cập nhât thành công avatar"
                })
                setUserDetailOpen(false)
                setSelectedFile(null);
                setPreview(null);
                await loadUser()
            }
            else {
                notification.error({
                    message: "Error Update avatar",
                    description: JSON.stringify(resUpdateAvatar.message)
                })
                return;
            }

        } else {
            notification.error({
                message: "Error Upload file",
                description: JSON.stringify(res.message)
            })
            return;
        }

    }
    return (
        <>
            <Drawer
                width="40vw"
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
                    <div>
                        <img src={`${import.meta.env.VITE_URL_AVATAR}${dataDetail?.avatar}`} alt="Avatar" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                    </div>
                </div>
                <div>
                    <label htmlFor="btnUpload" style={{ display: "block", backgroundColor: "orange", width: "fit-content" }}>Upload_Avt</label>
                    <input
                        onChange={(event) => { handleUploadAvatar(event) }}
                        type='file' id='btnUpload' hidden />
                </div>
                {preview &&
                    <>
                        <div>
                            <img src={`${preview}`} alt="Avatar" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                        </div>
                        <Button
                            onClick={() => { handleUpdateUserAvatar() }}

                            type='primary'>Save</Button>
                    </>
                }

            </Drawer>


        </>
    )
}
export default UserDetail;