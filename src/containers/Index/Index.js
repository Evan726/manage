import React from 'react';
import Icon from 'antd/lib/icon';
import Breadcrumb from 'antd/lib/breadcrumb';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';


import echarts from 'echarts';

//自定义组件
export default class Index extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(2,document.getElementById('echart_main'))
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart_main'));
        var option = {
            title: {
                text:"折线图",
                show:false
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {

            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                top:"2%",
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'联盟广告',
                    type:'line',
                    stack: '总量',
                    //areaStyle: {normal: {}},
                    data:[220, 182, 191, 234, 290, 330, 310]
                }
            ]
        };
        // 绘制图表
        myChart.setOption(option);
    }
    render() {
        console.log(1)
        return (
            <div className="s_content s_p1">
                <div className="s_breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item href="">
                            <Icon type="home" />
                            <span>首页</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <Row gutter={16} className="s_m_b16">
                    <Col span={4}>
                        <div className="s_panel_b s_p1 s_p2">
                            sdf
                        </div>
                    </Col>
                    <Col span={4}>
                        <div className="s_panel_b s_p1 s_p2">
                            sdf
                        </div>
                    </Col>
                    <Col span={4}>
                        <div className="s_panel_b s_p1 s_p2">
                            sdf
                        </div>
                    </Col>
                    <Col span={4}>
                        <div className="s_panel_b s_p1 s_p2">
                            sdf
                        </div>
                    </Col>
                    <Col span={4}>
                        <div className="s_panel_b s_p1 s_p2">
                            sdf
                        </div>
                    </Col>
                    <Col span={4}>
                        <div className="s_panel_b s_p1 s_p2">
                            sdf
                        </div>
                    </Col>
                </Row>
                <Row gutter={16} className="s_m_b16">
                    <Col span={12}>
                        <div className="s_panel_b">
                            <div className="s_title">
                                图表
                            </div>
                            <div className="s_p1 s_p2">
                                <div id="echart_main" style={{height:"400px"}}></div>
                            </div>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="s_panel_b s_p1 s_p2">
                            sdf
                        </div>
                    </Col>
                </Row>
                <Row gutter={16} className="s_m_b16">
                    <Col span={12}>
                        <div className="s_panel_b s_p1 s_p2">
dfsg
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="s_panel_b s_p1 s_p2">
                            sdf
                        </div>
                    </Col>
                </Row>
                <Row gutter={16} className="s_m_b16">
                    <Col span={17}>
                        <div className="s_panel_b s_p1 s_p2">
                            sdf
                        </div>
                    </Col>
                    <Col span={7}>
                        <div className="s_panel_b s_p1 s_p2">
                            sdf
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}