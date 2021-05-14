import React from 'react'
// css
import './index.scss'
// api
import { getItemDetailInfo } from '../../mock'

// img 
import ruleImg from '../../assets/integral_details_rule@2x.png'
// import rewardImg from '../../assets/integral_reward_title@2x.png'
// import rewardIcon from '../../assets/integral_message_icon@2x.png'

class IntegralDetail extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      details: [],
      intro:''
    }
  }

  componentDidMount(){
    this.initData()
  }

  // 查看规则
  ruleClick() {
    console.log('查看规则')
  }

  // 初始化数据
  initData = async (params) =>{
   const res = await getItemDetailInfo(params)
    if (res.code !== 100) return
    const { details, intro} =  res.data
    this.setState({
      details: details,
      intro: intro
    })
  }

  render() {
    return (
      <div className="detail-container">
        <img className="detail-rule" src={ruleImg} alt="查看规则" onClick={this.ruleClick.bind(this)}></img>
        <div className="detail-title">
          <span className="detail-title__number">1200分</span>
        </div>
        <div className="detail-content">
          {
            this.state.details.map((item,index) => {
              return(
                <div className="detail-content__item" key={item.desc + index}>
                  <div className="detail-content__item-wraper">
                    <span className="detail-content__title">{item.desc}</span>
                    <span className="detail-content__score">+{item.score} 积分</span>
                  </div>
                  <div className="detail-content__time">{item.time}</div>
                </div>
              )
            })
          }
          
        </div>
      </div>
    )
  }
}

export default IntegralDetail