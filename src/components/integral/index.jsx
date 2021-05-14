import React from 'react'
// css
import './index.scss'
// api
import { getItemInfo } from '../../mock'
// img 
import ruleImg from '../../assets/integral_rule_title@2x.png'
import rewardImg from '../../assets/integral_reward_title@2x.png'
import rewardIcon from '../../assets/integral_message_icon@2x.png'

class Integral extends React.Component {
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
  // 初始化数据
  initData = async (params) =>{
   const res = await getItemInfo(params)
    if (res.code !== 100) return
    const { details, intro} =  res.data
    this.setState({
      details: details,
      intro: intro
    })
  }
  
  render() {
    return (
      <div className='container'>
        {/* 积分规则说明 */}
        <img src={ruleImg} className="integralReward" alt="积分规则说明"/>
        {/* 积分规则说明详情 */}
        <div className='integralRuleWraper'>
          {
            this.state.details.map((item,index)=> {
              return <div key={item.desc + index} className='integralRuleItem'>{item.desc} <span className='integralRuleItemNumber'>{'+' + item.score + ' 分'}</span></div>
            })
          }
        </div>
        {/* 积分奖励说明 */}
        <img src={rewardImg} className="integralReward" alt="积分奖励说明"/>
        {/* 积分奖励说明详情 */}
        <div className="integralRewardWraper">
          {this.state.intro}
          <img src={rewardIcon} className="integralRewardIcon" alt="icon"/>
        </div>
      </div>
    )
  }
}

export default Integral