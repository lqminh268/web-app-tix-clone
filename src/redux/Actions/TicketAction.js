import axios from "axios";
import Swal from "sweetalert2";
import createAction from ".";
import { FETCH_SEAT_LIST } from "redux/Constants/TicketConstants";
import { CLEAR } from "redux/Constants/TicketConstants";

export const bookingTicket = (thongTinVe) => {
    return async(dispatch) => {
        try {
            const accessToken = localStorage.getItem("accessToken")
            Swal.fire({
                title: "Waiting ...",
                text: "Đang xử lý ...",
                icon: "info",
                showConfirmButton: false,
                allowOutsideClick: false
            })
            await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
                method: "POST",
                data: thongTinVe,
                headers: {
                    Authorization: `Bearer ` + accessToken,
                }

            }).then((result) => {
                Swal.fire({
                    title: 'Yeah !!!',
                    text: 'Đặt Vé Thành Công !!!',
                    icon: 'success',
                    allowOutsideClick: false,
                    showConfirmButton: false,
                })
                dispatch(fetchSeatList(thongTinVe.maLichChieu))
                dispatch(createAction(CLEAR, { selectedList: [] }))
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }).catch((err) => {
                Swal.fire({
                    title: 'Oops !!!',
                    text: `${err.response?.data} !!!`,
                    icon: 'error',
                    allowOutsideClick: false
                })
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export const fetchSeatList = (maLichChieu) => {
    return async(dispatch) => {
        try {
            await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: "GET",
            }).then((res) => {
                dispatch(createAction(FETCH_SEAT_LIST, { movieInfor: res.data.thongTinPhim, seatList: res.data.danhSachGhe }))
            }).catch((err) => {
                console.log(err);
            })
        } catch (err) {
            console.log(err);
        }
    }
}