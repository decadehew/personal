import React, { Component } from 'react';
import { Row, CardPanel, Collection, CollectionItem } from 'react-materialize';
import { Collapsible, CollapsibleItem, Card, CardTitle } from 'react-materialize';
import { Modal, Button } from 'react-materialize';

class Intro extends Component {
    render() {
        return (
            <div className="container">
                <Row>
                    <div id="about" className="section-header section scrollspy">
                        <a href="#about" >關於我</a>
                    </div>
                    <Card
                        className=''
                        actions={[<Modal
                            key={1}
                            header='自傳'
                            fixedFooter
                            trigger={<Button>點我(自傳)</Button>}>
                            {this.props.autobiography}
                        </Modal>]}
                        title=''>
                        {this.props.selfIntro}
                    </Card>
                </Row>
                <Row>
                    <div id="experice" className="section-header section scrollspy">
                        <a href="#experic">經歷與背景</a>
                    </div>
                    <CardPanel className="black-text">
                        <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
                    </CardPanel>
                </Row>
                <Row>
                    <div id="tech" className="section-header section scrollspy">
                        <a href="#tech">技術</a>
                        <span className="expand tooltipped"  data-position="bottom" data-delay="50" data-tooltip="展開／疊起">
                            <i className="material-icons">format_line_spacing</i>
                        </span>
                    </div>
                    <Collapsible popout>
                        <CollapsibleItem header='Web知識' icon='filter_drama' className="active">
                            HTML5
                            CSS3
                            JavaScript
                            Git基本命令
                            基礎作業系統操作
                        </CollapsibleItem>
                        <CollapsibleItem header='前端工程化' icon='place' className="active">
                            Gulp，Webpack
                            了解CommonJs， AMD
                        </CollapsibleItem>
                        <CollapsibleItem header='框架' icon='whatshot' className="active">
                            Reactjs，Vuejs
                            Expressjs
                        </CollapsibleItem>
                        <CollapsibleItem header='其他' icon='whatshot' className="active">
                            資料庫：MongoDB
                            HTTP
                        </CollapsibleItem>
                    </Collapsible>

                </Row>
                <div className="col hide-on-small-only m3 l2 right-contents">
                    <ul className="section table-of-contents">
                        <li><a href="#about">關於我</a></li>
                        <li><a href="#experice">經歷與背景</a></li>
                        <li><a href="#tech">技術</a></li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default Intro