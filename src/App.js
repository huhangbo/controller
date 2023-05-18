import { Button, Col, Row, Statistic, Progress} from 'antd';
import { red, green, orange } from '@ant-design/colors';
import {useState} from "react";
import ShowGauge from "./gauge";


const normalColor = '#3f8600'
const abnormalColor = '#cf1322'

export default function App() {
  const [danger, setDanger] = useState(1) // 危险性

  const [oxygen, setOxygen] = useState(15) // 氧气

  const [co2, setCo2] = useState(0) // 二氧化碳

  const [co1, setCo1] = useState(0) // 一氧化碳

  const [degree, setDegree] = useState(0) // 温度

  const [ch4, setCh4] = useState(0) // 甲烷

  const [smoke, setSmoke] = useState(0) // 烟雾



  return (
    <div className="App" style={{maxWidth: 800, width: '80%', margin: '50px auto 0 auto', backgroundColor: 'rgb(33,40,48)', textAlign: 'center'}}>
      <Row style={{color: 'white'}}>
        <Col span={12} push={6} style={{margin: '20px 0 12px 0'}}>
          <h1 className="title" style={{margin: '0 auto'}}>注氮智能化控制系统</h1>
        </Col>
        <Col span={3} push={8} style={{margin: '25px 0 0 0'}}>
          <div className="danger" >
            自燃危险性
            <Progress style={{marginTop: 5}} size={20} showInfo={false} percent={danger/3 * 100} steps={3} strokeColor={[green[6], orange[6], red[6]]} />
          </div>
        </Col>
      </Row>
      <div style={{width: '70%', margin: '0 auto'}}>

        <Row style={ {color: 'white', margin: '40px 0 0 0'}} justify={'space-between'}>

          <Col span={5} >
              <div>
                氧气浓度
              </div>
            <Statistic value={oxygen}  valueStyle={{color: oxygen < 20 ? normalColor: abnormalColor}} precision={2} suffix="%"/>
          </Col>

          <Col span={5}>
            <div>
              二氧化碳浓度
            </div>
            <Statistic  value={co2} valueStyle={{color: co2 > 10 ? normalColor: abnormalColor}} suffix="ppm" />
          </Col>

          <Col span={5}>
            <div>
              温度
            </div>
            <Statistic value={degree} value={co2} valueStyle={{color: degree > 10 ? normalColor: abnormalColor}} suffix="°C" />
          </Col>

        </Row>

        <Row style={ {color: 'white', margin: '40px 0 0 0'}} justify={'space-between'}>
          <Col span={5} >
            <div>
              一氧化碳浓度
            </div>
            <Statistic  value={co1} value={co2} valueStyle={{color:co1 > 10 ? normalColor: abnormalColor}} suffix="ppm" />
          </Col>

          <Col span={5}>
            <div>
              甲烷浓度
            </div>
            <Statistic  value={ch4} value={co2} valueStyle={{color: ch4 > 10 ? normalColor: abnormalColor}} suffix="ppm" />
          </Col>

          <Col span={5}>
            <div>
              烟雾报警器状态
            </div>
            <Statistic value={smoke} valueStyle={{color: smoke <= 100 ? normalColor: abnormalColor}} />
          </Col>

        </Row>

      </div>


      <Row align="middle">
        <Col span={4} offset={3}>
          <div style={{margin: '25px 0'}}>
            <Button type={'default'} ghost={true} onClick={() => {
              // 点击事件
            }}>
              手动注氮按钮
            </Button>
          </div>

          <div style={{margin: '25px 0'}}>
            <Button danger={true} style={{backgroundColor: "transparent"}} onClick={() => {
              // 点击事件
            }}>
              自动布距注氮
            </Button>
          </div>

        </Col>

        <Col span={6} offset={6} style={{marginTop: -60}}>
          <ShowGauge/>
        </Col>
      </Row>

    </div>
  );
}
