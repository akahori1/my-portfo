import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">自己紹介</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            <li>名前：赤堀将太郎</li>
            <li>年齢：２９才</li>
            <li>最終学歴：東京大学医学部卒業</li>
            <li>職業：医師（精神科医）、フルスタックエンジニア</li>
          </p>
          <p>
            <li>できること１：React.js, node.js, express を使ったWebアプリケーション開発<br />
            （ログイン処理、認証画面の実装も可能です）
            </li>
            <li>
              できること２：PHPを使ったサイト開発（Wordpress）
            </li>
            <li>
              できること３：pythonを用いた機械学習、深層学習アプリの開発<br />
              SVM,PCA,アンサンブルなど一般的な機械学習手法全般<br />
              GAN、オートエンコーダーを用いた画像処理<br />
              BERTを用いた文章処理（類似文章検索など）<br />
            </li>
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">実績</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            可能なスキルは、フロントエンドならReact.js、PHPになります。<br />
            また機械学習全般、kerasもしくはPyTorchを用いた深層学習のアルゴリズム作成も可能です。
          </p>
          <p>
          <a href="https://karadaclinic.co.jp/">クリニックのホームページ</a><br />
          <a href="https://hairsalon-a-to.com/">サロンのホームページ</a><br />
          <a href="https://master.d3kma7jfm5tbei.amplifyapp.com/">React.jsで制作したブログサイト</a><br />
          <a href="https://github.com/akahori1/3DCNN">3DCNNの実装について</a><br />
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">その他</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            精神科医としてうつ病、パニック障害を治すことができますので、近しい方で悩まれている方のオンラインカウンセリングも受け付けております。
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
