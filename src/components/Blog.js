import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';

class Blog extends Component {
    render() {
        return (
            <div className="container">
                <div className="row"></div>
                <Card 
                    header={<CardTitle image='https://placeimg.com/640/480/tech'>技術文章</CardTitle>}
                    actions={[<a href='https://decadehew.github.io/' target="_blank" className="blog-link" key={"link"}>快點點我</a>]}>
                    這個將會連結到屬於Blog平台。那裏會將是我在學習過程中所紀錄技術文章(2,4,6將會更新文章)。
                    如內容有誤或隱私的問題，請告知我，將會儘快處理！謝謝❤️
                </Card>
            </div>
            
        )
    }
}

export default Blog;