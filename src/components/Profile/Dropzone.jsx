import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../features/auth/authSlice';
import Cookies from 'js-cookie';
import authService from '../../services/authService';
import { BtnSpinner } from '../BtnSpinner';

const thumbInner = {
    height: '100px',
    width: '100px',
    objectFit: 'cover'
};

function Dropzone({ token, user }) {
    const [file, setFile] = useState(null);
    const [originalFile, setOriginalFile] = useState(null);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
        accept: 'image/*',
        maxFiles: 1,
        multiple: false,
        onDrop: acceptedFiles => {
            setOriginalFile(acceptedFiles[0]);
            setFile(Object.assign(acceptedFiles[0], {
                preview: URL.createObjectURL(acceptedFiles[0])
            }));
        }
    });

    useEffect(() => {
        if (file) {
            return () => URL.revokeObjectURL(file.preview);
        }
    }, [file]);

    const uploadSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            toast.error('Profile Image Field is empty');
        } else {

            const formData = new FormData();
            formData.append("image", file);

            const data = {
                token,
                image: formData
            };

            setLoading(true);

            try {

                const response = await authService.updateProfileImage(data);

                const { message, user } = response
                dispatch(setUser(user))
                Cookies.set('profile', JSON.stringify(user))

                toast.success(message);

            } catch (error) {

                const message =
                    error?.response?.data?.error ||
                    (error?.response &&
                        error?.response?.data &&
                        error?.response?.data?.message) ||
                    error?.message ||
                    error?.toString();

                toast.error(message);

            } finally {
                setLoading(false);
            }

            setTimeout(() => {
                setFile(null);
            }, 2000);
        }
    };

    const ImageUrl = 'https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/bruce-mars.jpg';

    return (
        <section className="col-sm-auto col-4 position-relative">
            <form encType='multipart/form-data' onSubmit={uploadSubmit}>
                <div className="position-relative">
                    <div style={{ cursor: 'pointer' }} {...getRootProps({ className: 'dropzone upload_image' })}>
                        <div className="upload">Upload</div>
                    </div>
                    {file ? (
                        <div style={thumbInner} className="border-radius-lg shadow-sm">
                            <img
                                src={file.preview}
                                className="border-radius-lg shadow-sm"
                                onLoad={() => { URL.revokeObjectURL(file.preview) }}
                                alt="profile"
                                style={thumbInner}
                            />
                            <input {...getInputProps()} accept="image/*" className="position-absolute inset-0 opacity-0" />
                        </div>
                    ) : (
                        <div className="avatar avatar-xl position-relative p-5">
                            <img style={thumbInner} className="border-radius-lg shadow-sm" src={user?.avatar ? user?.avatar : ImageUrl} alt={user?.name} />
                        </div>
                    )}
                </div>
                <div>
                    <button type='submit' className="btn bg-gradient-info btn-sm mt-3 mb-0"> { loading && <BtnSpinner /> } Upload</button>
                </div>
            </form>
        </section>
    );
}

export default Dropzone;
