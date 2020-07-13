import React from 'react';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Picture from '../components/picture';
import Footer from '../components/footer';
import '../static/css/pages.css';

const Home = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="Hi all, I'm Sarvar 🤟✌️👋" subtitle="A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks." />
    <h3>⚡ React native apps (android)</h3>
    <hr />
    <div className="row">
      <div className="col-md-3">
        <Picture
          source="https://lh3.googleusercontent.com/aoXaYduUUz-7MxyfaJiZGx6PBBiczlRz_33_eRudvXOIdM2veKjd-CYisvye_GCuAw=s360-rw"
          alt="PointMax"
          deployed="https://play.google.com/store/apps/details?id=io.pointmax.app"
        />
      </div>
      <div className="col-md-3">
        <Picture
          source="https://lh3.googleusercontent.com/KOU3pdyIHq_pvqYYFaPUvFs4jsYMzr1tRFdBjBRoTklo8Zxd-olKVWPgXyOw1nAssjQ=s360-rw"
          alt="TCMF"
          deployed="https://play.google.com/store/apps/details?id=uz.tcmf.app"
        />
      </div>
      <div className="col-md-3">
        <Picture
          source="https://lh3.googleusercontent.com/HxJUjxwVMipr1s-s0i2hp9asODN3DAohHsJWlBzJu-Bqp_feILGUuHWZPC5h0stfwiE=s360-rw"
          alt="My Task"
          deployed="https://play.google.com/store/apps/details?id=uz.mytask"
        />
      </div>
      <div className="col-md-3">
        <Picture
          source="https://lh3.googleusercontent.com/-VCP4bbNPTI0D5pSWImMN-PH0QSvHc_Hrb89PiEVjVw8uBRFRjcof6hlmUzECGkZkFI=s360-rw"
          alt="Vodiy bozor"
          deployed="https://play.google.com/store/apps/details?id=uz.vodiybozor"
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-3">
        <Picture
          source="https://lh3.googleusercontent.com/jY_DZmh3z_nOawyyfowP55yorlG8uSuAKDhvYPLaPbDmO2DY05QVSm5VaHlZkYfVy8vE=s360-rw"
          alt="TOKYO 2020"
          deployed="https://play.google.com/store/apps/details?id=uz.tokyochat"
        />
      </div>
      <div className="col-md-3">
        <Picture
          source="https://lh3.googleusercontent.com/fZiKl2ZZB7izh7VqsRJRO5K9lo5PNf_hWCgvG6Zt5Qc4Q4R2CdLSqSQGm23AV7mE_w=s360-rw"
          alt="Tantana"
          deployed="https://play.google.com/store/apps/details?id=uz.tantana"
        />
      </div>
      <div className="col-md-3">
        <Picture
          source="https://lh3.googleusercontent.com/pwP8nUFfDHXdsvGsSgJL1OT62IdHaFiyfkdtp-bIa6wpu6MujeL-TWMdyIDeKzCFGDI=s360-rw"
          alt="Crowntools"
          deployed="https://play.google.com/store/apps/details?id=uz.crown"
        />
      </div>
      <div className="col-md-3">
        <Picture
          source="https://lh3.googleusercontent.com/WVUqtDVN8jwyVYLOqRES2_0CcBR0Ivq1fSoTZwpJwVKRFivId0G8xDEKtzbfJkGPwooz=s360-rw"
          alt="Anor"
          deployed="https://play.google.com/store/apps/details?id=uz.anor"
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-3">
        <Picture
          source="https://lh3.googleusercontent.com/6QBYmW_7_aitn3DAFe1-fR14Cxq44Ry87uOZVCj9IqpmoCwpfB_AEmlFl__PJKtllPA=s360-rw"
          alt="Xojaka"
          deployed="https://play.google.com/store/apps/details?id=com.xojaka"
        />
      </div>
    </div>
    <h3 className="frontend">⚡ React native apps (iOS)</h3>
    <hr />
    <div className="row">
      <div className="col-md-3">
        <Picture
          source="https://lh3.googleusercontent.com/aoXaYduUUz-7MxyfaJiZGx6PBBiczlRz_33_eRudvXOIdM2veKjd-CYisvye_GCuAw=s360-rw"
          alt="PointMax"
          deployed="https://apps.apple.com/us/app/pointmax/id1451454175?l=ru&ls=1"
        />
      </div>
      <div className="col-md-3">
        <Picture
          source="https://lh3.googleusercontent.com/jY_DZmh3z_nOawyyfowP55yorlG8uSuAKDhvYPLaPbDmO2DY05QVSm5VaHlZkYfVy8vE=s360-rw"
          alt="TOKYO 2020"
          deployed="https://play.google.com/store/apps/details?id=uz.tokyochat"
        />
      </div>
      <div className="col-md-3">
        <Picture
          source="https://lh3.googleusercontent.com/WVUqtDVN8jwyVYLOqRES2_0CcBR0Ivq1fSoTZwpJwVKRFivId0G8xDEKtzbfJkGPwooz=s360-rw"
          alt="Anor"
          deployed="https://apps.apple.com/us/app/anor/id1506369097?ls=1"
        />
      </div>
      <div className="col-md-3">
        <Picture
          source="https://lh3.googleusercontent.com/-VCP4bbNPTI0D5pSWImMN-PH0QSvHc_Hrb89PiEVjVw8uBRFRjcof6hlmUzECGkZkFI=s360-rw"
          alt="Vodiy bozor"
          deployed="https://apps.apple.com/us/app/sportuzchat/id1498352113?ls=1"
        />
      </div>
    </div>
    <div className="row">
      <div className="col-md-3">
        <Picture
          source="https://lh3.googleusercontent.com/6QBYmW_7_aitn3DAFe1-fR14Cxq44Ry87uOZVCj9IqpmoCwpfB_AEmlFl__PJKtllPA=s360-rw"
          alt="Xojaka"
          deployed="https://apps.apple.com/us/app/id1518524175"
        />
      </div>
      <div className="col-md-3">
        <Picture
          source="https://lh3.googleusercontent.com/fZiKl2ZZB7izh7VqsRJRO5K9lo5PNf_hWCgvG6Zt5Qc4Q4R2CdLSqSQGm23AV7mE_w=s360-rw"
          alt="Tantana"
          deployed="https://apps.apple.com/us/app/tantanaapp/id1483930147"
        />
      </div>
      <div className="col-md-3">
        <Picture
          source="https://lh3.googleusercontent.com/pwP8nUFfDHXdsvGsSgJL1OT62IdHaFiyfkdtp-bIa6wpu6MujeL-TWMdyIDeKzCFGDI=s360-rw"
          alt="Crowntools"
          deployed="https://apps.apple.com/us/app/crowntools/id1504275768"
        />
      </div>
      <div className="col-md-3">
        <Picture
          source="https://lh3.googleusercontent.com/6lF_nmJx3EpdXXD7q_ogiKYMTbYGDE4CzrJsBEaN5H0bPwlImk6l79fqhNYH7mqMOnQ"
          alt="BizTv"
          deployed="https://apps.apple.com/uz/app/biz/id1519518494"
        />
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
