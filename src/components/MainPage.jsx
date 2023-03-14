import reactImage from "../Images/react.png";
import JsImage from "../Images/js.png";
import AWSImage from "../Images/aws.jpg";
import profileImage from "../Images/ayanokoji.jpg";

const MainPage = () => {
    return (
        <div className="container text-center">
            <h1>ryutizm Code</h1>

            <img src={profileImage} className="profileImage" />

            <p>
                ryutizmです。普段はReactの勉強をしつつ、Typescript, TailwindCSS, Next.jsを並行して学習しています。<br />
                現在は独学ですが、業務でプログラミングができるように日々精進しています。
            </p>

            <section class="page-section" id="services">
                <div className="service">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
                        <h3 class="section-subheading text-muted mb-5">
                        私が作った作品一覧です<br />
                        ※今後アプデ予定
                        </h3>
                    </div>
                    <div class="row text-center">
                        <div class="col-md-4">
                            <span class="fa-stack fa-4x">
                                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 class="my-3">ECサイト</h4>
                            <p class="text-muted">
                                今後作成予定
                            </p>
                        </div>

                        <div class="col-md-4">
                            <span class="fa-stack fa-4x">
                                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 class="my-3">レスポンシブサイト</h4>
                            <p class="text-muted">
                                今後作成予定
                            </p>
                        </div>

                        <div class="col-md-4">
                            <span class="fa-stack fa-4x">
                                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 class="my-3">ウェブセキュリティ</h4>
                            <p class="text-muted">
                                今後作成予定
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skill">
                <div class="text-center">
                    <h1 class="title">スキル</h1>
                    <div class="row text-center">
                        <div class="col-md-4 services">
                            <img src={reactImage} />
                            <h4>React</h4>
                            <p>Reactがつかえます</p>
                        </div>

                        <div class="col-md-4 services">
                            <img src={JsImage} />
                            <h4>HTML/CSS/JS</h4>
                            <p>HTML/CSS/JSがつかえます</p>
                        </div>

                        <div class="col-md-4 services">
                            <img src={AWSImage} />
                            <h4>AWS</h4>
                            <p>AWSがつかえます</p>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary">
                        スキル一覧
                    </button>
                </div>
            </section>
        </div>
    )
}

export default MainPage
