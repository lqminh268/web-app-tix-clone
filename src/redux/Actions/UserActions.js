import axios from "axios";
import Swal from "sweetalert2";
import createAction from ".";
import { FETCH_DETAIL_USER, FETCH_USER_LIST, SEARCH_USER, SET_CREATED, SET_DELETED, SET_EDITED, SET_LOGIN, SET_POPUP, SET_REDIRECT } from '../Constants/UserConstants'

export const fetchUserInfo = (page, pageSize) => {
    return async (dispatch) => {
        try {
            await axios({
                url:
                    `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP09&soTrang=${page}&soPhanTuTrenTrang=${pageSize}`,
                method: "GET",
            }).then(res => {
                dispatch(createAction(FETCH_USER_LIST, res.data))
            }).catch(err => {
                // console.log(err);
            })

        } catch (err) {
            // console.log(err);
        }
    };
};

export const login = (form) => {
    return async (dispatch) => {
        try {
            Swal.fire({
                title: "Waiting ...",
                text: "Đang xử lý ...",
                icon: "info",
                showConfirmButton: false,
                allowOutsideClick: false
            })
            await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
                method: "POST",
                data: form,
            }).then(res => {
                // let maNguoiDung = res.data.maLoaiNguoiDung;
                // if (maNguoiDung !== "QuanTri") {
                //     Swal.fire(
                //         'Oops !!!',
                //         'Bạn không có quyền truy cập vào hệ thống này !!!',
                //         'error'
                //     )
                //     return;
                // }
                // let error = res.status;
                localStorage.setItem("accessToken", res.data.accessToken);
                localStorage.setItem("currentUser", JSON.stringify(res.data));
                // console.log(res.data);
                dispatch(createAction(SET_LOGIN, res.data));
                Swal.fire(
                    'Yeah !!!',
                    'Đăng nhập thành công !!!',
                    'success'
                )
            }).catch(err => {
                // console.log(err);
                Swal.fire('Opps !!!', 'Tài khoản hoặc mật khẩu không hợp lệ, hãy thử lại !!!', 'error')
            })

        } catch (err) {
            // console.log(err);
        }
    };
};

export const getDataUser = (taiKhoan,matKhau) => {
    return async (dispatch) => {
        try {
            await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
                method: "POST",
                data: {
                    taiKhoan: taiKhoan,
                    matKhau: matKhau
                }
            }).then(res => {
                localStorage.setItem("accessToken", res.data.accessToken);
                localStorage.setItem("currentUser", JSON.stringify(res.data));
                // console.log(res.data);
                dispatch(createAction(SET_LOGIN, res.data));
            }).catch(err => {
                // console.log(err);
            })

        } catch (err) {
            // console.log(err);
        }
    };
};

export const signup = (form) => {
    return async (dispatch) => {
        try {
            Swal.fire({
                title: "Waiting ...",
                text: "Đang xử lý ...",
                icon: "info",
                showConfirmButton: false,
                allowOutsideClick: false
            })
            await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
                method: "POST",
                data: form,
            }).then(res => {
                dispatch(createAction(SET_REDIRECT, true));
                Swal.fire(
                    'Yeah !!!',
                    'Đăng Kí Tài Khoản thành công !!!',
                    'success'
                )
            }).catch(err => {
                // console.log(err);
                Swal.fire('Oops !!!', `${err.response.data}`, 'error')
            })

        } catch (err) {
            // console.log(err);
        }
    };
};


export const editUser = (form) => {
    return (dispatch) => {
        try {
            const accessToken = localStorage.getItem("accessToken")
            Swal.fire({
                title: "Waiting ...",
                text: "Đang xử lý ...",
                icon: "info",
                showConfirmButton: false,
                allowOutsideClick: false
            })
            axios({
                url:
                    `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
                method: "PUT",
                data: form,
                headers: {
                    Authorization: `Bearer ` + accessToken,
                }
            }).then((res) => {
                dispatch(createAction(SET_EDITED, true));
                Swal.fire({
                    title: 'Yeah !!!',
                    text: 'Chỉnh Sửa Người Dùng Thành Công !!!',
                    icon: 'success',
                    allowOutsideClick: false
                })
                dispatch(createAction(SET_POPUP, false));
            }).catch(err => {
                Swal.fire('Oops !!!', `${err.response.data}`, 'error')
            })

        } catch (err) {
            Swal.fire('Oops !!!', 'Có lỗi trong quá trình chỉnh sửa, xin hãy kiểm tra lại !!!', 'error')
        }
    };
};

export const editProfile = (form) => {
    return (dispatch) => {
        try {
            const accessToken = localStorage.getItem("accessToken")
            Swal.fire({
                title: "Waiting ...",
                text: "Đang xử lý ...",
                icon: "info",
                showConfirmButton: false,
                allowOutsideClick: false
            })
            axios({
                url:
                    `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
                method: "PUT",
                data: form,
                headers: {
                    Authorization: `Bearer ` + accessToken,
                }
            }).then((res) => {
                dispatch(createAction(SET_EDITED, true));
                Swal.fire({
                    title: 'Yeah !!!',
                    text: 'Cập Nhật Thông Tin Thành Công !!!',
                    icon: 'success',
                    allowOutsideClick: false
                })
                dispatch(getDataUser(res.data.taiKhoan, res.data.matKhau))
                dispatch(fetchDetailUserPage(form.taiKhoan))
                dispatch(createAction(SET_POPUP, false));
            }).catch(err => {
                Swal.fire('Oops !!!', `${err.response.data}`, 'error')
            })

        } catch (err) {
            Swal.fire('Oops !!!', 'Có lỗi trong quá trình cập nhật, xin hãy kiểm tra lại !!!', 'error')
        }
    };
};

export const deleteUser = (taiKhoan) => {
    return (dispatch) => {
        try {
            const accessToken = localStorage.getItem("accessToken")
            Swal.fire({
                title: "Waiting ...",
                text: "Đang xử lý ...",
                icon: "info",
                showConfirmButton: false,
            })
            axios({
                url:
                    `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ` + accessToken,
                }
            }).then((res) => {
                Swal.fire({
                    title: 'Yeah !!!',
                    text: 'Xóa Người Dùng Thành Công !!!',
                    icon: 'success',
                    allowOutsideClick: false
                })
                dispatch(createAction(SET_DELETED, true));
            }).catch(err => {
                Swal.fire({
                    title: 'Oops !!!',
                    text: `${err.response?.data} !!!`,
                    icon: 'error',
                    allowOutsideClick: false
                })
            })
        } catch (err) {
            // console.log(err);
        }
    }
}
export const createUser = (form) => {
    return (dispatch) => {
        try {
            const accessToken = localStorage.getItem("accessToken")
            Swal.fire({
                title: "Waiting ...",
                text: "Đang xử lý ...",
                icon: "info",
                showConfirmButton: false,
                allowOutsideClick: false
            })
            axios({
                url:
                    `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung`,
                method: "POST",
                data: form,
                headers: {
                    Authorization: `Bearer ` + accessToken,
                }
            }).then((res) => {
                Swal.fire({
                    title: 'Yeah !!!',
                    text: 'Tạo Người Dùng Thành Công !!!',
                    icon: 'success',
                    allowOutsideClick: false
                })
                dispatch(createAction(SET_POPUP, false));
                dispatch(createAction(SET_CREATED, true));
            }).catch(err => {
                // console.log(err);
                Swal.fire({
                    title: 'Oops !!!',
                    text: `${err.response?.data} !!!`,
                    icon: 'error',
                    allowOutsideClick: false
                })
            })
        } catch (err) {
            // console.log(err);
        }
    }
}
export const fetchDetailUser = (taiKhoan) => {
    return (dispatch) => {
        try {
            Swal.fire({
                title: "Waiting ...",
                text: "Đang xử lý ...",
                icon: "info",
                showConfirmButton: false,
                allowOutsideClick: false
            })
            axios({
                url:
                    `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
                method: "POST",
                data: {
                    taiKhoan,
                },
            }).then((res) => {
                Swal.close()
                dispatch(createAction(FETCH_DETAIL_USER, { detailUser: res.data, isDetail: true }))
            }).catch(err => {
                // console.log(err);
            })
        } catch (err) {
            // console.log(err);
        }
    }
}

export const fetchDetailUserPage = (taiKhoan) => {
    return (dispatch) => {
        try {
            axios({
                url:
                    `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
                method: "POST",
                data: {
                    taiKhoan,
                },
            }).then((res) => {
                dispatch(createAction(FETCH_DETAIL_USER, { isDetail: true, detailUser: res.data }))
            }).catch(err => {
                // console.log(err);
            })
        } catch (err) {
            // console.log(err);
        }
    }
}

export const searchUser = (keyword, page, pageSize) => {
    return async (dispatch) => {
        try {
            await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=GP09&tuKhoa=${keyword}&soTrang=${page}&soPhanTuTrenTrang=${pageSize}`,
                method: 'GET'
            }).then((res) => {
                dispatch(createAction(SEARCH_USER, res.data))
            }).catch(err => {
                Swal.fire({
                    title: 'Oops !!!',
                    text: `${err.response?.data} !!!`,
                    icon: 'error',
                    allowOutsideClick: false
                })
            })
        } catch (err) {
            // console.log(err);
        }
    }
}