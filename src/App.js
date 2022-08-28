import React from 'react';
import Customer from './components/Customer';
import './App.css';
import paper from '@material-ui/core/paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from "@material-ui/core/styles";

const styles = them => ({
  root: { //전체 바깥쪽에 해당
    with: '100%',
    marginTop: them.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {  //화면크기가 줄어들어도 무조건 전체에 1080px은 table이 먹는다.
    minWidth: 1080
  }
})

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1', /*랜덤으로 이미지를 보여주는 사이트 주소*/
    'name' : '홍길동',
    'birthday' : '961222',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2', /*랜덤으로 이미지를 보여주는 사이트 주소*/
    'name' : '태연',
    'birthday' : '961222',
    'gender' : '여자',
    'job' : '대학생'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3', /*랜덤으로 이미지를 보여주는 사이트 주소*/
    'name' : '이순신',
    'birthday' : '961222',
    'gender' : '여자',
    'job' : '대학생'
  }
]

class App extends React.Component {
  render(){
    const {classes} = this.props; //위에서 정의한 style 적용
    return (
        <paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                //Map을 사용하려면 key라는 props를 꼭 사용해야 한다.
                customers.map( c => {
                  return(
                      <Customer
                          key={c.id}
                          id={c.id}
                          image={c.image}
                          name={c.name}
                          birthday={c.birthday}
                          gender={c.gender}
                          job={c.job}
                      />
                  );
                })
              }
            </TableBody>
          </Table>
        </paper>
    );
  }
}

export default withStyles(styles) (App);
