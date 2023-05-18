import { Button, Col, Row, Statistic, Progress} from 'antd';
import { red, green, orange } from '@ant-design/colors';
import {useState} from "react";
import ShowGauge from "./gauge";


const normalColor = '#3f8600'
const abnormalColor = '#cf1322'

export default function App() {
  const [danger, setDanger] = useState(1) // 危险性

  const [oxygen, setOxygen] = useState(0) // 氧气

  const [co2, setCo2] = useState(0) // 二氧化碳

  const [co1, setCo1] = useState(0) // 一氧化碳

  const [degree, setDegree] = useState(0) // 温度

  const [ch4, setCh4] = useState(0) // 甲烷

  const [smoke, setSmoke] = useState('正常') // 烟雾

  const [n2, setN2] = useState(0) // 氮气

  const [autoColor, setAutoColor] = useState(abnormalColor)

  const [numColor, setNumColor] = useState(normalColor)


  const auto = () => {
    let timeCount = 0
    let tmpOxygen = 21
    let tmpCo2 = 2200
    let tmpDegree = 26
    let tmpCo1 = 2
    let tmpCh4 = 3000
    let tmpN2 = 0

    setNumColor(normalColor)
    setOxygen(tmpOxygen)


    const interval = setInterval(() => {
      timeCount++
      if (timeCount === 10) {
        clearInterval(interval)

        const tmpInterval = setInterval(() =>{
          timeCount++
          if (timeCount === 30 ) {
            clearInterval(tmpInterval)
          }

          setAutoColor(normalColor)

          if (timeCount === 20) {
            setDanger(1)
          }

          tmpOxygen -= 0.5
          setOxygen(tmpOxygen)

          tmpCo2 -= 100 + parseFloat((Math.random() * 150).toFixed(1))
          setCo2(tmpCo2)

          tmpDegree -= 0.1
          setDegree(tmpDegree)

          tmpCo1 -= 0.2 + parseFloat((Math.random() * 0.1).toFixed(2))
          setCo1(tmpCo1)

          tmpCh4 -= 50 + parseFloat((Math.random() * 50).toFixed(1))
          setCh4(tmpCh4)

          if (timeCount <= 13) {
            tmpN2 += 300
            setN2(tmpN2)
          }

          if (timeCount >= 28) {
            tmpN2 -= 300
            setN2(tmpN2)
          }



        }, 1000)

      }
      if (timeCount === 5) {
        setDanger(2)
      }

      tmpOxygen -= 0.08
      setOxygen(tmpOxygen)

      tmpCo2 += 100 + parseFloat((Math.random() * 100).toFixed(1))
      setCo2(tmpCo2)

      tmpDegree += 0.2
      setDegree(tmpDegree)

      tmpCo1 += 0.5 + parseFloat((Math.random() * 0.5).toFixed(2))
      setCo1(tmpCo1)


      tmpCh4 += 100 + parseFloat((Math.random() * 100).toFixed(1))
      setCh4(tmpCh4)

    }, 1000)

  }

  const handle = () => {
    let timeCount = 0
    let tmpOxygen = 20
    let tmpCo2 = 2200
    let tmpDegree = 30
    let tmpCo1 = 20
    let tmpCh4 = 3000
    let tmpN2 = 0

    setDanger(3)
    setSmoke('异常')
    setNumColor(abnormalColor)

    const interval = setInterval(()=> {
      timeCount++
      if (timeCount === 5) {
        clearInterval(interval)
        const tmpInterval = setInterval(() => {
          timeCount++
          if (timeCount === 20) {
            clearInterval(tmpInterval)
          }

          tmpOxygen -= 0.8
          setOxygen(tmpOxygen)

          tmpCo2 -= 400 + parseFloat((Math.random() * 400).toFixed(1))
          setCo2(tmpCo2)

          tmpDegree -= 0.5
          setDegree(tmpDegree)

          tmpCo1 -= 2 + parseFloat((Math.random() * 1).toFixed(2))
          setCo1(tmpCo1)

          tmpCh4 -= 400 + parseFloat((Math.random() * 5).toFixed(1))
          setCh4(tmpCh4)

        }, 1000)
      }

      tmpOxygen--
      setOxygen(tmpOxygen)

      tmpCo2 += 1000 + parseFloat((Math.random() * 1000).toFixed(1))
      setCo2(tmpCo2)

      tmpDegree += 3
      setDegree(tmpDegree)

      tmpCo1 += 5 + parseFloat((Math.random() * 2).toFixed(2))
      setCo1(tmpCo1)

      tmpCh4 += 1000 + parseFloat((Math.random() * 1000).toFixed(1))
      setCh4(tmpCh4)

      tmpN2 += 270
      setN2(tmpN2)

    }, 1000)


  }




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

          <Col span={6} >
              <div>
                氧气浓度
              </div>
            <Statistic value={oxygen}  valueStyle={{color: numColor}} precision={2} suffix="%"/>
          </Col>

          <Col span={6}>
            <div>
              二氧化碳浓度
            </div>
            <Statistic  value={co2} valueStyle={{color: numColor}} precision={1} suffix="ppm" />
          </Col>

          <Col span={6}>
            <div>
              温度
            </div>
            <Statistic value={degree} valueStyle={{color: numColor}} precision={1} suffix="°C" />
          </Col>

        </Row>

        <Row style={ {color: 'white', margin: '40px 0 0 0'}} justify={'space-between'}>
          <Col span={6} >
            <div>
              一氧化碳浓度
            </div>
            <Statistic  value={co1} valueStyle={{color: numColor}} precision={1} suffix="ppm" />
          </Col>

          <Col span={6}>
            <div>
              甲烷浓度
            </div>
            <Statistic  value={ch4}  valueStyle={{color: numColor}} precision={1} suffix="ppm" />
          </Col>

          <Col span={6}>
            <div>
              烟雾报警器状态
            </div>
            <Statistic value={smoke} valueStyle={{color: smoke === '正常' ? normalColor: abnormalColor}} />
          </Col>

        </Row>

      </div>


      <Row align="middle">
        <Col span={4} offset={3}>
          <div style={{margin: '25px 0'}}>
            <Button type={'default'} ghost={true} onClick={handle}>
              手动注氮按钮
            </Button>
          </div>

          <div style={{margin: '25px 0'}}>
            <Button style={{color: autoColor ,backgroundColor: "transparent", borderColor: autoColor}} onClick={auto}>
              自动布距注氮
            </Button>
          </div>

        </Col>

        <Col span={6} offset={6} style={{marginTop: -60}}>
          <ShowGauge n2={n2}/>
        </Col>
      </Row>

    </div>
  );
}
