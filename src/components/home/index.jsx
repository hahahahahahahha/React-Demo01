import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list: [{
        'name': '积分',
        id: 111,
        path:'/integral/'
      },
      {
        'name': '积分详情',
        id: 222,
        path: '/integralDetail/'
      }]
    }
  }

  linkClick(item) {
    this.props.history.push(item.path + item.id)
  }

  render() { 
    return (
    <ul>
      {this.state.list.map((item,index)=> {
        return (
          <li onClick={this.linkClick.bind(this, item)} key={item.id}> {item.name} </li>
        )
      })}
    </ul> 
    )
  }
}
 
export default Home;