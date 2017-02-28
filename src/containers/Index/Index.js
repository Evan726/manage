import React from 'react';
export default class Index extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="s_content">
                <div className="s_breadcrumb">
                    首页
                </div>
                <div className="s_searchBox clearfix">
                    <div className="s_left">
                        <form action="">
                            搜索
                        </form>
                    </div>
                    <div className="s_right">
                        <button className="s_btn s_m_r_10">Default</button>
                        <button className="s_btn s_btn_red">添加列表</button>
                    </div>
                </div>
                <div className="s_tableBox">
                    <table className="s_table">
                        <thead>
                            <tr>
                                <th>标题</th>
                                <th>标题</th>
                                <th>标题</th>
                                <th>标题</th>
                                <th>标题</th>
                                <th>标题</th>
                                <th>标题</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}