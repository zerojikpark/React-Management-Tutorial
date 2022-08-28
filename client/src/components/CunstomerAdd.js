import React from 'react';
import {post} from 'axios';

class CustomerAdd extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: ''
        }
    }

    handleFormSubmit = (e) => { //내부적 이벤트(e)에 의해 발생
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
            })
        this.setState({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: ''
        })
        window.location.reload();
    }

    handleFileChange = (e) => { //내부적 이벤트(e)에 의해 발생
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => { //내부적 이벤트(e)에 의해 발생
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        const config ={ //전달할 데이터에 파일이 포함될 경우 선언해 줘야 한다.
            header: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    render() {
        return(
            <form onSubmit={this.handleFormSubmit}>
                <h1>고객 추가</h1>
                프로필 이미지: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br/>
                이름: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br/>
                생년월일: <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/>
                성별: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
                직업: <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange}/><br/>
                <button type="submit">추가하기</button>
            </form>
        )
    }
}

//외부 라이브러리에서 사용할 수 있게 export를 해준다.
export default CustomerAdd;