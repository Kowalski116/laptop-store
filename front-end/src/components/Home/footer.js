import React from 'react'
import { Container, Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
const Footer = () => {
    return ( 
        <>
        <Container maxWidth = "lg">
        <Grid container spacing={3}>
        <Grid item xs>
        <ul>
            <li>Lịch sử mua hàng</li>
            <li>Tìm hiểu về mua trả góp</li>
            <li>Chính sách bảo hành</li>
            <li>Chính sách đổi trả</li>
            <li>Xem thêm</li>
        </ul>
        </Grid>
        <Grid item xs>
        <ul>
            <li>Giới thiệu công ty (mwg.vn)</li>
            <li>Tuyển dụng</li>
            <li>Gửi góp ý, khiếu nại</li>
            <li>Tìm siêu thị (2.427 shop)</li>
            <li>Xem bản mobile</li>
        </ul>
        </Grid>
        <Grid item xs>
        <ul>
            <li>Gọi mua hàng 1800.1060 (7:30 - 22:00)</li>
            <li>Gọi khiếu nại   1800.1062 (8:00 - 21:30)</li>
            <li>Gọi bảo hành   1800.1064 (8:00 - 21:00)</li>
            <li>Kỹ thuật       1800.1763 (7:30 - 22:00)</li>
        </ul>
        </Grid>
      </Grid>
        </Container>
       
        
  DMCA.com Protection Status
        <Typography variant="subtitle1">© 2018. Công ty cổ phần Thế Giới Di Động. GPDKKD: 0303217354 do sở KH & ĐT TP.HCM cấp ngày 02/01/2007. GPMXH: 238/GP-BTTTT do Bộ Thông Tin và Truyền Thông cấp ngày 04/06/2020. Địa chỉ: 128 Trần Quang Khải, P. Tân Định, Q.1, TP.Hồ Chí Minh. Điện thoại: 028 38125960. Email: cskh@thegioididong.com.
Chịu trách nhiệm nội dung: Huỳnh Văn Tốt. Xem chính sách sử dụng</Typography>
        </>
     );
}
 
export default Footer;