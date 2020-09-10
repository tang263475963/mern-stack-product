import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import Slides from './Slides'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>หน้าหลัก</h2>
                <hr />
                <Slides />
                <Jumbotron>
                    <h1 className="display-3">Content !!</h1>
                    <p className="lead">เว็บบล็อกเป็นเว็บไซต์ที่ได้รับความนิยมในการแสดงความคิดเห็นของผู้เขียน
                    มีการแลกเปลี่ยนความรู้ในด้านต่าง ๆ ก่อให้เกิดเป็นแหล่งความรู้ใหม่ ๆ ให้ผู้คนได้เข้ามาศึกษา ...</p>
                    <hr className="my-2" />
                    <p>ยินดีต้อนรับเข้าสู้เว็บไซต์ 👍</p>
                    <p className="lead">
                        <Button color="warning">Blog !</Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}
